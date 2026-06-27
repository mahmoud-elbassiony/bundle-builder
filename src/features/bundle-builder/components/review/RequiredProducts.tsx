import { useReviewRequiredItems } from "../../hooks/useReviewRequiredItems";
import type { CategoryKey } from "../../types";
import ReviewProductItem from "./ReviewProductItem";

export default function RequiredProducts({
  categoryKey,
}: {
  categoryKey: CategoryKey;
}) {
  const items = useReviewRequiredItems({ categoryKey });
  if (items?.length === 0) return null;
  return items?.map((item) => (
    <ReviewProductItem
      key={item.id}
      name={item.name}
      image={item.thumbnail}
      price={item.price}
      compareAtPrice={item.compareAtPrice}
      quantity={item.quantity}
      increment={() => {}}
      decrement={() => {}}
      isRequired
    />
  ));
}
