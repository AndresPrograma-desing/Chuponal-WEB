import styles from "../../../scss/Modales/Modal.module.scss";

import { MODAL_TEXT } from "../../const/index";

export default function Modal({ mensaje, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>{MODAL_TEXT.title}</h3>
        <p>{mensaje}</p>
        <button className={styles.botonCerrar} onClick={onClose}>{MODAL_TEXT.button}</button>
      </div>
    </div>
  );
}