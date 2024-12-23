import { IProduct } from "src/models/Product";
import { baseApi } from "./baseApi";

interface CatalogProduct {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
  query: string;
}

export const catalogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCatalog: build.query<
      CatalogProduct,
      { query: string; limit: number; skip: number }
    >({
      query: (arg) => {
        const { query, limit, skip } = arg;
        return {
          url: "/products/search",
          params: {
            q: query,
            limit: limit,
            skip: skip,
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetCatalogQuery } = catalogApi;
