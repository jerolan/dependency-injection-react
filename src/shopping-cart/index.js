import { useProductsQuery } from "../queries";
import { ProductsProvider } from "./products-context";
import ShoppingCart from "./shopping-cart";

export default function ShoppingCartApp() {
  return (
    <ProductsProvider value={{ useProductsQuery }}>
      <ShoppingCart />
    </ProductsProvider>
  );
}
