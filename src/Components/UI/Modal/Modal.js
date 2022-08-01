import style from "../Modal/Modal.css";
import ReactDOM from "react-dom";

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
const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </>
  );
};

export default Modal;
