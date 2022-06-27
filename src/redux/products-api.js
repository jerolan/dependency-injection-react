import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (search) => {
        return `products?search=${search}`;
      },
    }),
  }),
});

const { useGetProductsQuery } = productsApi;

export function useProductsReduxQuery(search) {
  const { data: products, isLoading: loading } = useGetProductsQuery(search);
  return { products, loading };
}

export default productsApi;
