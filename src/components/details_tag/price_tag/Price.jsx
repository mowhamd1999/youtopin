import React from "react";
import style from "./price.module.css";
const Price = ({ details }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>هزینه تور</h3>
      <p className={style.p}>قیمت به ازای هر بزرگسال</p>
      <div className={style.span_div}>
        <span className={style.span}>{details.price} {details.country === "ایران" ? "تومان" : "یورو"} {details.Transportation === "هواپیما" ? "+ نرخ پرواز" : ""}</span><br />
        <span className={style.info}>اتاق یک نفره</span>
      </div>
    </div>
  );
};

export default Price;
