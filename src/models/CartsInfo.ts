import { IProduct } from "./Product";

export interface ICartsInfo {
  id: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  products: IProduct[];
  total: number;
}
