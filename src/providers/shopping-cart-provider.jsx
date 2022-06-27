import { useReducer } from "react";
import { ShoppingCartProvider } from "./shopping-cart-context";

const actions = {
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
  const value = useReducer(reducer, []);
  return <ShoppingCartProvider value={value}>{children}</ShoppingCartProvider>;
}
