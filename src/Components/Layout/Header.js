import meals from "../Assets/meals.jpg";
import style from "../Layout/Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={meals} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
