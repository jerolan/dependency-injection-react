import { useQuery } from "react-query";
import { getProducts } from "../api";

export default function useProductsQuery(search) {
  const { data: products, isLoading: loading } = useQuery(
    ["products", search],
    () => getProducts({ search })
  );

  return { products, loading };
}
