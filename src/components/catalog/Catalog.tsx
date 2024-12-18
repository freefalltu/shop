import cl from "./Catalog.module.scss";
import { Button } from "../UI/button";
import { Input } from "../UI/input";
import { CatalogItem } from "../catalogItem";
import { Title } from "../UI/title";
import { useAppDispatch, useAppSelector } from "src/hook/redux";
import { ChangeEvent, useEffect, useState } from "react";
import { resetProducts } from "src/store/reducers/productSlice";
import { fetchProduct } from "src/store/reducers/actionCreators";
import { Text } from "../UI/text";
import { Product } from "src/models/Product";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const dispatch = useAppDispatch();

  const { catalogData, isLoading, error, skip, total } = useAppSelector(
    (state) => state.productSlice,
  );

  const [searchValue, setSearchValue] = useState<string>("");

  const search = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    dispatch(resetProducts());
  };

  const showMore = () => {
    dispatch(
      fetchProduct({
        q: searchValue,
        skip: skip + 12,
      }),
    );
  };

  useEffect(() => {
    const sourceProduct = dispatch(
      fetchProduct({ q: searchValue, skip: skip }),
    );
    return () => {
      sourceProduct.abort();
    };
  }, [searchValue]);

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
        <Input onChange={search} value={searchValue} />
      </div>
      {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}
      {catalogData.products.length === 0 ? (
        <Text
          className={cl.noElements}
          fontSize="xl"
          fontWeight="medium"
          tag="p"
        >
          No products
        </Text>
      ) : (
        <div className={cl.content}>
          {catalogData.products.map((product: Product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={() => {
                catalogData.products = [];
              }}
            >
              <CatalogItem product={product} />
            </Link>
          ))}
        </div>
      )}
      {catalogData.products.length >= total ? (
        <div />
      ) : (
        <div className={cl.catalog__btn}>
          <Button
            className={cl.myBtn}
            view="text"
            size="small"
            onClick={showMore}
          >
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};
