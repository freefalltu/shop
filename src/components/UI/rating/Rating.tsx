import ReactStars from "react-stars";

interface RatingProps {
  activeColor?: string;
  size?: number;
  value?: number;
  color?: string;
  half?: boolean;
  edit?: boolean;
  onChange?: (newRating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  activeColor,
  size,
  value,
  color,
  half,
  edit,
  onChange,
}) => {
  return (
    <ReactStars
      onChange={onChange}
      size={size}
      value={value}
      color1={color}
      color2={activeColor}
      half={half}
      edit={edit}
    />
  );
};
