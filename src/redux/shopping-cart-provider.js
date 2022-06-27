import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartProvider } from "../providers/shopping-cart-context";
import { add } from "./shopping-cart-slice";

export default function ShoppingCartReduxProvider({ children }) {
  const state = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const addToCart = useCallback(
    (payload) => {
      dispatch(add(payload));
    },
    [dispatch]
  );

  return (
    <ShoppingCartProvider value={{ state, addToCart }}>
      {children}
    </ShoppingCartProvider>
  );
}
