import { useBundle } from "./useBundle";
import { selectCompareAtTotal, selectSubtotal } from "../state/selectors";
const months = 12;

export function useTotalPrice() {
  const { state, data } = useBundle();
  const subtotal = selectSubtotal(state, data);
  const compareAtTotal = selectCompareAtTotal(state, data);
  const monthly = Math.ceil((subtotal / months) * 100) / 100;
  const discount = compareAtTotal - subtotal;
  return { subtotal, compareAtTotal, discount, monthly };
}
