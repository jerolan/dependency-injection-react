import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export default function useProductsQuery(search) {
  const { data: products, isLoading: loading } = useQuery(
    ["products", search],
    async () => {
      const {
        products: { data },
      } = await request(
        "http://localhost:3000/graphql",
        gql`
          query {
            products {
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

      return data;
    }
  );

  return { products, loading };
}
