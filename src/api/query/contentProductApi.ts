import { IProduct } from "src/models/Product";
import { baseApi } from "./baseApi";

export const contentProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleProduct: build.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
  overrideExisting: true,
});

export const { useGetSingleProductQuery } = contentProductApi;
