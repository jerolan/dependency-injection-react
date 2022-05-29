import { render, screen } from "@testing-library/react";
import ShoppingCart from "./shopping-cart";
import { ProductsProvider } from "./products-context";

test("renders shopping items", async () => {
  // arrange
  function useProductsQuery() {
    return {
      loading: false,
      products: [
        {
          id: "1",
          name: "Mock Pizza",
          price: "10.00",
          color: "Red",
          background: "from-cyan-500 to-blue-500",
        },
      ],
    };
  }

  // act
  render(
    <ProductsProvider value={{ useProductsQuery }}>
      <ShoppingCart />
    </ProductsProvider>
  );

  // assert
  const pizzaItem = await screen.findByRole("heading", { name: "Mock Pizza" });
  expect(pizzaItem).toBeInTheDocument();
});
