import { IProduct } from "models/Product";
import axiosBase from "./axiosBase";

export type UpdateCart = {
  id: number;
  products: IProduct[];
  totalQuantity: number;
};

export const fetchUpdateCarts = async (
  id: number,
  products: { id: number; quantity: number }[],
  merge: boolean = false,
) => {
  const response = await axiosBase.put<UpdateCart>(
    `/carts/${id}`,
    {
      merge,
      products,
    },
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  return response.data;
};
