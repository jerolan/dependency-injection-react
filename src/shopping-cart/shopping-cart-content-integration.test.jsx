import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { useProductsRestQuery } from "../queries";
import { store, useProductsReduxQuery } from "../redux";
import { ProductsProvider } from "./products-context";
import ShoppingCartContent from "./shopping-cart-content";

describe.each([
  /*useProductsGraphQlQuery*/ useProductsRestQuery,
  useProductsReduxQuery,
])("ShoppingCartContent", (useProductsQuery) => {
  test("renders shopping items", async () => {
    // act
    render(createWrapper(useProductsQuery));

    // assert
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBe(10);
  });

  test("search products by query string", async () => {
    render(createWrapper(useProductsQuery));

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

function createWrapper(useProductsQuery) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <ProductsProvider value={{ useProductsQuery }}>
          <ShoppingCartContent />
        </ProductsProvider>
      </QueryClientProvider>
    </Provider>
  );
}
