import { useState } from "react";
import cl from "./BlockImg.module.scss";
import { Product } from "src/models/Product";

interface BlockImgProps {
  content: Product;
}

export const BlockImg: React.FC<BlockImgProps> = ({ content }) => {
  const initialImgMain: string = content?.thumbnail ?? "";
  const [imgMain, setImgMain] = useState<string>(initialImgMain);

  return (
    <div className={cl.product__img}>
      {content.images.length > 1 ? (
        <div>
          <img src={imgMain} className={cl.big} alt="" />
          <div className={cl.miniatures}>
            {content.images.map((links) => (
              <img
                key={links}
                src={links}
                className={cl.small}
                alt=""
                onClick={() => setImgMain(links)}
              />
            ))}
          </div>
        </div>
      ) : (
        <img src={content.thumbnail} className={cl.big} alt="" />
      )}
    </div>
  );
};
