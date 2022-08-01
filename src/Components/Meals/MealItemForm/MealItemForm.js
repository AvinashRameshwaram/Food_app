import style from "../MealItemForm/MealItemForm.module.css";
import Input from "../../../Components/UI/Input/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  // console.log(props);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitEventHandler = (event) => {
    event.preventDefault();

    console.log(props.onAddToCart);

    const enteredAmount = amountInputRef.current.value;
    const enteredNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredNumber < 1 ||
      enteredNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredNumber);
  };

  return (
    <form className={style.form} onSubmit={submitEventHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add To cart</button>
      {!amountIsValid && <p>Please add a valid amount between 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
