import style from "../Modal/Modal.css";
import { ReactDOM } from "react";
const Backdrop = (props) => {
  return <div className={style.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const Protal = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, Protal)}
      {ReactDOM.createPortal(<ModalOverlay />, Protal)}
    </>
  );
};

export default Modal;
