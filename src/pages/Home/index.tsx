import { useState, useEffect } from "react";

import Layout from "../Layout";
import Card from "../../components/Card";
import { Product } from "../../types";

const apiUrl = "https://fakestoreapi.com";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiUrl}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
