import { Input } from "UI/input";
import cl from "./Authorization.module.scss";
import { Title } from "UI/title";
import { Button } from "UI/button";

export const Authorization = () => {
  return (
    <div className={cl.container}>
      <Title tag="h1" fontWeight="Bold" fontSize="xxl" className={cl.title}>
        Sign in
      </Title>
      <div className={cl.box}>
        <Input className={cl.input} placeholder="Login" />
        <Input className={cl.input} placeholder="Password" />
        <Button type="myBtnText" view="text" size="small" className={cl.button}>
          Sign in
        </Button>
      </div>
    </div>
  );
};
