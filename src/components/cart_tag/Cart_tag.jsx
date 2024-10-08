import React from "react";
import style from "./cart_tag.module.css";
import Cart_form from "./cart_tag_form/Cart_form";

const Cart_tag = ({ details }) => {
  return (
    <div className={style.container}>
      <h4>
        {details.continent} {details.country} {details.destination} با{" "}
        {details.Transportation} {details.time}
      </h4>
      {[...Array(details.quantity)].map((_, index) => (
        <div key={index} className={style.div}>
          <p className={style.p}>مسافر شماره {index + 1}</p>
          <div className={style.form_container}>
            <Cart_form />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart_tag;
