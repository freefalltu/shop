import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import cl from "./Catalog.module.scss";
import CatalogItem from "../catalogItem/CatalogItem";

const Catalog = () => {
  return (
    <div className={cl.catalog}>
      <h1 className={cl.catalog__title}>Catalog</h1>
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

export default Catalog;
