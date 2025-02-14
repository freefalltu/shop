import { useGetCurrentUserQuery } from "api/query/authApi";
import { Navigate } from "react-router-dom";

export const LoginRedirectHandler = () => {
  const { data } = useGetCurrentUserQuery(undefined, {
    skip: !localStorage.getItem("accessToken"),
  });

  if (data) {
    return <Navigate to="/" replace />;
  }

  return null;
};
