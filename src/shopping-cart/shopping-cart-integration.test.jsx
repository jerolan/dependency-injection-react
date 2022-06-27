import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ProductsReactQueryProvider } from "../react-query";
import { store, ProductsReduxProvider } from "../redux";
import ShoppingCart from "./shopping-cart";

describe.each([
  [ProductsReactQueryProvider, { provider: "rest" }],
  [ProductsReactQueryProvider, { provider: "graphql" }],
  [ProductsReduxProvider, {}],
])("ShoppingCart", (ProductsProvider, options) => {
  test("renders shopping items", async () => {
    // arrange
    const wrapper = createWrapper(ProductsProvider, options);

    // act
    render(wrapper);

    // assert
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBe(10);
  });

  test("search products by query string", async () => {
    render(createWrapper(ProductsProvider, options));

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

function createWrapper(ProductsProvider, options) {
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
          <ShoppingCart />
        </ProductsProvider>
      </QueryClientProvider>
    </Provider>
  );
}
