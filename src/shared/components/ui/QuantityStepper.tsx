function PlusIcon() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
    >
      <path d="M7.33333 3.33333H4.66667V0.666667C4.66667 0.489856 4.59643 0.320286 4.4714 0.195262C4.34638 0.0702379 4.17681 0 4 0C3.82319 0 3.65362 0.0702379 3.5286 0.195262C3.40357 0.320286 3.33333 0.489856 3.33333 0.666667V3.33333H0.666667C0.489856 3.33333 0.320286 3.40357 0.195262 3.5286C0.0702379 3.65362 0 3.82319 0 4C0 4.17681 0.0702379 4.34638 0.195262 4.4714C0.320286 4.59643 0.489856 4.66667 0.666667 4.66667H3.33333V7.33333C3.33333 7.51014 3.40357 7.67971 3.5286 7.80474C3.65362 7.92976 3.82319 8 4 8C4.17681 8 4.34638 7.92976 4.4714 7.80474C4.59643 7.67971 4.66667 7.51014 4.66667 7.33333V4.66667H7.33333C7.51014 4.66667 7.67971 4.59643 7.80474 4.4714C7.92976 4.34638 8 4.17681 8 4C8 3.82319 7.92976 3.65362 7.80474 3.5286C7.67971 3.40357 7.51014 3.33333 7.33333 3.33333Z" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.33333 5.6H0.666667C0.489856 5.6 0.320286 5.51571 0.195262 5.36569C0.0702379 5.21566 0 5.01217 0 4.8C0 4.58783 0.0702379 4.38434 0.195262 4.23431C0.320286 4.08429 0.489856 4 0.666667 4H7.33333C7.51014 4 7.67971 4.08429 7.80474 4.23431C7.92976 4.38434 8 4.58783 8 4.8C8 5.01217 7.92976 5.21566 7.80474 5.36569C7.67971 5.51571 7.51014 5.6 7.33333 5.6Z" />
    </svg>
  );
}

type QuantityStepperVariant = "default" | "white";
type QuantityStepperProps = {
  quantity: number;
  increment: VoidFunction;
  decrement: VoidFunction;
  disabled?: boolean;
  variant?: QuantityStepperVariant;
  ariaLabel?: string;
};
const variantStyles: Record<QuantityStepperVariant, string> = {
  default:
    "not-disabled:bg-neutral-100 disabled:border-2 disabled:border-neutral-150",
  white:
    "bg-white not-disabled:bg-white disabled:bg-neutral-50 disabled:border-2 disabled:border-neutral-150",
};
export default function QuantityStepper({
  quantity,
  increment,
  decrement,
  disabled = false,
  variant = "default",
  ariaLabel = "item",
}: QuantityStepperProps) {
  const baseButtonClass =
    "flex size-5 items-center justify-center rounded-sm px-[3.5px] text-xs not-disabled:cursor-pointer text-neutral-600";
  const buttonClassName = `${baseButtonClass} ${variantStyles[variant]}`;
  return (
    <div className="flex items-center gap-1.5">
      <button
        className={buttonClassName}
        disabled={disabled || quantity === 0}
        onClick={decrement}
        aria-label={`Decrease quantity of ${ariaLabel}`}
      >
        <MinusIcon />
      </button>
      <span className="text-sm leading-4 font-semibold text-neutral-950">
        {quantity}
      </span>
      <button
        className={buttonClassName}
        onClick={increment}
        disabled={disabled}
        aria-label={`Increase quantity of ${ariaLabel}`}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
