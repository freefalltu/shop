import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUpdateCarts, UpdateCart } from "api/update-api";
import { CartsByUserTypeResponse, fetchCartsByUsers } from "api/user-api";

export const fetchCartsByUser = createAsyncThunk<
  CartsByUserTypeResponse,
  { id: number },
  { rejectValue: string }
>(`carts/fetchCarts`, async ({ id }, { rejectWithValue }) => {
  try {
    const data = await fetchCartsByUsers(id);
    return data;
  } catch (e) {
    return rejectWithValue(`Error ${e}`);
  }
});

export const fetchUpdateCart = createAsyncThunk<
  UpdateCart,
  {
    id: number;
    products: { id: number; quantity: number }[];
    merge?: boolean;
  },
  { rejectValue: string }
>(
  "carts/fetchUpdate",
  async ({ id, products, merge = false }, { rejectWithValue }) => {
    try {
      const data = await fetchUpdateCarts(id, products, merge);
      return data;
    } catch (e) {
      return rejectWithValue(`Error${e}`);
    }
  },
);
