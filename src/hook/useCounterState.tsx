import { useState } from "react";

const useCounterState = (initialQuantity: number) => {
  const [quantityValue, setQuantityValue] = useState(initialQuantity);
  const onMinusClick = () => {
    if (quantityValue > 0) {
      setQuantityValue((value) => value - 1);
    }
  };
  const onPlusClick = () => {
    setQuantityValue((value) => value + 1);
  };

  return {
    onMinusClick,
    onPlusClick,
    quantityValue,
  };
};

export default useCounterState;
