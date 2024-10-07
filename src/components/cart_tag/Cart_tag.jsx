import React from "react";
import style from "./cart_tag.module.css";

const Cart_tag = ({ details }) => {
  return (
    <div className={style.container}>
      <h4>
        {details.continent} {details.country} {details.destination} با{" "}
        {details.Transportation} {details.time}
      </h4>
      {[...Array(details.quantity)].map((_, index) => (
        <div key={index} className={style.div}>
          <p>شماره مسافر</p>
        </div>
      ))}
    </div>
  );
};

export default Cart_tag;
