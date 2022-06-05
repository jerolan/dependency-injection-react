import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import useProductsQuery from "../queries/use-products-query";
import { ProductsProvider } from "./products-context";
import ShoppingCartContent from "./shopping-cart-content";

test("renders shopping items", async () => {
  // act
  render(createWrapper());

  // assert
  const listItems = await screen.findAllByRole("listitem");
  expect(listItems.length).toBe(10);
});

test("search products by query string", async () => {
  render(createWrapper());

  // act
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "Custom");

  // assert
  const results = await screen.findAllByRole("heading", {
    name: (content) => content.startsWith("Custom"),
  });

  expect(results.length).toBeGreaterThan(0);
});

function createWrapper() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ProductsProvider value={{ useProductsQuery }}>
        <ShoppingCartContent />
      </ProductsProvider>
    </QueryClientProvider>
  );
}
