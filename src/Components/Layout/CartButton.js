import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-context";
import style from "../Layout/CartButton.module.css";
import { useContext } from "react";

const CartButton = (props) => {
  const context = useContext(CartContext);
  console.log(context, "context");

  const numberOfItem = context.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  console.log(numberOfItem, "amount");
  console.log(props);

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
