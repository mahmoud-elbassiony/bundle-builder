export type CategoryKey = "cameras" | "sensors" | "accessories";

export type Bundle = {
  cameras: ProductCategory;
  sensors: ProductCategory;
  accessories: ProductCategory;
  plans: Plan[];
  defaultSelections: DefaultSelections;
};

// Categories
export type ProductCategory = {
  products: Product[];
  requiredProducts?: RequiredProduct[];
};

// Products
type BaseItemFields = {
  id: string;
  name: string;
  image: string;
  thumbnail: string;
  price: number; // fallback price
  compareAtPrice: number | null; // fallback price
  badge?: {
    text: string;
    type: ("discount" | "info") | (string & {});
  };
};
export type Product = BaseItemFields & {
  description: string;
  slug: string;
  variants?: Variant[];
};

export type Variant = BaseItemFields & {
  color: string;
};

// Required Product
export type RequiredProduct = BaseItemFields & {
  quantity: number;
};

// Plans
export type Plan = BaseItemFields;

// Default Selection
type DefaultSelections = {
  cameras: ProductSelection[];
  sensors: ProductSelection[];
  accessories: ProductSelection[];
  plans: string;
};

type ProductSelection = {
  productId: string;
  variantId?: string;
  quantity: number;
};
