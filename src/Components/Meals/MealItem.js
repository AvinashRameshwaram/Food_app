import classes from "../Meals/MealItem.module.css";
import MealItemForm from "../Meals/MealItemForm/MealItemForm";
import CartContext from "../Store/Cart-context";
import { useContext } from "react";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const crtCntx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    crtCntx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log(amount);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
