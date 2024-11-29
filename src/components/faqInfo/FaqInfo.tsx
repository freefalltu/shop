import React, { useState } from "react";
import "./FaqInfo.scss";

interface FaqInfo {
  question: string;
  answer: string;
}

const FaqInfo: React.FC<FaqInfo> = ({ question, answer }) => {
  const [myFaqActive, setMyFaqActive] = useState(false);

  return (
    <div className={myFaqActive ? "faq active" : "faq"}>
      <div
        className="faq__container"
        onClick={() => setMyFaqActive(!myFaqActive)}
      >
        <p className="container__question">{question}</p>
        <div
          className={myFaqActive ? "container__btn active" : "container__btn"}
        >
          <span />
        </div>
      </div>
      <p
        className={
          myFaqActive ? "container__answer active" : "container__answer"
        }
      >
        {answer}
      </p>
      <hr
        className={
          myFaqActive
            ? "faq__catalog-line-after active"
            : "faq__catalog-line-after"
        }
      />
    </div>
  );
};

export default FaqInfo;
