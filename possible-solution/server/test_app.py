import unittest

import app as flight_api
from subscription_access import SubscriptionSnapshot, entitlements_for, has_entitlement


class FakeModel:
    classes_ = [0, 1]

    def predict_proba(self, rows):
        self.rows = rows
        return [[0.72, 0.28]]


class FlightApiTests(unittest.TestCase):
    def setUp(self):
        self.original_model = flight_api.model
        self.model = FakeModel()
        flight_api.model = self.model
        self.client = flight_api.app.test_client()

    def tearDown(self):
        flight_api.model = self.original_model

    def test_prediction_returns_delay_probability_and_confidence(self):
        response = self.client.get(
            "/predict", query_string={"day_of_week": 1, "airport_id": 15304}
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.get_json(),
            {
                "delay_probability": 0.28,
                "on_time_probability": 0.72,
                "confidence": 0.72,
            },
        )
        self.assertEqual(self.model.rows.columns.tolist(), ["DayOfWeek", "DestAirportID"])
        self.assertEqual(self.model.rows.iloc[0].tolist(), [1, 15304])

    def test_prediction_rejects_invalid_day_and_unknown_airport(self):
        invalid_day = self.client.get(
            "/predict", query_string={"day_of_week": 8, "airport_id": 15304}
        )
        unknown_airport = self.client.get(
            "/predict", query_string={"day_of_week": 1, "airport_id": 0}
        )

        self.assertEqual(invalid_day.status_code, 400)
        self.assertEqual(unknown_airport.status_code, 404)

    def test_health_and_readiness_checks(self):
        health = self.client.get("/health")
        ready = self.client.get("/ready")

        self.assertEqual(health.status_code, 200)
        self.assertEqual(health.get_json(), {"status": "ok"})
        self.assertEqual(ready.status_code, 200)
        self.assertEqual(ready.get_json(), {"status": "ready"})

    def test_readiness_fails_without_a_delayed_flight_class(self):
        self.model.classes_ = [0]
        response = self.client.get("/ready")

        self.assertEqual(response.status_code, 503)
        self.assertEqual(response.get_json(), {"status": "not_ready"})

    def test_plan_catalog_disables_checkout(self):
        response = self.client.get("/plans")

        self.assertEqual(response.status_code, 200)
        self.assertFalse(response.get_json()["checkout_enabled"])
        self.assertEqual(
            [plan["id"] for plan in response.get_json()["plans"]],
            ["explorer", "traveler_plus", "small_team"],
        )
        self.assertTrue(all(not plan["purchasable"] for plan in response.get_json()["plans"]))

    def test_entitlements_fail_closed_for_inactive_or_unknown_subscriptions(self):
        self.assertFalse(
            has_entitlement(
                SubscriptionSnapshot("traveler_plus", "past_due"), "saved_airports"
            )
        )
        self.assertFalse(
            has_entitlement(
                SubscriptionSnapshot("not_a_plan", "active"), "saved_airports"
            )
        )
        self.assertTrue(
            has_entitlement(
                SubscriptionSnapshot("traveler_plus", "active"), "saved_airports"
            )
        )
        self.assertEqual(entitlements_for(None), frozenset({"historical_forecasts"}))


if __name__ == "__main__":
    unittest.main()
