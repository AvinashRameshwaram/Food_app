import meals from "../Assets/meals.jpg";
import style from "../Layout/Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>Meals</h1>
        <CartButton />
      </header>
      <div className={style["main-image"]}>
        <img src={meals} alt="food logo" />
      </div>
    </>
  );
};

export default Header;
