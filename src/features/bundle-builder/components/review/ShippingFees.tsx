import shippingImage from "@/assets/images/delivery.png";
import ReviewItemPricing from "./review-item/ReviewItemPricing";
import ReviewItemImage from "./review-item/ReviewItemImage";
import ReviewItemName from "./review-item/ReviewItemName";
export default function ShippingFees() {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[10px]">
      <div className="flex items-center gap-3">
        <ReviewItemImage image={shippingImage} alt="delivery" />
        <ReviewItemName name="Fast Shipping" />
      </div>
      <ReviewItemPricing price={0} compareAtPrice={5.99} />
    </div>
  );
}
