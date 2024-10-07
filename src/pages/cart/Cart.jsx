import React from "react";
import style from "./cart.module.css";
import { useSelector } from "react-redux";
import Cart_tag from "../../components/cart_tag/Cart_tag";
const Cart = () => {
  const data = useSelector((state) => state.userState);
  console.log(data);
  return (
    <div className={style.container}>
      <div className={style.right}>
        {data.products.map(item => 
            <Cart_tag details={item} />
        )}
      </div>
      <div className={style.left}>ss</div>
    </div>
  );
};

export default Cart;
