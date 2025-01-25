import cl from "./LoginPage.module.scss";
import { LoginHeader } from "components/loginHeader";
import useTitle from "hook/useTitle";
import { useState } from "react";
import { Button } from "UI/button";
import { Input } from "UI/input";
import { Title } from "UI/title";

export const LoginPage = () => {
  useTitle("Sign in | Goods4you");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <LoginHeader />
      <div className={cl.container}>
        <Title tag="h1" fontWeight="Bold" fontSize="xxl" className={cl.title}>
          Sign in
        </Title>
        <div className={cl.box}>
          <Input
            className={cl.input}
            placeholder="Login"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className={cl.input}
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="myBtnText"
            view="text"
            size="small"
            className={cl.button}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};
