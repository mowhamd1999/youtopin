import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SwiperInDetails from "../../components/swiperInDetails/SwiperInDetails";
import style from "./tour_details.module.css";
import Details_tag from "../../components/details_tag/Details_tag";
import Price from "../../components/details_tag/price_tag/Price";
import Time_tag from "../../components/details_tag/time_tag/Time_tag";
import Accordion_tag from "../../components/details_tag/accordion_tag/Accordion_tag";
import Services_tag from "../../components/details_tag/services_tag/Services_tag";
import Residance_tag from "../../components/details_tag/residence/Residance_tag";
import Leader_tag from "../../components/details_tag/leader_tag/Leader_tag";
import Law_tag from "../../components/details_tag/law_tag/Law_tag";
import Description_tag from "../../components/details_tag/description_tag/Description_tag";

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
        <div className={style.price}>
          <Price details={tour} />
        </div>
        <div className={style.time}>
          <Time_tag details={tour} />
        </div>
        <div className={style.accordion}>
            <Accordion_tag details={tour} />
        </div>
        <div className={style.services}>
          <Services_tag details={tour} />
        </div>
        <div className={style.residance}>
          <Residance_tag details={tour} />
        </div>
        <div className={style.leader}>
          <Leader_tag details={tour} />
        </div>
        <div className={style.law}>
          <Law_tag details={tour} />
        </div>
        <div className={style.description}>
          <Description_tag details={tour} />
        </div>
      </div>
      <div className={style.leftContainer}>s</div>
    </div>
  );
};

export default Tour_details;
