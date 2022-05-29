import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import ShoppingCart from "./shopping-cart";

export default function App() {
  return (
    <main className="tracking-tight">
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                staleTime: Infinity,
              },
            },
          })
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </main>
  );
}
