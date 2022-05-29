import { render, screen } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import ShoppingCart from "./shopping-cart";
import getProducts from "./get-products";

jest.mock("./get-products");

test("renders shopping items", async () => {
  // arrange
  getProducts.mockResolvedValue([
    {
      id: "1",
      name: "Mock Pizza",
      price: "10.00",
      color: "Red",
      background: "from-cyan-500 to-blue-500",
    },
  ]);

  // act
  render(
    <QueryClientProvider client={new QueryClient()}>
      <ShoppingCart />
    </QueryClientProvider>
  );

  // assert
  const pizzaItem = await screen.findByRole("heading", { name: "Mock Pizza" });
  expect(pizzaItem).toBeInTheDocument();
});
