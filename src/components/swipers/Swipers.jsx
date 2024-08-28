import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import style from "./swipers.module.css";
import SwiperCart from "../swiperCart/SwiperCart";
const Swipers = ({ products }) => {
  return (
    <div className={style.div}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1301: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className={style.swiper}
      >
        {" "}
        {products.map((item) => (
          <SwiperSlide key={item.id} className={style.swiper_slide}>
            <SwiperCart product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipers;
