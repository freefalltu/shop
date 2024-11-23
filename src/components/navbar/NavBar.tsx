import { Link } from 'react-router-dom'
import classes from './NavBar.module.scss'

const NavBar = () => {

    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <Link className={classes.container__logo} to='/#Main'>Goods4you</Link>
                <nav>
                    <Link className={classes.nav__btn} data-goto='/' to='/#Catalog'>Catalog</Link>
                    <Link className={classes.nav__btn} to='/#FAQ'>FAQ</Link>
                    <Link className={classes.nav__btn} to='cart'>Cart</Link>
                    <a className={classes.nav__btn} href='#'>Johnson Smith</a>
                </nav>
            </div>
        </header>
    )
}

export default NavBar