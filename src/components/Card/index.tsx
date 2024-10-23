import { useContext } from "react";

import { CartContext } from "../../context";
import { Product } from "../../types";

import { PlusIcon } from "@heroicons/react/20/solid";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Context error");

  const { count, setCount, openProductDetail } = context;

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => openProductDetail()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {product.category}
        </span>
        <img
          className="w-full h-full object-cover shadow-lg rounded-lg"
          src={product.image}
          alt="headphones"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => setCount(count + 1)}
        >
          <PlusIcon className="h-6" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>
    </div>
  );
};

export default Card;
