import React from "react";
import style from "./law_tag.module.css";
const Law_tag = ({ details }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>قوانین کنسلی تور:</h3>
      <p className={style.p}>{details.cancellation_policy}</p>
    </div>
  );
};

export default Law_tag;
