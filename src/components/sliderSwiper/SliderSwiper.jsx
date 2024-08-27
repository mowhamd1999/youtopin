import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./SliderSwiper.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import images :
import first from "./../../assets/SlideFirstSwiper/1.webp";
import secound from "./../../assets/SlideFirstSwiper/2.webp";
import third from "./../../assets/SlideFirstSwiper/3.webp";

const SliderSwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className={style.div}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={style.mySwiper}
      >
        <SwiperSlide>
          <img className={style.img} src={first} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.img} src={secound} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.img} src={third} alt="Slide 3" />
        </SwiperSlide>
        <div className={style.autoplay_progress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
