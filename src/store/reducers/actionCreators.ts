import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCartsByUsers } from "src/api/user-api";
import { User } from "src/models/User";

export const fetchCartsByUser = createAsyncThunk<
  User[],
  { id: number },
  { rejectValue: string }
>(`carts/fetchUser`, async ({ id }, { rejectWithValue }) => {
  try {
    const data = await fetchCartsByUsers(id);
    return data;
  } catch (e) {
    return rejectWithValue(`Error ${e}`);
  }
});
