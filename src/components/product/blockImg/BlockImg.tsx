import { useState } from "react";
import cl from "./BlockImg.module.scss";
import { IProduct } from "models/Product";

type BlockImgProps = Pick<IProduct, "thumbnail" | "images">;

export const BlockImg: React.FC<BlockImgProps> = ({ thumbnail, images }) => {
  const initialImgMain: string = thumbnail ?? "";
  const [imgMain, setImgMain] = useState<string>(initialImgMain);

  const handleClick = (links: string) => {
    setImgMain(links);
    const imgBorder = document.querySelectorAll("img");
    imgBorder.forEach((item) => {
      item.addEventListener("click", () => {
        imgBorder.forEach((el) => {
          el.classList.remove(cl.active);
        });
      });
    });
    document.getElementById(links)?.classList.toggle(cl.active);
  };

  return (
    <div className={cl.product__img}>
      {images.length > 1 ? (
        <div>
          <img src={imgMain} className={cl.big} alt="" />
          <div className={cl.miniatures}>
            {images.map((links) => (
              <img
                id={links}
                key={links}
                src={links}
                className={cl.small}
                alt=""
                onClick={() => {
                  handleClick(links);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <img src={thumbnail} className={cl.big} alt="" />
      )}
    </div>
  );
};
