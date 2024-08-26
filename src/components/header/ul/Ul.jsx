import React from "react";
import style from "./../ul/ul.module.css";

const Ul = () => {
  return (
    <div className={style.container}>
      <ul className={style.menu}>
        <li className={style.menu_item}>
          تور داخلی
          <ul className={style.submenu}>
            <li>تهران</li>
            <li>مشهد</li>
            <li>اصفهان</li>
          </ul>
        </li>
      </ul>
      <ul className={style.menu}>
        <li className={style.menu_item}>
          تور داخلی
          <ul className={style.submenu}>
            <li>تهران</li>
            <li>مشهد</li>
            <li>اصفهان</li>
          </ul>
        </li>
      </ul>
      <ul className={style.menu}>
        <li className={style.menu_item}>
          ویزا
          <ul className={style.submenu}>
            <li>تهران</li>
            <li>مشهد</li>
            <li>اصفهان</li>
          </ul>
        </li>
      </ul>
      <ul className={style.menu}>
        <li className={style.menu_item}>
          بلیت اتوبوس
          <ul className={style.submenu}>
            <li>تهران</li>
            <li>مشهد</li>
            <li>اصفهان</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Ul;
