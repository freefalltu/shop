import useTitle from "../hook/useTitle";
import MyButton from "../components/UI/button/MyButton";
import MyFaq from "../components/UI/faq/MyFaq";
import { Link } from "react-router-dom";

const Catalogpage = () => {

    useTitle("Catalog | Goods4you");

  return (
    <div className="container">
      <div className="container__header">
        <div className="header__catalog">
          <hr className="header__catalog-line" />
          <h1 className="header__catalog-title">
            Any products from famous brands
            <br />
            with worldwide delivery
          </h1>
          <pre className="header__catalog-text">
            We sell smartphones, laptops, clothes, shoes
            <br />
            and many other products at low prices
          </pre>
          <div className="header__catalog-btn">
            <Link to="/#Catalog">
              <MyButton>Go to shopping</MyButton>
            </Link>
          </div>
          <p className="header__catalog-text-back">Goods4you</p>
        </div>
      </div>
      <div id="Catalog" className="container__content">
        hello
      </div>
      <div id="FAQ" className="container__faq">
            <div className="faq__catalog">
            <h1 className="faq__catalog-title">FAQ</h1>
            <hr className="faq__catalog-line" />
            <MyFaq 
            question={"How can I track the status of my order?"} 
            answer={`After placing your order, you will receive a confirmation email
                containing your order number and a tracking link. You can also log
                in to your account on our website and go to the "My Orders" section
                to track your delivery status.`} 
            />
            <MyFaq 
            question={"What payment methods do you accept?"}
            answer={`After placing your order, you will receive a confirmation email
                containing your order number and a tracking link. You can also log
                in to your account on our website and go to the "My Orders" section
                to track your delivery status.`} />
            <MyFaq 
            question={"How can I return or exchange an item?"}
            answer={`After placing your order, you will receive a confirmation email
                containing your order number and a tracking link. You can also log
                in to your account on our website and go to the "My Orders" section
                to track your delivery status.`} />
            </div>
      </div>
    </div>
  );
};

export default Catalogpage;