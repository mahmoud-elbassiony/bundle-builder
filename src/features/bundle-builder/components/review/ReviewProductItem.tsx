import QuantityStepper from "@/shared/components/ui/QuantityStepper";
import ReviewItemPricing from "./review-item/ReviewItemPricing";
import ReviewItemImage from "./review-item/ReviewItemImage";
import ReviewItemName from "./review-item/ReviewItemName";

type ReviewProductItemProps = {
  name: string;
  image: string;
  quantity: number;
  variantName?: string | null;
  price: number;
  compareAtPrice: number | null;
  increment: VoidFunction;
  decrement: VoidFunction;
  isRequired?: boolean;
};

export default function ReviewProductItem(props: ReviewProductItemProps) {
  const {
    name,
    image,
    variantName = "",
    quantity,
    price,
    compareAtPrice,
    increment,
    decrement,
    isRequired,
  } = props;
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <ReviewItemImage image={image} alt={name} />
        <ReviewItemName name={`${name} ${variantName || ""}`} />
      </div>
      <div className="flex items-center gap-4">
        <QuantityStepper
          decrement={decrement}
          increment={increment}
          quantity={quantity}
          disabled={isRequired}
          variant="white"
          ariaLabel={`${name} ${variantName || ""}`}
        />
        <ReviewItemPricing
          price={price * quantity}
          compareAtPrice={compareAtPrice ? compareAtPrice * quantity : null}
        />
      </div>
    </div>
  );
}
