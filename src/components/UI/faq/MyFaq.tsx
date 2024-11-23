import React, { useState } from 'react'
import './MyFaq.scss'

interface MyFaq{
    question: string
    answer: string
  }

const MyFaq: React.FC<MyFaq> = ({question, answer}) => {
    
    const [myFaqActive, setMyFaqActive] = useState(false)

    return (
        <div className={myFaqActive ? 'faq active' : 'faq'}>
            <div className={'faq__container'}>
            <p className={'container__question'}>{question}</p>
            <div className={myFaqActive ? 'container__btn active' : 'container__btn'} onClick={() => setMyFaqActive(!myFaqActive)}>
              <span></span>
            </div>
          </div>
          <p className={myFaqActive ? 'container__answer active' : 'container__answer'}>
            {answer}
          </p>
          <hr className={myFaqActive ? 'faq__catalog-line-after active' : 'faq__catalog-line-after'} />
        </div>
    )
}

export default MyFaq