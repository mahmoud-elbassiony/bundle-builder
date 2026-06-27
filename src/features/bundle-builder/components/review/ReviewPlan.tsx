import { useBundle } from "../../hooks/useBundle";
import ReviewItemPricing from "./review-item/ReviewItemPricing";

export default function ReviewPlan() {
  const { state, data } = useBundle();
  const selectedPlan = data.plans.find((p) => p.id === state.selectedPlanId);

  if (!selectedPlan) return null;

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex aspect-[4] h-[41px] items-center">
        <img alt={selectedPlan.name} src={selectedPlan.thumbnail} />
      </div>

      <ReviewItemPricing
        price={selectedPlan.price}
        compareAtPrice={selectedPlan.compareAtPrice}
      />
    </div>
  );
}
