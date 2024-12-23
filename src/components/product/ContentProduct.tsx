import cl from "./ContentProduct.module.scss";
import { Navigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "src/api/query/contentProductApi";
import { BlockImg } from "./blockImg";
import { BlockInfo } from "./blockInfo/BlockInfo";
import useTitle from "src/hook/useTitle";
import { Title } from "../UI/title";

export const ContentProduct = () => {
  const { id } = useParams<string>();
  const { data: content, error, isLoading } = useGetSingleProductQuery(`${id}`);
  useTitle(`${content?.title} | Goods4you`);

  return (
    <div className={cl.content}>
      {isLoading && (
        <Title className={cl.loading} tag="h1" fontSize="xxl" fontWeight="Bold">
          Идет загрузка
        </Title>
      )}
      {error && <Navigate to="*" />}
      {content && (
        <div className={cl.product}>
          <BlockImg content={content} />
          <BlockInfo content={content} />
        </div>
      )}
    </div>
  );
};
