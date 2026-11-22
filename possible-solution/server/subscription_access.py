"""Provider-neutral plan catalog and trusted-subscription entitlement mapping."""

from dataclasses import asdict, dataclass
from typing import Optional


@dataclass(frozen=True)
class Plan:
    id: str
    name: str
    monthly_price_usd_cents: int
    features: tuple[str, ...]
    purchasable: bool = False


@dataclass(frozen=True)
class SubscriptionSnapshot:
    """A normalized subscription record supplied by a trusted billing adapter."""

    plan_id: str
    status: str


PLANS = (
    Plan(
        id="explorer",
        name="Explorer",
        monthly_price_usd_cents=0,
        features=("historical_forecasts",),
    ),
    Plan(
        id="traveler_plus",
        name="Traveler Plus",
        monthly_price_usd_cents=299,
        features=(
            "historical_forecasts",
            "saved_airports",
            "weekday_comparisons",
            "shared_trip_summaries",
        ),
    ),
    Plan(
        id="small_team",
        name="Small Team",
        monthly_price_usd_cents=999,
        features=(
            "historical_forecasts",
            "saved_airports",
            "weekday_comparisons",
            "shared_trip_summaries",
            "shared_airport_views",
            "historical_exports",
            "team_access",
        ),
    ),
)

_PLANS_BY_ID = {plan.id: plan for plan in PLANS}
_FREE_PLAN = _PLANS_BY_ID["explorer"]
_ENTITLED_STATUSES = {"active", "trialing"}


def plan_catalog():
    return [asdict(plan) for plan in PLANS]


def entitlements_for(
    subscription: Optional[SubscriptionSnapshot],
) -> frozenset[str]:
    """Grant paid features only for a trusted, active subscription snapshot."""
    if subscription is None or subscription.status not in _ENTITLED_STATUSES:
        return frozenset(_FREE_PLAN.features)

    plan = _PLANS_BY_ID.get(subscription.plan_id, _FREE_PLAN)
    return frozenset(plan.features)


def has_entitlement(
    subscription: Optional[SubscriptionSnapshot], feature: str
) -> bool:
    return feature in entitlements_for(subscription)
