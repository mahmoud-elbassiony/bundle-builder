import ReviewProductsItems from "./ReviewProductsItems";
import ReviewSection from "./ReviewSection";
import ReviewPlan from "./ReviewPlan";
import ShippingFees from "./ShippingFees";

export default function ReviewContentList() {
  return (
    <div className="space-y-2.5">
      <ReviewProductsItems categoryKey="cameras" title="Cameras" />
      <ReviewProductsItems categoryKey="sensors" title="Sensors" />
      <ReviewProductsItems categoryKey="accessories" title="Accessories" />
      <ReviewSection title="Plans">
        <ReviewPlan />
      </ReviewSection>
      <ReviewSection>
        <ShippingFees />
      </ReviewSection>
    </div>
  );
}
