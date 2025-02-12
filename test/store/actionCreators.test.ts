import { fetchUpdateCart } from "store/reducers/actionCreators";
import { fetchUpdateCarts } from "api/update-api";
import { describe, expect, test, vi, Mock } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "store/reducers/userSlice";

vi.mock("api/update-api", () => ({
  fetchUpdateCarts: vi.fn(),
}));

describe("fetchUpdateCart asyncCreateAsyncThunk", () => {
  test("should update the cart successfully", async () => {
    const mockResponse = {
      id: 1,
      products: [
        { id: 101, quantity: 2 },
        { id: 102, quantity: 1 },
      ],
      totalQuantity: 3,
    };

    (fetchUpdateCarts as Mock).mockResolvedValue(mockResponse);

    const store = configureStore({ reducer: { user: userReducer } });
    await store.dispatch(
      fetchUpdateCart({ id: 1, products: mockResponse.products }),
    );

    const state = store.getState().user;
    expect(state.carts.products).toEqual(mockResponse.products);
    expect(state.carts.totalQuantity).toBe(mockResponse.totalQuantity);
  });

  test("should handle API failure", async () => {
    (fetchUpdateCarts as Mock).mockRejectedValue(new Error("Failed to update"));

    const store = configureStore({ reducer: { user: userReducer } });
    const result = await store.dispatch(
      fetchUpdateCart({ id: 1, products: [] }),
    );

    expect(result.payload).toBe("ErrorError: Failed to update");
  });
});
