import { useSelectedItems } from "./useSelectedItems";

export function useCheckout() {
  const { count } = useSelectedItems();

  function checkout() {
    if (count === 0) {
      alert("Please add items before checkout");
      return;
    }
    alert("Proceeding to checkout...");
  }

  return { checkout };
}
