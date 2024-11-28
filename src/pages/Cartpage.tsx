import useTitle from "../hook/useTitle"
import Cart from '../components/cart/Cart'

const Cartpage = () => {
    useTitle('My cart | Goods4you')
    return (
        <Cart/>
    )
}

export default Cartpage