import { Link } from "react-router-dom";
import { Button } from "src/components/UI/button";
import { Title } from "src/components/UI/title";
import useTitle from "src/hook/useTitle";
import cl from "./NotfoundPage.module.scss";

export const NotfoundPage = () => {
  useTitle("Not found page");
  return (
    <div className={cl.wrapper}>
      <Title tag="h1" fontSize="xxl" fontWeight="Bold" className={cl.title}>
        404 Page not found
      </Title>
      <Link to="/">
        <Button view="text" size="big" className={cl.myBtn}>
          Return to main page
        </Button>
      </Link>
    </div>
  );
};
