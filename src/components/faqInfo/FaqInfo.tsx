import React, { useState } from "react";
import "./FaqInfo.scss";

interface FaqInfo {
  question: string;
  answer: string;
}

export const FaqInfo: React.FC<FaqInfo> = ({ question, answer }) => {
  const [myFaqActive, setMyFaqActive] = useState(false);

  return (
    <div className={myFaqActive ? "faq active" : "faq"}>
      <div
        className="faqContainer"
        onClick={() => setMyFaqActive(!myFaqActive)}
      >
        <p className="question">{question}</p>
        <div className={myFaqActive ? "btn active" : "btn"}>
          <span />
        </div>
      </div>
      <p className={myFaqActive ? "answer active" : "answer"}>{answer}</p>
      <hr className={myFaqActive ? "line-after active" : "line-after"} />
    </div>
  );
};
