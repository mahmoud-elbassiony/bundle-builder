import { formatPrice } from "@/shared/utils/formatPrice";

type ReviewItemPricingProps = {
  price: number;
  compareAtPrice?: number | null;
};
export default function ReviewItemPricing({
  price,
  compareAtPrice,
}: ReviewItemPricingProps) {
  return (
    <div className="flex flex-col items-end text-xs leading-4 font-semibold tracking-[0.5%] lg:text-sm">
      {compareAtPrice ? (
        <span className="text-neutral-500 line-through">
          {formatPrice(compareAtPrice)}
        </span>
      ) : null}
      <span className="text-primary">{formatPrice(price)}</span>
    </div>
  );
}
