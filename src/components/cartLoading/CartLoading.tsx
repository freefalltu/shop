import { useGetCurrentUserQuery } from "api/query/authApi";
import { useCartLoading } from "hook/useCartLoading";

export const CartLoading = ({ children }: { children: React.ReactNode }) => {
  const { data: currentUser } = useGetCurrentUserQuery();
  const currentUserId: number = currentUser?.id ?? 0;

  useCartLoading(currentUserId);
  console.log(`CurrentUserId = ${currentUserId}`);

  return <>{children}</>;
};
