import { Title } from "../UI/title";
import cl from "./Cart.module.scss";
import { CartPrice } from "./cartPrice";
import { useAppSelector } from "src/hook/redux";
import { CartItem } from "./cartItem";

export const Cart = () => {
  const { carts } = useAppSelector((state) => state.userSlice);

  return (
    <div className={cl.cart}>
      <Title className={cl.title} tag="h1" fontSize="xxl" fontWeight="Bold">
        My cart
      </Title>
      {carts.length > 0 ? (
        <div className={cl.cartWrapper}>
          <div className={cl.products}>
            {carts[0].products.map((product) => (
              <CartItem key={product.id} content={product} />
            ))}
          </div>
          <div>
            <CartPrice cart={carts[0]} />
          </div>
        </div>
      ) : (
        <div className={cl.noElement}>No Items</div>
      )}
    </div>
  );
};
