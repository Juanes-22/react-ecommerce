export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Order {
  products: Product[];
  date: Date;
  totalProducts: number;
  totalPrice: number;
}

export type Category =
  | "all"
  | "clothes"
  | "electronics"
  | "furnitures"
  | "toys"
  | "others";
