import satisfactionImg from "@/assets/images/satisfaction-badge.png";
import { useTotalPrice } from "@/features/bundle-builder/hooks/useTotalPrice";
import { formatPrice } from "@/shared/utils/formatPrice";

export function TotalSummary() {
  const { subtotal, compareAtTotal, discount, monthly } = useTotalPrice();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="size-[78px]">
          <img
            src={satisfactionImg}
            alt="satisfaction badge"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="bg-primary rounded-[3px] px-2 py-[5px] text-xs leading-none font-medium tracking-[-5%] text-white">
            as low as {formatPrice(monthly)}/mo
          </div>

          <div className="flex items-baseline gap-2">
            {!!discount && (
              <span className="text-lg leading-5 font-medium tracking-[0.25%] text-neutral-500 line-through">
                {formatPrice(compareAtTotal)}
              </span>
            )}
            <span className="text-primary text-2xl leading-8 font-bold tracking-[-0.13%]">
              {formatPrice(subtotal)}
            </span>
          </div>
        </div>
      </div>
      {!!discount && (
        <p className="text-teal mt-3.5 text-center text-xs font-semibold">
          Congrats! You're saving {formatPrice(discount)} on your security
          bundle!
        </p>
      )}
    </div>
  );
}
