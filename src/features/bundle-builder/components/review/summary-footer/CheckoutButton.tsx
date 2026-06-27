import { useCheckout } from "@/features/bundle-builder/hooks/useCheckout";

export function CheckoutButton() {
  const { checkout } = useCheckout();

  return (
    <button
      onClick={checkout}
      className="font-norms bg-primary w-full rounded-sm px-4 py-[13px] text-[17px] leading-none font-bold text-white"
    >
      Checkout
    </button>
  );
}
