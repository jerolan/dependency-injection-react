import ShoppingCart from "./shopping-cart";
import { ProductsProvider } from "./products-context";
import useProductsQuery from "./use-products-query";

export default function ShoppingCartApp() {
  return (
    <ProductsProvider value={{ useProductsQuery }}>
      <ShoppingCart />
    </ProductsProvider>
  );
}
