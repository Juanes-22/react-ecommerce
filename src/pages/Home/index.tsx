import Layout from "../Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";

import { Product } from "../../types";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

import { useCartContext } from "../../context";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const { products, filteredProducts, searchByTitle, setSearchByTitle } =
    useCartContext();

  const renderProducts = () => {
    if (searchByTitle.length > 0) {
      if (filteredProducts.length > 0) {
        return filteredProducts.map((product: Product) => (
          <Card key={product.id} product={product} />
        ));
      } else {
        return (
          <div>
            No results found
          </div>
        )
      }
    } else {
      return products.map((product: Product) => (
        <Card key={product.id} product={product} />
      ));
    }
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-80 relative mb-6">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
        <div className="flex justify-center items-center gap-2 p-4">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <input
            className="rounded-lg border border-black w-80 p-3 mb-5 focus:outline-none bg-gray-100"
            onChange={(e) => setSearchByTitle(e.target.value)}
            type="text"
            placeholder="Search a product"
          />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderProducts()}
      </div>

      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}
