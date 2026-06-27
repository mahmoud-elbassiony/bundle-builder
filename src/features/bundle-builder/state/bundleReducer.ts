import type { Bundle, CategoryKey } from "../types";

export interface SelectedItem {
  productId: string;
  variantId?: string;
  quantity: number;
}

export type BundleState = {
  [K in CategoryKey]: SelectedItem[];
} & {
  selectedPlanId: string;
};

export const getInitialState = (bundleData: Bundle): BundleState => {
  const saved = localStorage.getItem("bundle");

  if (saved) {
    return JSON.parse(saved);
  }
  const defaultInitialState: BundleState = {
    cameras: bundleData.defaultSelections.cameras,
    sensors: bundleData.defaultSelections.sensors,
    accessories: bundleData.defaultSelections.accessories,
    selectedPlanId: bundleData.defaultSelections.plans,
  };

  return defaultInitialState;
};

export type BundleAction =
  | {
      type: "SET_PRODUCT_QUANTITY";
      payload: {
        productId: string;
        variantId: string | null;
        quantity: number;
        category: CategoryKey;
      };
    }
  | {
      type: "SELECT_PLAN";
      payload: {
        planId: string;
      };
    };

export function bundleReducer(
  state: BundleState,
  action: BundleAction,
): BundleState {
  switch (action.type) {
    case "SET_PRODUCT_QUANTITY": {
      const categoryItems = state[action.payload.category];

      const existingIndex = categoryItems.findIndex((item) =>
        action.payload.variantId
          ? item.productId === action.payload.productId &&
            item.variantId === action.payload.variantId
          : item.productId === action.payload.productId,
      );
      if (existingIndex >= 0) {
        if (action.payload.quantity <= 0) {
          // remove it
          return {
            ...state,
            [action.payload.category]: categoryItems.filter(
              (_, idx) => idx !== existingIndex,
            ),
          };
        } else {
          return {
            ...state,
            [action.payload.category]: categoryItems.map((item, idx) =>
              idx === existingIndex
                ? {
                    ...item,
                    quantity: action.payload.quantity,
                    ...(action.payload.variantId
                      ? { variantId: action.payload.variantId }
                      : {}),
                  }
                : item,
            ),
          };
        }
      }

      if (action.payload.quantity > 0) {
        const newItem = {
          productId: action.payload.productId,
          variantId: action.payload.variantId,
          quantity: action.payload.quantity,
        };
        const updatedCategoryItems = [...categoryItems, newItem].sort((a, b) =>
          String(a.productId).localeCompare(String(b.productId), undefined, {
            numeric: true,
          }),
        );
        return {
          ...state,
          [action.payload.category]: updatedCategoryItems,
        };
      }

      return state;
    }

    case "SELECT_PLAN": {
      return {
        ...state,
        selectedPlanId: action.payload.planId,
      };
    }
    default: {
      return state;
    }
  }
}
