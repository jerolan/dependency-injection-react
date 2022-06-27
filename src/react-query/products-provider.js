import { ProductsProvider } from "../shopping-cart/products-context";
import useProductsRESTQuery from "./use-products-rest-query";
import useProductsGraphQLQuery from "./use-products-graphql-query";

export default function ProductsReactQueryProvider({ children, provider }) {
  const useProducts =
    provider === "rest"
      ? useProductsRESTQuery
      : provider === "graphql"
      ? useProductsGraphQLQuery
      : undefined;

  return (
    <ProductsProvider value={{ useProducts }}>{children}</ProductsProvider>
  );
}
