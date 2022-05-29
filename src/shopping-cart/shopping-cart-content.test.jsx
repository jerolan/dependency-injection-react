import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductsProvider } from "./products-context";
import ShoppingCartContent from "./shopping-cart-content";

test("renders shopping items", async () => {
  // arrange
  const products = [
    {
      id: "1",
      name: "Mock Pizza",
      price: "10.00",
      color: "Red",
      background: "from-cyan-500 to-blue-500",
    },
  ];

  // act
  render(createWrapper(createUseProductsQuery(products)));

  // assert
  const pizzaItem = screen.getByRole("heading", { name: "Mock Pizza" });
  expect(pizzaItem).toBeInTheDocument();
});

test("search products by query string", async () => {
  // arrange
  const products = [
    {
      id: "1",
      name: "Custom Pizza",
      price: "10.00",
      color: "Red",
      background: "from-cyan-500 to-blue-500",
    },
  ];

  const mockUseProductsQuery = createUseProductsQuery(products);

  render(createWrapper(mockUseProductsQuery));

  // act
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "Custom");

  // assert
  await waitFor(() =>
    expect(mockUseProductsQuery).toHaveBeenCalledWith("Custom")
  );

  const pizzaItem = screen.getByRole("heading", { name: "Custom Pizza" });
  expect(pizzaItem).toBeInTheDocument();
});

function createUseProductsQuery(products) {
  const defaultProducts = [
    {
      id: "1",
      name: "Pizza",
      price: "10.00",
      color: "Red",
      background: "from-cyan-500 to-blue-500",
    },
  ];

  return jest.fn((...args) => {
    return {
      products: products ?? defaultProducts,
      loading: false,
    };
  });
}

function createWrapper(useProductsQuery) {
  return (
    <ProductsProvider value={{ useProductsQuery }}>
      <ShoppingCartContent />
    </ProductsProvider>
  );
}
