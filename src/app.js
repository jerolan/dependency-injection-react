import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux";
import ShoppingCart from "./shopping-cart";

export default function App() {
  return (
    <main className="tracking-tight">
      <Provider store={store}>
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ShoppingCart />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </main>
  );
}
