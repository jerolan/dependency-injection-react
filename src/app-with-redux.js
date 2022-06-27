import { Provider } from "react-redux";
import { ProductsReduxProvider, store } from "./redux";
import ShoppingCart from "./shopping-cart";

export default function App() {
  return (
    <main className="tracking-tight">
      <Provider store={store}>
        <ProductsReduxProvider>
          <ShoppingCart />
        </ProductsReduxProvider>
      </Provider>
    </main>
  );
}
