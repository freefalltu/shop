import { ICartsInfo } from "models/CartsInfo";
import axiosBase from "./axiosBase";

export type CartsByUserTypeResponse = {
  carts: ICartsInfo[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchCartsByUsers = async (id: number) => {
  const response = await axiosBase.get<CartsByUserTypeResponse>(
    `/carts/user/${id}`,
    {},
  );
  return response.data;
};
