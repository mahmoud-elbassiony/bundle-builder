export const formatPrice = (value: number) =>
  value === 0 ? "FREE" : `$${value.toFixed(2)}`;
