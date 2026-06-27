import type { BundleState, SelectedItem } from "./bundleReducer";
import type { Bundle, Product, ProductCategory, CategoryKey } from "../types";

/* Helpers */
function getCategoryData(
  bundleData: Bundle,
  category: CategoryKey,
): ProductCategory {
  return bundleData[category];
}

function getStateItems(state: BundleState, key: CategoryKey): SelectedItem[] {
  return state[key];
}

function findProduct(
  category: ProductCategory,
  productId: string,
): Product | undefined {
  return category.products.find((p) => p.id === productId);
}

function findVariant(product: Product, variantId?: string) {
  if (!variantId || !product.variants) return null;

  return product.variants.find((v) => v.id === variantId) || null;
}

/* Step Counts */
export function selectStepCount(state: BundleState, key: CategoryKey) {
  return getStateItems(state, key).reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
}

/* Selected Items */
export function selectCategoryItems(
  state: BundleState,
  bundleData: Bundle,
  category: CategoryKey,
) {
  const categoryData = getCategoryData(bundleData, category);

  return getStateItems(state, category)
    .filter((item) => item.quantity > 0)
    .flatMap((item) => {
      const product = findProduct(categoryData, item.productId);
      if (!product) return []; // Skips this item entirely and satisfies TS

      const variant = findVariant(product, item.variantId);
      const price = variant?.price ?? product.price;
      const compareAtPrice = variant?.compareAtPrice ?? product.compareAtPrice;

      return [
        {
          ...item,
          product, // TS now knows product is definitely defined here
          variant,
          price,
          compareAtPrice,
        },
      ];
    });
}

/* Required Products */
export function selectRequiredItems(
  state: BundleState,
  bundleData: Bundle,
  category: CategoryKey,
) {
  if (state[category].length === 0) {
    return [];
  }
  const categoryData = getCategoryData(bundleData, category);
  if (!categoryData.requiredProducts) return [];
  return categoryData.requiredProducts;
}

/* Review Items */
export function selectReviewItems(state: BundleState, bundleData: Bundle) {
  const cameras = selectCategoryItems(state, bundleData, "cameras");
  const sensors = selectCategoryItems(state, bundleData, "sensors");
  const accessories = selectCategoryItems(state, bundleData, "accessories");
  const requiredCameras = selectRequiredItems(state, bundleData, "cameras");
  const requiredSensors = selectRequiredItems(state, bundleData, "sensors");
  const requiredAccessories = selectRequiredItems(
    state,
    bundleData,
    "accessories",
  );

  return [
    ...cameras,
    ...requiredCameras,
    ...sensors,
    ...requiredSensors,
    ...accessories,
    ...requiredAccessories,
  ];
}

/* Plan */
export function selectSelectedPlan(state: BundleState, bundleData: Bundle) {
  return bundleData.plans.find((p) => p.id === state.selectedPlanId);
}

/* Totals */
export function selectSubtotal(state: BundleState, bundleData: Bundle) {
  return selectReviewItems(state, bundleData).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
}

export function selectCompareAtTotal(state: BundleState, bundleData: Bundle) {
  return selectReviewItems(state, bundleData).reduce(
    (sum, item) => sum + (item.compareAtPrice ?? item.price) * item.quantity,
    0,
  );
}
