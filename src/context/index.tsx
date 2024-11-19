import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product, Order, Category } from "../types";

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
  searchByTitle: string;
  setSearchByTitle: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: Product[];
  searchByCategory: Category;
  setSearchByCategory: React.Dispatch<React.SetStateAction<Category>>;
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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState<Category>("all");

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

  const filterProductsByTitle = () => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filterProductsByCategory = () => {
    return products.filter((product) =>
      product.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredProducts(filterProductsByTitle());
    }
    if (searchByCategory) {
      setFilteredProducts(filterProductsByCategory());
    }

    if (!searchByTitle) setFilteredProducts(products);

  }, [products, searchByTitle]);

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
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext, useCartContext };
