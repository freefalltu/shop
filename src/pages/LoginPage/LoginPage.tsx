import cl from "./LoginPage.module.scss";
import { LoginHeader } from "components/loginHeader";
import useTitle from "hook/useTitle";
import { useState } from "react";
import { Button } from "UI/button";
import { Input } from "UI/input";
import { Title } from "UI/title";
import { useLoginUserMutation } from "api/query/authApi";
import { useNavigate } from "react-router-dom";
import { Text } from "UI/text";

export const LoginPage = () => {
  useTitle("Sign in | Goods4you");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emptyInputField, setEmptyInputField] = useState<boolean>(false);
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      try {
        const result = await loginUser({
          username,
          password,
          expiresInMins: 30,
        }).unwrap();
        localStorage.setItem("token", result.accessToken);
        navigate("/");
      } catch (err) {
        alert(`Error ${err}`);
      }
    } else {
      setEmptyInputField(true);
    }
  };

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
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className={cl.input}
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {emptyInputField ? (
            <Text tag="span" className={cl.emptyInputField}>
              Заполните пустые поля
            </Text>
          ) : (
            <div />
          )}
          <Button
            type="myBtnText"
            view="text"
            size="small"
            className={cl.button}
            onClick={handleLogin}
          >
            {isLoading ? "Logging in..." : "Sign in"}
          </Button>
        </div>
      </div>
    </div>
  );
};
