import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { fetchCartsByUser } from "store/reducers/actionCreators";
import { useGetCurrentUserQuery } from "api/query/authApi";

export const useCartLoading = (id: number) => {
  const dispatch = useAppDispatch();
  const { currentData, isSuccess } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isSuccess) {
      const source = dispatch(fetchCartsByUser({ id: id }));
      return () => {
        source.abort();
      };
    }
  }, [currentData, isSuccess]);
};
