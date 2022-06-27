import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = shoppingCartSlice.actions;
export default shoppingCartSlice;
