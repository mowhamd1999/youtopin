import React from "react";
import style from "./details_tag.module.css";
////////////////////////////////////
import { CiClock1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { BsHouse } from "react-icons/bs";
import { MdEmojiTransportation } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { GiMountainClimbing } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
////////////////////////////////////
const Details_tag = ({ details }) => {
  return (
    <div>
      <div className={style.title}>
        <h2>
          {details.continent} {details.country} {details.destination}
        </h2>
        <div className={style.rate_div}>
          <span className={style.span}>امتیاز تور:</span>
          <FaStar className={style.rate} />
          <p className={style.p}>{details.star}</p>
        </div>
      </div>
      <div className={style.body_div}>
        <CiClock1 className={style.icon} />
        <p className={style.p}>مدت زمان سفر:</p>
        <span className={style.span}>{details.duration}</span>
      </div>
      <div className={style.body_div}>
        <CiCalendar className={style.icon} />
        <p className={style.p}>تاریخ رفت:</p>
        <span className={style.span}>{details.time}</span>
      </div>
      <div className={style.body_div}>
        <CiLocationOn className={style.icon} />
        <p className={style.p}>مبدا:</p>
        <span className={style.span}>{details.origin}</span>
      </div>
      <div className={style.body_div}>
        <GrLocation className={style.icon} />
        <p className={style.p}>مقصد:</p>
        <span className={style.span}>{details.destination}</span>
      </div>
      <div className={style.body_div}>
        <BsHouse className={style.icon} />
        <p className={style.p}>نوع اقامت:</p>
        <span className={style.span}>{details.accommodation}</span>
      </div>
      <div className={style.body_div}>
        <MdEmojiTransportation className={style.icon} />
        <p className={style.p}>حمل و نقل‌:</p>
        <span className={style.span}>{details.Transportation}</span>
      </div>
      <div className={style.body_div}>
        <FaPersonWalkingLuggage className={style.icon} />
        <p className={style.p}>رده سنی:</p>
        <span className={style.span}>{details.agegroup}</span>
      </div>
      <div className={style.body_div}>
        <IoIosPeople className={style.icon} />
        <p className={style.p}>اندازه گروه:</p>
        <span className={style.span}>{details.groupsize}</span>
      </div>
      <div className={style.body_div}>
        <GiMountainClimbing className={style.icon} />
        <p className={style.p}>درجه سختی:</p>
        <span className={style.span}>{details.difficulty}</span>
      </div>
      {parseInt(details.difficulty.split(" ")[0]) < 4 && (
        <span className={style.info}>
          مناسب عموم افراد: پیاده‌روی در مسیر صاف و هموار
        </span>
      )}
      {parseInt(details.difficulty.split(" ")[0]) >= 4 && (
        <span className={style.info}>
          مناسب برای افراد ورزشکار ویا با آمادگی جسمانی بالا
        </span>
      )}
    </div>
  );
};

export default Details_tag;
