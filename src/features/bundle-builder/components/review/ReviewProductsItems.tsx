import { useBundle } from "../../hooks/useBundle";
import { useReviewCategoryItems } from "../../hooks/useReviewCategoryItems";
import type { CategoryKey } from "../../types";
import RequiredProducts from "./RequiredProducts";
import ReviewProductItem from "./ReviewProductItem";
import ReviewSection from "./ReviewSection";

type ReviewProductsItemsProps = {
  categoryKey: CategoryKey;
  title: string;
};
export default function ReviewProductsItems({
  categoryKey,
  title,
}: ReviewProductsItemsProps) {
  const { dispatch } = useBundle();
  const items = useReviewCategoryItems({ categoryKey });
  if (items.length === 0) return null;

  return (
    <ReviewSection title={title}>
      <div className="space-y-3">
        {items.map((item) => {
          const {
            productId,
            variantId,
            product,
            variant,
            price,
            compareAtPrice,
          } = item;

          if (!product) return null;
          return (
            <ReviewProductItem
              key={productId + (variantId ?? "")}
              name={product.name}
              variantName={variant?.name}
              image={variant?.thumbnail ?? product.thumbnail}
              price={price}
              compareAtPrice={compareAtPrice}
              quantity={item.quantity}
              increment={() =>
                dispatch({
                  type: "SET_PRODUCT_QUANTITY",
                  payload: {
                    productId,
                    variantId: variantId ?? null,
                    quantity: item.quantity + 1,
                    category: categoryKey,
                  },
                })
              }
              decrement={() =>
                dispatch({
                  type: "SET_PRODUCT_QUANTITY",
                  payload: {
                    productId,
                    variantId: variantId ?? null,
                    quantity: item.quantity - 1,
                    category: categoryKey,
                  },
                })
              }
            />
          );
        })}
        <RequiredProducts categoryKey={categoryKey} />
      </div>
    </ReviewSection>
  );
}
