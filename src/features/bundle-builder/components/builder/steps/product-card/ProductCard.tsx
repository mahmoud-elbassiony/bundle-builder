import { useState } from "react";
import QuantityStepper from "@/shared/components/ui/QuantityStepper";
import type { Product, Variant } from "@/features/bundle-builder/types";
import VariantSelector from "./VariantSelector";
import { formatPrice } from "@/shared/utils/formatPrice";

export default function ProductCard({
  product,
  isSelected,
  initialSelectedVariant,
  getCurrentQuantity,
  onUpdateQuantity,
}: {
  product: Product;
  isSelected: boolean;
  initialSelectedVariant: string | null;
  getCurrentQuantity: (productId: string, variantId: string | null) => number;
  onUpdateQuantity: (
    productId: string,
    variantId: string | null,
    quantity: number,
  ) => void;
}) {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    initialSelectedVariant && product?.variants
      ? (product?.variants.find(
          (variant) => variant.id === initialSelectedVariant,
        ) ?? product?.variants?.[0])
      : null,
  );
  const productPrice = selectedVariant ? selectedVariant.price : product.price;
  const compareAtPrice = selectedVariant
    ? selectedVariant.compareAtPrice
    : product.compareAtPrice;
  const quantity = getCurrentQuantity(product.id, selectedVariant?.id ?? null);
  const productUrl = `/products/${product.slug}/${product.id}`;
  return (
    <div
      className={`items relative flex flex-1 flex-col gap-2.5 rounded-[10px] border-2 bg-white p-[11px] transition-colors duration-150 sm:flex-row ${isSelected ? "border-primary/70" : "border-transparent"}`}
    >
      <div className="mx-auto grid max-w-[100px] min-w-[100px] place-content-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain"
        />
      </div>
      {product.badge && (
        <span className="bg-primary absolute top-[11px] left-[11px] rounded-full px-1.5 py-0.5 text-xs leading-[15px] font-semibold text-white">
          {product.badge.text}
        </span>
      )}
      <div className="flex flex-1 flex-col">
        <span className="mb-2 font-semibold tracking-[0.6px] text-neutral-900">
          {product.name}
        </span>
        <div className="mb-2.5 text-sm leading-[130%] font-medium tracking-[0.6px]">
          <p className="text-neutral-900/75">{product.description}</p>
          <a
            href={
              selectedVariant
                ? `${productUrl}?variant=${selectedVariant.id}`
                : productUrl
            }
            aria-label={`Learn more about ${product.name}`}
            className="text-primary underline"
          >
            Learn More
          </a>
        </div>
        {/* variants */}
        {!!product.variants?.length && selectedVariant && (
          <VariantSelector
            variants={product.variants}
            onVariantChange={(variant) => setSelectedVariant(variant)}
            selectedVariantId={selectedVariant?.id}
          />
        )}
        <div className="mt-2.5 flex items-center justify-between gap-2.5">
          <QuantityStepper
            quantity={quantity}
            increment={() =>
              onUpdateQuantity(
                product.id,
                selectedVariant?.id ?? null,
                quantity + 1,
              )
            }
            decrement={() =>
              onUpdateQuantity(
                product.id,
                selectedVariant?.id ?? null,
                quantity - 1,
              )
            }
            ariaLabel={`${product.name} ${selectedVariant?.name || ""}`}
          />
          <div className="flex gap-x-[3px] tracking-[0.6px] lg:flex-col">
            {compareAtPrice && (
              <span className="text-danger line-through">
                {formatPrice(compareAtPrice)}
              </span>
            )}
            <span className="text-neutral-600">
              {formatPrice(productPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
