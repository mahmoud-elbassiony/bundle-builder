import { useCallback } from "react";
import { useBundle } from "@/features/bundle-builder/hooks/useBundle";
import ProductCard from "./product-card/ProductCard";
import type { ProductCategory } from "@/features/bundle-builder/types";
import type { BundleState } from "@/features/bundle-builder/state/bundleReducer";

interface ProductsStepItemsProps {
  categoryData: ProductCategory;
  categoryKey: Exclude<keyof BundleState, "selectedPlanId">;
}

export default function ProductsStepItems({
  categoryData,
  categoryKey,
}: ProductsStepItemsProps) {
  const { state, dispatch } = useBundle();

  const handleUpdateQuantity = useCallback(
    (productId: string, variantId: string | null, quantity: number) => {
      dispatch({
        type: "SET_PRODUCT_QUANTITY",
        payload: {
          category: categoryKey,
          productId,
          variantId: variantId,
          quantity,
        },
      });
    },
    [categoryKey, dispatch],
  );

  const getCurrentQuantity = useCallback(
    (productId: string, variantId: string | undefined | null) => {
      const item = state[categoryKey].find((p) =>
        variantId
          ? p.productId === productId && p.variantId === variantId
          : p.productId === productId,
      );
      return item ? item.quantity : 0;
    },
    [state, categoryKey],
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {categoryData.products.map((product) => {
        const selectedProduct = state[categoryKey].find(
          (p) => p.productId === product.id,
        );
        return (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={!!selectedProduct}
            initialSelectedVariant={selectedProduct?.variantId ?? null}
            getCurrentQuantity={getCurrentQuantity}
            onUpdateQuantity={handleUpdateQuantity}
          />
        );
      })}
    </div>
  );
}
