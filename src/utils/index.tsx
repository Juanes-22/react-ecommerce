import { Product } from "../types";

export const getTotalPrice = (products: Product[]) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
