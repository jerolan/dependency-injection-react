import { QueryClient, QueryClientProvider } from "react-query";
import { ProductsReactQueryProvider } from "./react-query";
import ShoppingCart from "./shopping-cart";

export default function App() {
  return (
    <main className="tracking-tight">
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                // this setting is set for demo purposes only
                staleTime: Infinity,
              },
            },
          })
        }
      >
        <ProductsReactQueryProvider provider="graphql">
          <ShoppingCart />
        </ProductsReactQueryProvider>
      </QueryClientProvider>
    </main>
  );
}
