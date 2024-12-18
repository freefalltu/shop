import { removeEmptyParams } from "src/utils/removeEmptyParams";
import axiosBase from "./axiosBase";

export const fetchProducts = async (
  query: string = "",
  skip: number,
  limit: number = 12,
) => {
  const response = await axiosBase.get(`/products/search`, {
    params: {
      q: query,
      skip: skip,
      limit: limit,
    },
  });
  removeEmptyParams(response.config.params);
  return response.data;
};
