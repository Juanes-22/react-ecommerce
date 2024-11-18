import Layout from "../Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";

import { Product } from "../../types";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

import { useCartContext } from "../../context";

export default function Home() {
  const { products } = useCartContext();

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}
