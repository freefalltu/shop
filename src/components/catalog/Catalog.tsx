import cl from "./Catalog.module.scss";
import { CatalogItem } from "src/components/catalogItem";
import { Title } from "src/components/UI/title";
import { Product } from "src/models/Product";
import { Link } from "react-router-dom";
import { Text } from "src/components/UI/text";
import { Button } from "src/components/UI/button";
import { useAppDispatch } from "src/hook/redux";
import { resetProducts } from "src/store/reducers/productSlice";
import { useGetCatalogQuery } from "src/api/query/catalogApi";
import { useState } from "react";
import { Input } from "src/components/UI/input";

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(12);

  const showMore = () => {
    setLimit(limit + 12);
  };

  const {
    data: content,
    error,
    isLoading,
  } = useGetCatalogQuery({ query: search, limit: limit, skip: 0 });

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
        <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </div>
      {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>Error</h1>}
      {content?.products.length === 0 ? (
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
          {content &&
            content.products.map((product: Product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={() => dispatch(resetProducts())}
              >
                <CatalogItem product={product} />
              </Link>
            ))}
        </div>
      )}
      {content?.products.length === content?.total ? (
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
