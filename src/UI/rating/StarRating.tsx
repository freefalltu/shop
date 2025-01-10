import { useState } from "react";
import cl from "./StarRating.module.scss";
import { FaStar } from "react-icons/fa";
import { IProduct } from "models/Product";

type StarRatingProps = Pick<IProduct, "rating">;

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array(5).fill(0);
  const numberOfRating = Math.round(rating);
  const [newRating, setNewRating] = useState<number>(numberOfRating);
  const [hover, setHover] = useState<number>(numberOfRating);

  return (
    <div className={cl.wrapper}>
      {stars.map((_star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              className={cl.input}
              value={ratingValue}
              onClick={() => setNewRating(ratingValue)}
            />
            <FaStar
              className={cl.star}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              color={
                ratingValue <= (hover || newRating) ? "#F14F4F" : "#D5D5D5"
              }
              size={17}
            />
          </label>
        );
      })}
    </div>
  );
};
