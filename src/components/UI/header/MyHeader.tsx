import { Link } from 'react-router-dom'
import classes from './MyHeader.module.scss'

const MyHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <Link className={classes.container__logo} to='/'>Goods4you</Link>
                <nav>
                    <Link className={classes.nav__btn} to='/#catalog'>Catalog</Link>
                    <Link className={classes.nav__btn} to='/#faq'>FAQ</Link>
                    <Link className={classes.nav__btn} to='cart'>Cart</Link>
                    <Link className={classes.nav__btn} to='#'>Johnson Smith</Link>
                </nav>
            </div>
        </header>
    )
}

export default MyHeader