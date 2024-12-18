import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductInfo } from "src/api/info-products-api";
import { fetchProducts } from "src/api/products-api";
import { fetchCartsByUsers } from "src/api/user-api";
import { Product } from "src/models/Product";
import { User } from "src/models/User";

export const fetchProduct = createAsyncThunk<
  Product[],
  { q: string; skip: number },
  { rejectValue: string }
>("catalogData/fetchProduct", async ({ q, skip }, { rejectWithValue }) => {
  try {
    const data = await fetchProducts(q, skip);
    return data;
  } catch (error) {
    return rejectWithValue(`Server Error ${error}`);
  }
});

export const fetchProductsInfo = createAsyncThunk<
  Product[],
  { id: number },
  { rejectValue: string }
>("products/fetchProductInfo", async ({ id }, { rejectWithValue }) => {
  try {
    const data = await fetchProductInfo(id);
    return data;
  } catch (e) {
    return rejectWithValue(`Error ${e}`);
  }
});

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
