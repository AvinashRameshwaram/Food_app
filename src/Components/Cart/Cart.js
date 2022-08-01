import Modal from "../UI/Modal/Modal";
import style from "../Cart/cart.module.css";

const Cart = (props) => {
  return (
    <Modal>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>22</span>
      </div>
      <div className={style.amount}>
        <button className={style["button-alt"]}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
