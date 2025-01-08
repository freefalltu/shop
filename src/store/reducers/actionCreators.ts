import { createAsyncThunk } from "@reduxjs/toolkit";
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
