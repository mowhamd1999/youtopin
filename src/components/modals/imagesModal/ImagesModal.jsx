import React from "react";
import style from "./imagesModal.module.css";

const ImagesModal = ({ image, onClose }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <span className={style.close} onClick={onClose}>
          &times;
        </span>
        <div className={style.content}>
          <p>جنگل ۲۰۰۰</p>
        </div>
        <img src={image} alt="Selected" className={style.image} />
      </div>
    </div>
  );
};

export default ImagesModal;
