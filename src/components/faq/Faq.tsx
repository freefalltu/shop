import MyFaq from "../faqInfo/MyFaq"
import cl from './Faq.module.scss'


const Faq = () => {
    return (
        <div className={cl.faq__catalog}>
            <h1 className={cl.faq__title}>FAQ</h1>
            <hr className={cl.faq__line} />
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
    )
}

export default Faq