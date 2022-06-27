import { useEffect, useState } from "react";
import ShoppingCartLocalProvider from "./providers/shopping-cart-provider";
import ShoppingCart from "./shopping-cart";
import { ProductsProvider } from "./shopping-cart/products-context";

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Pizza",
          price: "10.00",
          color: "Red",
          background: "from-cyan-500 to-blue-500",
        },
      ]);
    }, 300);
  });
}

function useProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProducts().then((p) => {
      setProducts(p);
      setLoading(false);
    });
  }, []);

  return { products, loading };
}

export default function App() {
  return (
    <main className="tracking-tight">
      <ProductsProvider value={{ useProducts }}>
        <ShoppingCartLocalProvider>
          <ShoppingCart />
        </ShoppingCartLocalProvider>
      </ProductsProvider>
    </main>
  );
}
