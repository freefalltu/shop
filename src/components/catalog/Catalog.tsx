import MyButton from '../UI/button/MyButton'
import cl from './Catalog.module.scss'

const Catalog = () => {
    return (
        <div className={cl.catalog}>
            <h1 className={cl.catalog__title}>Catalog</h1>
            <div>input</div>
            <div className={cl.catalog__products}>products</div>
            <div className={cl.catalog__btn}>
                <MyButton>Show more</MyButton>
            </div>
        </div>
    )
}

export default Catalog