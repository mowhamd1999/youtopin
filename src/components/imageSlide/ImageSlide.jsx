import React from "react";
import style from "./imageSlide.module.css";
import image1 from "./../../assets/main_picture/picture1.webp";
const ImageSlide = () => {
  return (
    <div className={style.img_div}>
      <img src={image1} alt="" className={style.img} />
      <div className={style.content_div}>
        <h1 className={style.h1}>!تور خودت رو بساز</h1>
        <div className={style.content}>
          <p>داخلی : ۹۱۰۰۵۷۱۱-۰۲۱</p>
          <p>واساپ : 09227068331</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
