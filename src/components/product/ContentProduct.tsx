import cl from "./ContentProduct.module.scss";
import { Navigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "src/api/query/contentProductApi";
import { BlockImg } from "./blockImg";
import { BlockInfo } from "./blockInfo/BlockInfo";
import useTitle from "src/hook/useTitle";

export const ContentProduct = () => {
  const { id } = useParams<string>();
  const { data: content, error, isLoading } = useGetSingleProductQuery(`${id}`);
  useTitle(`${content?.title} | Goods4you`);

  return (
    <div className={cl.content}>
      {isLoading && <h1>Идет загрузка</h1>}
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
