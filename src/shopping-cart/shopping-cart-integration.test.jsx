import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ProductsReactQueryProvider } from "../react-query";
import { store, ProductsReduxProvider } from "../redux";
import ShoppingCart from "./shopping-cart";
import ShoppingCartLocalProvider from "../providers/shopping-cart-provider";

describe.each([
  [ProductsReactQueryProvider, ShoppingCartLocalProvider, { provider: "rest" }],
  [
    ProductsReactQueryProvider,
    ShoppingCartLocalProvider,
    { provider: "graphql" },
  ],
  [ProductsReduxProvider, ShoppingCartLocalProvider, {}],
])("ShoppingCart", (ProductsProvider, ShoppingCartProvider, options) => {
  test("renders shopping items", async () => {
    // arrange
    const wrapper = createWrapper(
      ProductsProvider,
      ShoppingCartProvider,
      options
    );

    // act
    render(wrapper);

    // assert
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBe(10);
  });

  test("search products by query string", async () => {
    // arrange
    const wrapper = createWrapper(
      ProductsProvider,
      ShoppingCartProvider,
      options
    );

    render(wrapper);

    // act
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "Custom");

    // assert
    const results = await screen.findAllByRole("heading", {
      name: (content) => content.startsWith("Custom"),
    });

    expect(results.length).toBeGreaterThan(0);
  });
});

function createWrapper(ProductsProvider, ShoppingCartProvider, options) {
  return (
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
        <ProductsProvider {...options}>
          <ShoppingCartProvider>
            <ShoppingCart />
          </ShoppingCartProvider>
        </ProductsProvider>
      </QueryClientProvider>
    </Provider>
  );
}
