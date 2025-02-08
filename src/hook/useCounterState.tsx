import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchUpdateCart } from "store/reducers/actionCreators";

const useCounterState = (
  initialQuantity: number,
  productId: number,
  stock: number,
) => {
  const [quantityValue, setQuantityValue] = useState(initialQuantity);
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.userSlice);

  const onMinusClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (quantityValue > 1) {
      setQuantityValue((value) => value - 1);
    } else if (quantityValue === 1) {
      setQuantityValue(0);
      dispatch(
        fetchUpdateCart({
          id: carts.id,
          products: carts.products.filter((p) => p.id !== productId),
          merge: false,
        }),
      );
    }
  };

  const onPlusClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (quantityValue < stock) {
      setQuantityValue((value) => value + 1);
    }
  };

  const onPlusClickInCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setQuantityValue((value) => value + 1);
  };

  const addProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(
      fetchUpdateCart({
        id: carts.id,
        products: [...carts.products, { id: productId, quantity: 1 }],
      }),
    );
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(
      fetchUpdateCart({
        id: carts.id,
        products: carts.products.filter((p) => p.id !== productId),
        merge: false,
      }),
    );
  };

  return {
    onMinusClick,
    onPlusClick,
    addProduct,
    handleDelete,
    onPlusClickInCart,
    quantityValue,
  };
};

export default useCounterState;
