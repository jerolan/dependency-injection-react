import { useCallback } from "react";
import { useReducer } from "react";
import { ShoppingCartProvider } from "./shopping-cart-context";

export const actions = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default function ShoppingCartLocalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  const addToCart = useCallback((payload) => {
    dispatch({ type: actions.ADD, payload });
  }, []);

  return (
    <ShoppingCartProvider value={{ state, addToCart }}>
      {children}
    </ShoppingCartProvider>
  );
}
