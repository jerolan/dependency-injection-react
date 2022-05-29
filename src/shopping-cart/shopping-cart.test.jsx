import { render, screen } from "@testing-library/react";
import { ProductsProvider } from "./products-context";
import ShoppingCart from "./shopping-cart";

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
  render(
    <MockProductsProvider products={products}>
      <ShoppingCart />
    </MockProductsProvider>
  );

  // assert
  const pizzaItem = screen.getByRole("heading", { name: "Mock Pizza" });
  expect(pizzaItem).toBeInTheDocument();
});

const defaultProducts = [
  {
    id: "1",
    name: "Pizza",
    price: "10.00",
    color: "Red",
    background: "from-cyan-500 to-blue-500",
  },
];

function MockProductsProvider({ products = defaultProducts }) {
  function useProductsQuery() {
    return {
      products,
      loading: false,
    };
  }

  return (
    <ProductsProvider value={{ useProductsQuery }}>
      <ShoppingCart />
    </ProductsProvider>
  );
}
