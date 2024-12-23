import ReactStars from "react-rating-stars-component";

interface RatingProps {
  activeColor?: string;
  size?: number;
  value?: number;
  color?: string;
  isHalf?: boolean;
  edit?: boolean;
  onChange?: (newRating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  activeColor,
  size,
  value,
  color,
  isHalf,
  edit,
  onChange,
}) => {
  return (
    <ReactStars
      onChange={onChange}
      size={size}
      activeColor={activeColor}
      value={value}
      color={color}
      isHalf={isHalf}
      edit={edit}
    />
  );
};
