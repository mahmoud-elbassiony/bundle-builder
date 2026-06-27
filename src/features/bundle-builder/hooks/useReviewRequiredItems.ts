import { useBundle } from "./useBundle";
import type { CategoryKey } from "../types";
import { selectRequiredItems } from "../state/selectors";

export function useReviewRequiredItems({
  categoryKey,
}: {
  categoryKey: CategoryKey;
}) {
  const { data, state } = useBundle();
  return selectRequiredItems(state, data, categoryKey);
}
