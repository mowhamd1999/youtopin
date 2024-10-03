import React, { useState } from "react";
import style from "./card_tag.module.css";
///////////////////////////////////////////
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
///////////////////////////////////////////
const Card_tag = ({ details }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={style.container}>
      <h3>
        {details.continent} {details.country} {details.destination}{" "}
        {details.duration} با {details.Transportation} در{" "}
        {details.accommodation}
      </h3>
      <div className={style.id}>(شناسه تور: {details.id})</div>
      <div className={style.price}>
        <p className={style.p}>قیمت برای هر نفر</p>
        <div className={style.money_span}>
          <span>
            <span className={style.money}>{details.price}</span>
            <span className={style.change}>
              {details.country === "ایران" ? "تومان" : "یورو"}
            </span>
          </span>
        </div>
        <div className={style.quantity}>
          <p className={style.p}>تعداد مسافر :</p>
          <div className={style.quantity_div}>
            <GoPlus className={style.increase_btn} />
            <span className={style.quantity_quantity}>{quantity}</span>
            <FiMinus className={style.decrease_btn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_tag;
