import { describe, test, expect } from "vitest";
import userReducer from "store/reducers/userSlice";
import {
  fetchCartsByUser,
  fetchUpdateCart,
} from "store/reducers/actionCreators";
import { CartsByUserTypeResponse } from "api/user-api";
import { UpdateCart } from "api/update-api";

const initialState = {
  carts: {
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
  },
};

describe("userSlice extraReducers", () => {
  test("fetchCartsByUser.fulfilled", () => {
    const mockResponse: CartsByUserTypeResponse = {
      carts: [
        {
          id: 1,
          products: [
            {
              id: 101,
              quantity: 2,
              title: "",
              price: 0,
              thumbnail: "",
              warrantyInformation: "",
              stock: 0,
              shippingInformation: "",
              description: "",
              discountPercentage: 0,
              images: [],
              rating: 0,
            },
          ],
          total: 100,
          discountedTotal: 90,
          totalProducts: 1,
          totalQuantity: 2,
        },
      ],
      total: 0,
      skip: 0,
      limit: 0,
    };

    const action = {
      type: fetchCartsByUser.fulfilled.type,
      payload: mockResponse,
    };
    const newState = userReducer(initialState, action);

    expect(newState.carts).toEqual(mockResponse.carts[0]);
  });

  test("fetchUpdateCart.fulfilled", () => {
    const mockResponse: UpdateCart = {
      id: 1,
      products: [
        {
          id: 101,
          quantity: 3,
          title: "",
          price: 0,
          thumbnail: "",
          warrantyInformation: "",
          stock: 0,
          shippingInformation: "",
          description: "",
          discountPercentage: 0,
          images: [],
          rating: 0,
        },
      ],
      totalQuantity: 3,
    };

    const action = {
      type: fetchUpdateCart.fulfilled.type,
      payload: mockResponse,
    };
    const newState = userReducer(initialState, action);

    expect(newState.carts.products).toEqual(mockResponse.products);
    expect(newState.carts.totalQuantity).toBe(mockResponse.totalQuantity);
  });
});
