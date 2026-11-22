"""Serve airport data and arrival-delay estimates from the trained flight model."""

import csv
import pickle
from pathlib import Path

from flask import Flask, jsonify, request
import pandas as pd

from subscription_access import plan_catalog


BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "model.pkl"
AIRPORTS_PATH = BASE_DIR / "airports.csv"

with MODEL_PATH.open("rb") as model_file:
    model = pickle.load(model_file)

with AIRPORTS_PATH.open("r", encoding="utf-8", newline="") as airports_file:
    airports = sorted(
        (
            {"id": int(row["OriginAirportID"]), "name": row["OriginAirportName"]}
            for row in csv.DictReader(airports_file)
        ),
        key=lambda airport: airport["name"].casefold(),
    )

airport_ids = {airport["id"] for airport in airports}

app = Flask(__name__)


@app.get("/health")
def health():
    return jsonify({"status": "ok"})


@app.get("/ready")
def ready():
    try:
        model_classes = {int(label) for label in model.classes_}
        is_ready = bool(airports) and 1 in model_classes
    except (AttributeError, TypeError, ValueError):
        is_ready = False

    if not is_ready:
        return jsonify({"status": "not_ready"}), 503
    return jsonify({"status": "ready"})


@app.get("/plans")
def get_plans():
    return jsonify(
        {
            "currency": "USD",
            "checkout_enabled": False,
            "plans": plan_catalog(),
        }
    )


@app.get("/airports")
def get_airports():
    return jsonify(airports)


@app.get("/predict")
def predict():
    raw_day = request.args.get("day_of_week")
    raw_airport = request.args.get("airport_id")
    if raw_day is None or raw_airport is None:
        return jsonify({"error": "day_of_week and airport_id are required."}), 400

    try:
        day_of_week = int(raw_day)
        airport_id = int(raw_airport)
    except ValueError:
        return jsonify({"error": "day_of_week and airport_id must be whole numbers."}), 400

    if day_of_week < 1 or day_of_week > 7:
        return jsonify({"error": "day_of_week must be between 1 (Monday) and 7 (Sunday)."}), 400
    if airport_id not in airport_ids:
        return jsonify({"error": "The selected airport is not available."}), 404

    features = pd.DataFrame(
        [[day_of_week, airport_id]], columns=["DayOfWeek", "DestAirportID"]
    )
    probabilities = model.predict_proba(features)[0]
    classes = [int(label) for label in model.classes_]
    try:
        delay_probability = float(probabilities[classes.index(1)])
    except ValueError:
        return jsonify({"error": "The model does not contain a delayed-flight class."}), 500

    return jsonify(
        {
            "delay_probability": delay_probability,
            "on_time_probability": 1.0 - delay_probability,
            "confidence": float(max(probabilities)),
        }
    )


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
