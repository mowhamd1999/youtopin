import React from "react";
import style from "./swipercart.module.css";
import { FaStar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
////////////////////////////////////////////////
import { FaTrain } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { FaTruckMonster } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
////////////////////////////////////////////////
const SwiperCart = ({ product }) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={product.avatar} alt="" />
      <h5 className={style.h5}>
        {product.country} {product.destination} {product.accommodation}
        {product.Transportation} {product.time}
      </h5>
      <div className={style.duration}>
        <span className={style.span}>({product.duration})</span>
      </div>
      <div className={style.duration}>
        <span className={style.span_price}>
          <p className={style.p_price}>{product.price}</p>تومان
        </span>
        <div className={style.star_div}>
          <p className={style.star_p}>{product.star}</p>
          <FaStar className={style.star} />
        </div>
      </div>
      <div className={style.duration}>
        <div className={style.calender_div}>
          <CiCalendar className={style.calender} />
          <span>{product.time}</span>
        </div>
        {product.Transportation === "ون توریستی" ? (
          <FaTruckMonster className={style.transpotation} />
        ) : product.Transportation === "اتوبوس VIP" ? (
          <FaBusSimple className={style.transpotation} />
        ) : product.Transportation === "خودرو آفرودی" ? (
          <FaTruckMonster className={style.transpotation} />
        ) : product.Transportation === "قطار" ? (
          <FaTrain className={style.transpotation} />
        ) : product.Transportation === "خودرو شخصی" ? (
          <FaCar className={style.transpotation} />
        ) : product.Transportation === "هواپیما" ? (
          <IoAirplane className={style.transpotation} />
        ) : null}
      </div>
    </div>
  );
};

export default SwiperCart;
