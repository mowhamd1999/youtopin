import React, { useEffect, useState } from "react";
import style from "./Main.module.css";
import fetchAPI from "./../../Redux/TourReducer/tourAction";
import SliderSwiper from "../../components/sliderSwiper/SliderSwiper";
import { useDispatch, useSelector } from "react-redux";
import loading from "./../../assets/loading/loading.gif";
import Swipers from "../../components/swipers/Swipers";

const Main = () => {
  const loadinggif = loading;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.toursState);
  const besttour = state.tours.filter((item) => item.star >= 4);
  const asia = state.tours.filter((item) => item.continent === 'آسیا' && item.country !== 'ایران')
  const euro = state.tours.filter(item => item.continent === 'اروپا')
  // console.log(besttour)
  useEffect(() => {
    if (!state.tours.length) dispatch(fetchAPI());
  }, [state.tours.length]);

  console.log(state);

  return (
    <div>
      <SliderSwiper />
      {state.loading ? (
        <div className={style.loading}>
          <img src={loadinggif} alt="Loading..." />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.first}>
            <div className={style.div}>
              <div className={style.header}>
                <h2 className={style.h2}>
                  تور‌های <span className={style.span}>تاپ</span> یوتوپین
                </h2>
                <button className={style.btn}>مشاهده همه</button>
              </div>
              <Swipers products={besttour} />
            </div>
            <div className={style.div}>
              <div className={style.header}>
                <h2 className={style.h2}>
                  تور‌های <span className={style.span}>آسیایی</span> یوتوپین
                </h2>
                <button className={style.btn}>مشاهده همه</button>
              </div>
              <Swipers products={asia} />
            </div>
            <div className={style.div}>
              <div className={style.header}>
                <h2 className={style.h2}>
                  تور‌های <span className={style.span}>آسیایی</span> یوتوپین
                </h2>
                <button className={style.btn}>مشاهده همه</button>
              </div>
              <Swipers products={euro} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
