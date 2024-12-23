import { Link } from "react-router-dom";
import cl from "./HeaderCatalog.module.scss";
import { Button } from "../UI/button";

export const HeaderCatalog = () => {
  return (
    <div className={cl.catalog}>
      <hr className={cl.line} />
      <h1 className={cl.title}>
        Any products from famous brands
        <br />
        with worldwide delivery
      </h1>
      <pre className={cl.text}>
        We sell smartphones, laptops, clothes, shoes
        <br />
        and many other products at low prices
      </pre>
      <div className={cl.btn}>
        <Link to="/#Catalog">
          <Button className={cl.myBtn} view="text" size="big">
            Go to shopping
          </Button>
        </Link>
      </div>
      <p className={cl.textBack}>Goods4you</p>
    </div>
  );
};
