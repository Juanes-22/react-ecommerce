import { useContext } from "react";
import { CartContext } from "../../context";

import "./styles.css";
import { XMarkIcon } from "@heroicons/react/20/solid";

const ProductDetail = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Context error");

  const { isProductDetailOpen, closeProductDetail, productDetail } = context;

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 cursor-pointer"
          onClick={() => closeProductDetail()}
        />
      </div>
      <figure className="w-full h-1/3 px-6">
        <img
          className="w-full h-full object-contain rounded-lg"
          src={productDetail?.image}
          alt={productDetail?.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${productDetail?.price}</span>
        <span className="font-medium text-md">{productDetail?.title}</span>
        <span className="font-light text-sm">{productDetail?.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
