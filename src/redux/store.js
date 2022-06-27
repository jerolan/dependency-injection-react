import { configureStore } from "@reduxjs/toolkit";
import productsApi from "./products-api";
import shoppingCartSlice from "./shopping-cart-slice";

const store = configureStore({
  reducer: {
    [shoppingCartSlice.name]: shoppingCartSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
