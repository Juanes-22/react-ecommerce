import { useContext } from "react";
import { CartContext } from "../../context";

import OrderCard from "../OrderCard";

import { XMarkIcon } from "@heroicons/react/20/solid";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Context error");

  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts } =
    context;

  const handleDelete = (id: number) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filteredProducts);
  }

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <XMarkIcon
          className="h-6 cursor-pointer"
          onClick={() => closeCheckoutSideMenu()}
        />
      </div>
      <div className="px-6 overflow-y-scroll">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.image}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
