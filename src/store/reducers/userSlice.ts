import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartsInfo } from "models/CartsInfo";
import { fetchCartsByUser, fetchUpdateCart } from "./actionCreators";
import { CartsByUserTypeResponse } from "api/user-api";
import { UpdateCart } from "api/update-api";

interface InitialState {
  carts: ICartsInfo;
}

const initialState: InitialState = {
  carts: {
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
  },
};

export const userSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCartsByUser.fulfilled.type,
        (state, action: PayloadAction<CartsByUserTypeResponse>) => {
          state.carts = action.payload.carts[0];
        },
      )
      .addCase(
        fetchUpdateCart.fulfilled.type,
        (state, action: PayloadAction<UpdateCart>) => {
          state.carts.products = action.payload.products;
          state.carts.totalQuantity = action.payload.totalQuantity;
        },
      );
  },
});

export default userSlice.reducer;
