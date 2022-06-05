import { useProductsRestQuery, useProductsGraphQlQuery } from "../queries";
import { useProductsReduxQuery } from "../redux";
import { ProductsProvider } from "./products-context";
import ShoppingCartContent from "./shopping-cart-content";

export default function ShoppingCart() {
  return (
    <ProductsProvider value={{ useProductsQuery: useProductsReduxQuery }}>
      <ShoppingCartContent />
    </ProductsProvider>
  );
}
