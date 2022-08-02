import { useContext } from "react";
import CartContext from "../Store/Cart-context";
import classes from "../Cart/Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";

const cartItemAdded = () => {};

const cartItemRemoved = () => {};

const Cart = (props) => {
  const crtcnxt = useContext(CartContext);
  const totalAmount = `${crtcnxt.totalAmount.toFixed(2)}`;
  const showOrderButton = crtcnxt.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {crtcnxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoved.bind(null, item.id)}
          onAdd={cartItemAdded.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {showOrderButton && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
