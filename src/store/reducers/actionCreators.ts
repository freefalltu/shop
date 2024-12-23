import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCartsByUsers } from "src/api/user-api";
import { ICartsInfo } from "src/models/CartsInfo";

export const fetchCartsByUser = createAsyncThunk<
  ICartsInfo,
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
