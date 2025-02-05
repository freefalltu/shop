import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchUpdateCart } from "store/reducers/actionCreators";

export const useUpdateProduct = (
  state: number,
  productQuantity: number,
  productId: number,
) => {
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    if (state !== productQuantity) {
      const updatedProducts = carts.products.map((p) =>
        p.id === productId ? { ...p, quantity: state } : p,
      );
      dispatch(
        fetchUpdateCart({
          id: carts.id,
          products: updatedProducts,
          merge: false,
        }),
      );
    }
  }, [state, dispatch, carts, productId, productQuantity]);
};
