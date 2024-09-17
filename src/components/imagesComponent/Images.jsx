import React from "react";
import style from "./images.module.css";
import image1 from "./../../assets/travel/travel1.jpg";
import image2 from "./../../assets/travel/travel2.jpg";
import image3 from "./../../assets/travel/travel3.jpg";
import image4 from "./../../assets/travel/travel4.jpg";
import image5 from "./../../assets/travel/travel5.jpg";
const Images = () => {
  return (
    <div className={style.container}>
      <div className={style.right}>
        <img src={image1} className={style.image1} alt="image1" />
        <p className={style.p}>جنگل ۲۰۰۰</p>
      </div>
      <div className={style.left}>
        <div className={style.top}>
          <div className={style.right_top}>
            <img src={image2} className={style.image1} alt="image1" />
            <p className={style.p_left}>جنگل ۲۰۰۰</p>
          </div>
          <div className={style.left_top}>
            <img src={image3} className={style.image1} alt="image1" />
            <p className={style.p_left}>جنگل ۲۰۰۰</p>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.right_bottom}>
            <img src={image4} className={style.image1} alt="image1" />
            <p className={style.p_left}>جنگل ۲۰۰۰</p>
          </div>
          <div className={style.left_bottom}>
            <img src={image5} className={style.image1} alt="image1" />
            <p className={style.p_left}>جنگل ۲۰۰۰</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
