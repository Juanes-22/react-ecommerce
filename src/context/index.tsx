import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product, Order } from "../types";

import { CONFIG } from "../contants";

interface CartContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  isProductDetailOpen: boolean;
  productDetail: Product | undefined;
  setProductDetail: React.Dispatch<React.SetStateAction<Product | undefined>>;
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isCheckoutSideMenuOpen: boolean;
  openCheckoutSideMenu: () => void;
  closeCheckoutSideMenu: () => void;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const [productDetail, setProductDetail] = useState<Product | undefined>(
    undefined
  );
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const [products, setProducts] = useState<Product[]>([]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${CONFIG.apiUrl}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productDetail,
        setProductDetail,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        orders,
        setOrders,
        products,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext, useCartContext };
