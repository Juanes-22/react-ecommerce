import { useContext } from "react";

import { PlusIcon, CheckIcon } from "@heroicons/react/20/solid";

import { CartContext } from "../../context";
import { Product } from "../../types";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Context error");

  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductDetail,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = context;

  const showProduct = (product: Product) => {
    openProductDetail();
    setProductDetail(product);
    closeCheckoutSideMenu();
  };

  const handleAddToCartClick = (event: React.MouseEvent, product: Product) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, product]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const isProductInCart = (id: number) => {
    return cartProducts.some((cartProduct) => cartProduct.id === id);
  };

  const renderIcon = (id: number) => {
    const iconClasses =
      "absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1";

    return isProductInCart(id) ? (
      <div className={`${iconClasses} bg-black`}>
        <CheckIcon className="h-6 w-6 text-white" />
      </div>
    ) : (
      <div
        className={`${iconClasses} bg-white`}
        onClick={(event) => handleAddToCartClick(event, product)}
      >
        <PlusIcon className="h-6 w-6" />
      </div>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {product.category}
        </span>
        <img
          className="w-full h-full object-cover shadow-lg rounded-lg"
          src={product.image}
          alt={product.title}
        />
        {renderIcon(product.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>
    </div>
  );
};

export default Card;
