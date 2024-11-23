import cl from './CatalogItem.module.scss'
import img from '../../img/CatalogItem.svg'
import MyButton from '../UI/button/MyButton'
import imgCart from '../../img/icon-cart.svg'


const CatalogItem = () => {
    return (
        <div className={cl.item}>
            <div className={cl.item__img}>
                <img src={img} alt="" />
                <div className={cl.img__bg}>
                    <span>Show details</span>
                </div>
            </div>
            <div className={cl.item__content}>
                <div className={cl.content}>
                    <p className={cl.content__title}>Essence Mascara Lash Princess</p>
                    <span className={cl.content__price}>$110</span>
                </div>
                <MyButton className={cl.myBtn} view='icon' size='small'>
                    <img src={imgCart} className={cl.button__img} alt="" />
                </MyButton>
            </div>
        </div>
    )
}

export default CatalogItem