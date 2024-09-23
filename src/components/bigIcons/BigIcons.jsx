import React from "react";
import style from "./bigIcons.module.css";
import phone from "./../../assets/BigIcons/phone.png";
import support from "./../../assets/BigIcons/support.png";
import travel from "./../../assets/BigIcons/travel.png";
import map from "./../../assets/BigIcons/map.png";
const BigIcons = () => {
  return (
    <div className={style.container}>
      <div className={style.div}>
        <img src={phone} alt="" className={style.img} />
        <p>شبکه اجتماعی گردشگری</p>
      </div>
      <div className={style.div}>
        <img src={support} alt="" className={style.img} />
        <p>پشتیبانی 24 ساعته</p>
      </div>
      <div className={style.div}>
        <img src={map} alt="" className={style.img} />
        <p>مرجع راهنمای سفر شخصی</p>
      </div>
      <div className={style.div}>
        <img src={travel} alt="" className={style.img} />
        <p>مرجع تورهای داخلی و خارجی</p>
      </div>
    </div>
  );
};

export default BigIcons;
