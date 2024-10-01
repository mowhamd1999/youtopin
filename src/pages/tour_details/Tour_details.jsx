import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SwiperInDetails from "../../components/swiperInDetails/SwiperInDetails";
import style from "./tour_details.module.css";
import Details_tag from "../../components/details_tag/Details_tag";
const Tour_details = () => {
  const tours = useSelector((state) => state.toursState);
  const id = useParams();
  const tour = tours.tours.find((item) => item.id === id.id);
  console.log(tour);
  return (
    <div className={style.container}>
      <div className={style.rightContainer}>
        <div className={style.top}>
          <div className={style.swiper_div}>
            <SwiperInDetails />
          </div>
          <div className={style.info_div}>
            <Details_tag details={tour} />
          </div>
        </div>
      </div>
      <div className={style.leftContainer}>s</div>
    </div>
  );
};

export default Tour_details;
