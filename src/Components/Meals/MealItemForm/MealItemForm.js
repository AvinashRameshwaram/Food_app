import style from "../MealItemForm/MealItemForm.module.css";
import Input from "../../../Components/UI/Input/Input";

const MealItemForm = (props) => {
  return (
    <form className={style.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
