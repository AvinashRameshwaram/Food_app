import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-context";
import style from "../Layout/CartButton.module.css";
import { useContext } from "react";

const CartButton = (props) => {
  const context = useContext(CartContext);

  const numberOfCartItems = context.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
