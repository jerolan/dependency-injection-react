import { render, screen } from "@testing-library/react";
import ShoppingCart from "./shopping-cart";

test("renders shopping items", async () => {
  // act
  render(<ShoppingCart />);

  // assert
  const pizzaItem = await screen.findByRole("heading", { name: "Pizza" });
  expect(pizzaItem).toBeInTheDocument();
});
