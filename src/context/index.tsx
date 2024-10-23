import { createContext, ReactNode, useState } from "react";

interface CartContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
