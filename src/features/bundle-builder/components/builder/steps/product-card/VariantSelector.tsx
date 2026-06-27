import type { Variant } from "@/features/bundle-builder/types";

type VariantSelectorProps = {
  variants: Variant[];
  selectedVariantId: string;
  onVariantChange: (variant: Variant) => void;
};

export default function VariantSelector({
  selectedVariantId,
  variants,
  onVariantChange,
}: VariantSelectorProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {variants?.map((variant) => (
        <button
          key={variant.id}
          className={`flex cursor-pointer items-center rounded-xs border px-[3.5px] ${selectedVariantId === variant.id ? "border-teal bg-mint/4" : "border-neutral-300"}`}
          onClick={() => onVariantChange(variant)}
        >
          <div className="size-7">
            <img
              src={variant.thumbnail}
              alt={variant.name}
              className="object-contain"
            />
          </div>
          <span className="text-[10px] font-medium tracking-[0.6px]">
            {variant.name}
          </span>
        </button>
      ))}
    </div>
  );
}
