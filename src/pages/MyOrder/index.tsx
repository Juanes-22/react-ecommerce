import Layout from "../Layout";

import { useCartContext } from "../../context";

import OrderCard from "../../components/OrderCard";
import { Link } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function MyOrder() {
  const { orders } = useCartContext();

  const currentPath = window.location.pathname;
  const index = currentPath.lastIndexOf("/") + 1;
  const pathParam = currentPath.substring(index);

  const getOrder = () => {
    const orderId =
      pathParam === "last" ? orders.length - 1 : parseInt(pathParam);
    return orders[orderId];
  };

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 relative mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 cursor-pointer" />
        </Link>
        <h1 className="font-medium text-xl">My Order</h1>
      </div>

      <div className="flex flex-col w-80">
        {getOrder().products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.image}
          />
        ))}
      </div>
    </Layout>
  );
}
