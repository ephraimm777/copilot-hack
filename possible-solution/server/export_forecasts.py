"""Export all model estimates for the static Flight Signal website."""

import json
from pathlib import Path

import pandas as pd

from app import airports, model


ROOT_DIR = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT_DIR / "client" / "src" / "lib" / "forecast-data.generated.ts"
days = range(1, 8)
airport_ids = [airport["id"] for airport in airports]
rows = [
    (day, airport_id)
    for day in days
    for airport_id in airport_ids
]
features = pd.DataFrame(rows, columns=["DayOfWeek", "DestAirportID"])
probabilities = model.predict_proba(features)
classes = [int(label) for label in model.classes_]
delay_index = classes.index(1)

forecasts = {}
for index, (day, airport_id) in enumerate(rows):
    row_probabilities = probabilities[index]
    delay_probability = float(row_probabilities[delay_index])
    forecasts[f"{day}:{airport_id}"] = {
        "delay_probability": delay_probability,
        "on_time_probability": 1.0 - delay_probability,
        "confidence": float(max(row_probabilities)),
    }

forecast_data = {"airports": airports, "forecasts": forecasts}
generated = (
    "import type { Airport, FlightPrediction } from './models';\n\n"
    "export const forecastData: {\n"
    "\tairports: Airport[];\n"
    "\tforecasts: Record<string, FlightPrediction>;\n"
    "} = "
    + json.dumps(forecast_data, indent=2, sort_keys=True)
    + ";\n"
)
OUTPUT_PATH.write_text(generated, encoding="utf-8")
print(f"Wrote {len(forecasts)} estimates to {OUTPUT_PATH}")
