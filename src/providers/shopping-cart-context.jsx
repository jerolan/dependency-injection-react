import { createContext, useContext } from "react";

const ShoppingCartContext = createContext(undefined);

export function ShoppingCartProvider({ value, children }) {
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

function useShoppingCartProviderValue() {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingCartProviderValue must be used within a ShoppingCartProvider"
    );
  }

  return context;
}

export function useShoppingCartState() {
  const { state } = useShoppingCartProviderValue();
  return state;
}

export function useAddToShoppingCart() {
  const { addToCart } = useShoppingCartProviderValue();
  return addToCart;
}
