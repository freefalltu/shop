import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import cl from "./Catalog.module.scss";
import CatalogItem from "../catalogItem/CatalogItem";

const Catalog = () => {
  return (
    <div className={cl.catalog}>
      <h1 className={cl.catalog__title}>Catalog</h1>
      <div className={cl.catalog__input}>
        <MyInput />
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
        <MyButton className={cl.myBtn} view="text" size="big">
          Show more
        </MyButton>
      </div>
    </div>
  );
};

export default Catalog;
