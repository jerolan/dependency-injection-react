import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductsProvider } from "./products-context";
import ShoppingCart from "./shopping-cart";
import ShoppingCartLocalProvider from "../providers/shopping-cart-provider";

test("renders shopping items", async () => {
  // arrange
  const { wrapper, products } = createWrapper();
  const firstProduct = products[0];

  // act
  render(wrapper);

  // assert
  const pizzaItem = screen.getByRole("heading", { name: firstProduct.name });
  expect(pizzaItem).toBeInTheDocument();
});

test("search products by query string", async () => {
  // arrange
  const product = {
    id: "1",
    name: "Custom Pizza",
    price: "10.00",
    color: "Red",
    background: "from-cyan-500 to-blue-500",
  };

  const { wrapper, mockUseProducts } = createWrapper([product]);
  render(wrapper);

  // act
  const searchInput = screen.getByRole("textbox");
  userEvent.type(searchInput, "Custom");

  // assert
  await waitFor(() => expect(mockUseProducts).toHaveBeenCalledWith("Custom"));
  const pizzaItem = screen.getByRole("heading", { name: product.name });
  expect(pizzaItem).toBeInTheDocument();
});

function createWrapper(customProducts) {
  const defaultProducts = [
    {
      id: "1",
      name: "Pizza",
      price: "10.00",
      color: "Red",
      background: "from-cyan-500 to-blue-500",
    },
  ];

  const products = customProducts ?? defaultProducts;
  const mockUseProducts = jest.fn((..._args) => {
    return {
      products,
      loading: false,
    };
  });

  const wrapper = (
    <ProductsProvider value={{ useProducts: mockUseProducts }}>
      <ShoppingCartLocalProvider>
        <ShoppingCart />
      </ShoppingCartLocalProvider>
    </ProductsProvider>
  );

  return { wrapper, products, mockUseProducts };
}
