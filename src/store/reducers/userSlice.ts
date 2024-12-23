import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartsInfo } from "src/models/CartsInfo";
import { fetchCartsByUser } from "./actionCreators";

interface InitialState {
  carts: ICartsInfo[];
}

const initialState: InitialState = {
  carts: [],
};

export const userSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCartsByUser.fulfilled.type,
      (state, action: PayloadAction<InitialState>) => {
        state.carts = [action.payload.carts[0]];
      },
    );
  },
});

export default userSlice.reducer;
