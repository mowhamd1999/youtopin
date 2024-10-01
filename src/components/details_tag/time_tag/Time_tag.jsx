import React from "react";
import style from "./time_tag.module.css";
////////////////////////////////////////
import { LuArrowRightToLine } from "react-icons/lu";
import { LuArrowLeftToLine } from "react-icons/lu";
////////////////////////////////////////
const Time_tag = ({ details }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>زمان‌بندی</h3>
      <div className={style.div}>
        <div className={style.first}>
          <LuArrowRightToLine className={style.icon} />
          <div>
            <div className={style.info}>
              <p className={style.p}>تاریخ رفت:</p>
              <span className={style.span}>{details.time}</span>
            </div>
            <div className={style.info}>
              <p className={style.p}>ساعت حرکت:</p>
              <span className={style.span}>{details.departure_time}</span>
            </div>
          </div>
        </div>
        <div className={style.first}>
          <LuArrowLeftToLine className={style.icon} />
          <div>
            <div className={style.info}>
              <p className={style.p}>تاریخ برگشت:</p>
              <span className={style.span}>{details.time}</span>
            </div>
            <div className={style.info}>
              <p className={style.p}>ساعت حرکت:</p>
              <span className={style.span}>{details.return_time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time_tag;
