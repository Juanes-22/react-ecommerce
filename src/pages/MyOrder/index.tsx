import Layout from "../Layout";

import { useCartContext } from "../../context";

import OrderCard from "../../components/OrderCard";

export default function MyOrder() {
  const {
    order
  } = useCartContext();

  return (
    <Layout>
      <div className="flex flex-col w-80">
        {order?.products.map((product) => (
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
