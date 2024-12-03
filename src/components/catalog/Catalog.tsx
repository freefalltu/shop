import cl from "./Catalog.module.scss";
import { Button } from "../UI/button";
import { Input } from "../UI/input";
import { CatalogItem } from "../catalogItem";
import { Title } from "../UI/title";

export const Catalog = () => {
  return (
    <div className={cl.catalog}>
      <Title
        className={cl.catalog__title}
        tag="h1"
        fontSize="xxl"
        fontWeight="Bold"
      >
        Catalog
      </Title>
      <div className={cl.catalog__input}>
        <Input />
      </div>
      <div className={cl.catalog__products}>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </div>
      <div className={cl.catalog__btn}>
        <Button className={cl.myBtn} view="text" size="big">
          Show more
        </Button>
      </div>
    </div>
  );
};
