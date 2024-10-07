import React, { useEffect, useState } from "react";
import style from "./card_tag.module.css";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Card_tag = ({ details }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userState);
  console.log(data)
  const navigate = useNavigate();
  const increaseHandler = () => {
    if (quantity < 4) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const reserveHandler = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { ...details, quantity: quantity },
    });
    navigate("/cart");
  };
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
            <GoPlus className={style.increase_btn} onClick={increaseHandler} />
            <span className={style.quantity_quantity}>
              {quantity} <span className={style.span}>مسافر</span>
            </span>
            <FiMinus
              className={
                quantity === 1
                  ? style.decrease_btn_false
                  : style.decrease_btn_true
              }
              onClick={decreaseHandler}
            />
          </div>
        </div>
      </div>
      <div className={style.total}>
        <p>جمع کل:</p>
        <div className={style.money_span}>
          <span>
            <span className={style.money}>{details.price * quantity}</span>
            <span className={style.change}>
              {details.country === "ایران" ? "تومان" : "یورو"}
            </span>
          </span>
        </div>
      </div>
      {data.user !== null ? (
        <button className={style.btn} onClick={reserveHandler}>
          رزرو تور
        </button>
      ) : (
        <Link className={style.Link} to={"/login"}>
          <button className={style.btn}>ورود</button>
        </Link>
      )}
    </div>
  );
};

export default Card_tag;
