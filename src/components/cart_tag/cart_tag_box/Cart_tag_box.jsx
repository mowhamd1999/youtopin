import React from 'react'
import style from './cart_tag_box.module.css'
const Cart_tag_box = ({details}) => {
  return (
    <div className={style.container}>
      <h4 className={style.h4}>سبد خرید</h4>
      {details.products.map(item => (
        <p>s</p>
      ))}
    </div>
  )
}

export default Cart_tag_box