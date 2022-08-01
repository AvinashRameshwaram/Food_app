import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-context";
import style from "../Layout/CartButton.module.css";
import { useContext } from "react";

const CartButton = (props) => {
  const context = useContext(CartContext);

  const numberOfItem = context.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfItem}</span>
    </button>
  );
};

export default CartButton;
