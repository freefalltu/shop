import { Link } from 'react-router-dom'
import classes from './MyFooter.module.scss'

const MyFooter = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__container}>
                <Link className={classes.container__logo} to='/'>Goods4you</Link>
                <nav>
                    <Link className={classes.nav__btn} to='/#catalog'>Catalog</Link>
                    <Link className={classes.nav__btn} to='/#faq'>FAQ</Link>
                </nav>
            </div>
        </footer>
    )
}

export default MyFooter