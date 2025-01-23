import { Authorization } from "components/authorization";
import { LoginHeader } from "components/loginHeader";
import useTitle from "hook/useTitle";

export const LoginPage = () => {
  useTitle("Sign in | Goods4you");
  return (
    <div>
      <LoginHeader />
      <Authorization />
    </div>
  );
};
