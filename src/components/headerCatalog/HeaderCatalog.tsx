import { Link } from "react-router-dom";
import cl from "./HeaderCatalog.module.scss";
import { Button } from "../UI/button";

export const HeaderCatalog = () => {
  return (
    <div className={cl.header__catalog}>
      <hr className={cl.catalog__line} />
      <h1 className={cl.catalog__title}>
        Any products from famous brands
        <br />
        with worldwide delivery
      </h1>
      <pre className={cl.catalog__text}>
        We sell smartphones, laptops, clothes, shoes
        <br />
        and many other products at low prices
      </pre>
      <div className={cl.catalog__btn}>
        <Link to="/#Catalog">
          <Button className={cl.myBtn} view="text" size="big">
            Go to shopping
          </Button>
        </Link>
      </div>
      <p className={cl.catalog__textBack}>Goods4you</p>
    </div>
  );
};
