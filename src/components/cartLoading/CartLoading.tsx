import { useEffect } from "react";
import { useAppDispatch } from "src/hook/redux";
import { fetchCartsByUser } from "src/store/reducers/actionCreators";

export const CartLoading = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const source = dispatch(fetchCartsByUser({ id: 20 }));
    return () => {
      source.abort();
    };
  }, []);

  return null;
};
