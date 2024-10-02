import React from "react";
import style from "./services_tag.module.css";

import { IoFastFoodOutline } from "react-icons/io5";

const Services_tag = ({ details }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>خدمات تور:</h3>
      <div className={style.info}>
        <IoFastFoodOutline className={style.icon} />
        <p>{details.included_meals}</p>
      </div>
    </div>
  );
};

export default Services_tag;
