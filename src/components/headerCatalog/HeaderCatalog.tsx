import { Link } from "react-router-dom"
import MyButton from "../UI/button/MyButton"
import cl from './HeaderCatalog.module.scss'


const headerCatalog = () => {
    return (
        <div className={cl.header__catalog}>
          <hr className={cl.catalog__line} />
          <h1 className={cl.catalog__title}>
            Any products from famous brands
            <br />
            with worldwide delivery
          </h1>
          <pre className={cl.catalog__text}>
            We sell smartphones, laptops, clothes, shoes
            <br />
            and many other products at low prices
          </pre>
          <div className={cl.catalog__btn}>
            <Link to="/#Catalog">
              <MyButton>Go to shopping</MyButton>
            </Link>
          </div>
          <p className={cl.catalog__textBack}>Goods4you</p>
        </div>
    )
}

export default headerCatalog