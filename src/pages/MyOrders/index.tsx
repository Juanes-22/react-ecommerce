import { Link } from "react-router-dom";

import Layout from "../Layout";

import OrdersCard from "../../components/OrdersCard";
import { useCartContext } from "../../context";

export default function MyOrders() {
  const { orders } = useCartContext();

  return (
    <Layout>
      <div className="flex justify-center items-center w-80 relative mb-6">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      
      {orders.map((order, index) => (
        <Link to={`/my-orders/${index}`}>
          <OrdersCard
            key={index}
            totalPrice={order?.totalPrice}
            totalProducts={order?.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}
