import { IProduct } from "./Product";

export interface ICartsInfo {
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  products: IProduct[];
  total: number;
}
