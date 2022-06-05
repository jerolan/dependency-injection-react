import { useProductsRestQuery, useProductsGraphQlQuery } from "../queries";
import { ProductsProvider } from "./products-context";
import ShoppingCartContent from "./shopping-cart-content";

export default function ShoppingCart() {
  return (
    <ProductsProvider value={{ useProductsQuery: useProductsGraphQlQuery }}>
      <ShoppingCartContent />
    </ProductsProvider>
  );
}
