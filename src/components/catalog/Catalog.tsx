import cl from "./Catalog.module.scss";
import { CatalogItem } from "components/catalogItem";
import { Title } from "UI/title";
import { IProduct } from "models/Product";
import { Link } from "react-router-dom";
import { Text } from "UI/text";
import { Button } from "UI/button";
import { useGetCatalogQuery } from "api/query/catalogApi";
import { useState } from "react";
import { Input } from "UI/input";
import { useDebounceCallback } from "usehooks-ts";

export const Catalog = () => {
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(12);

  const {
    data: content,
    error,
    isLoading,
    isFetching,
  } = useGetCatalogQuery({ query: search, limit: limit, skip: 0 });

  const debounced = useDebounceCallback(setSearch, 200);

  const showMore = () => {
    setLimit(limit + 12);
  };

  return (
    <div className={cl.catalog}>
      <Title
        className={cl.catalogTitle}
        tag="h1"
        fontSize="xxl"
        fontWeight="Bold"
      >
        Catalog
      </Title>
      <div className={cl.catalogInput}>
        <Input onChange={(e) => debounced(e.target.value)} />
      </div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Failed to load items</h1>}
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
            content.products.map((product: IProduct) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <CatalogItem content={product} />
              </Link>
            ))}
        </div>
      )}
      {content?.products.length === content?.total ? (
        <div />
      ) : (
        <div className={cl.catalogBtn}>
          <Button
            type="myBtnText"
            view="text"
            size="small"
            loading={isFetching}
            onClick={() => {
              showMore();
            }}
          >
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};
