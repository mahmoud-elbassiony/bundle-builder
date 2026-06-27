import { useBundle } from "./useBundle";
import type { CategoryKey } from "../types";
import { selectCategoryItems } from "../state/selectors";

export function useReviewCategoryItems({
  categoryKey,
}: {
  categoryKey: CategoryKey;
}) {
  const { data, state } = useBundle();

  return selectCategoryItems(state, data, categoryKey);
}
