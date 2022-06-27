// import { useShoppingCartProviderValue } from "../providers/shopping-cart-context";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/shopping-cart-slice";

// export function useShoppingCartState() {
//   const { state } = useShoppingCartProviderValue();
//   return state;
// }

// export function useAddToShoppingCart() {
//   const { addToCart } = useShoppingCartProviderValue();
//   return addToCart;
// }

export function useShoppingCartState() {
  return useSelector((state) => state.shoppingCart);
}

export function useAddToShoppingCart() {
  const dispatch = useDispatch();

  return useCallback(
    (payload) => {
      dispatch(add(payload));
    },
    [dispatch]
  );
}
