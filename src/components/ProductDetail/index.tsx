import { useContext } from "react";
import { CartContext } from "../../context";

import "./styles.css";
import { XMarkIcon } from "@heroicons/react/20/solid";

const ProductDetail = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("Context error");

  const { isProductDetailOpen, closeProductDetail } = context;

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
    </aside>
  );
};

export default ProductDetail;
