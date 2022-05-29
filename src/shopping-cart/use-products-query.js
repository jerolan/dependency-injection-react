import { useQuery } from "react-query";
import getProducts from "./get-products";

export default function useProductsQuery() {
  const { data: products, isLoading: loading } = useQuery("products", () =>
    getProducts()
  );

  return { products, loading };
}
