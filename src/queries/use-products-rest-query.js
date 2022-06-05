import { useQuery } from "react-query";

export default function useProductsQuery(search) {
  const { data: products, isLoading: loading } = useQuery(
    ["products", search],
    () => {
      return fetch(`http://localhost:3000/api/products?search=${search}`).then(
        (res) => res.json()
      );
    }
  );

  return { products, loading };
}
