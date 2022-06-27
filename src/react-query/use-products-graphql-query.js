import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export default function useProductsQuery(search) {
  const { data: products, isLoading: loading } = useQuery(
    ["products", search],
    async () => {
      const { products } = await request(
        "http://localhost:3000/graphql",
        gql`
          query GetAllProducts($search: String!) {
            products(search: $search) {
              data {
                id
                name
                price
                color
                background
              }
            }
          }
        `,
        {
          search,
        }
      );

      return products;
    }
  );

  return { products, loading };
}
