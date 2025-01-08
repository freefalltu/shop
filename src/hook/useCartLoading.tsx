import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { fetchCartsByUser } from "src/store/reducers/actionCreators";

export const useCartLoading = (id: number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const source = dispatch(fetchCartsByUser({ id }));
    return () => {
      source.abort();
    };
  }, []);
};
