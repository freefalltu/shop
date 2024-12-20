import { createSlice } from "@reduxjs/toolkit";
import { Product } from "src/models/Product";

interface ProductsData {
  products: Product[];
  skip: number;
  total: number;
}

interface ProductState {
  catalogData: ProductsData;
  isLoading: boolean;
  error: string;
  skip: number;
  total: number;
}

const productsData: ProductsData = {
  products: [],
  skip: 0,
  total: 0,
};

const initialState: ProductState = {
  catalogData: productsData,
  isLoading: false,
  error: "",
  skip: 0,
  total: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProducts(state) {
      state.catalogData.products = [];
      state.skip = 0;
    },
  },
});

export const { resetProducts } = productSlice.actions;
export default productSlice.reducer;
