import { useBundle } from "./useBundle";

export function useSelectedItems() {
  const { state } = useBundle();

  const items = [
    ...state.cameras,
    ...state.sensors,
    ...state.accessories,
  ].filter((item) => item.quantity > 0);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    count,
    hasItems: count > 0,
  };
}
