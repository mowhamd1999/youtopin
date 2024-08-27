import React, { useEffect, useState } from "react";
import style from "./Main.module.css";
import fetchAPI from "./../../Redux/TourReducer/tourAction";
import SliderSwiper from "../../components/sliderSwiper/SliderSwiper";
import { useDispatch, useSelector } from "react-redux";
import loading from "./../../assets/loading/loading.gif";

const Main = () => {
  const loadinggif = loading;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.toursState);

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
                  تور‌های <span className={style.span}>آسیایی</span> یوتوپین
                </h2>
                <button className={style.btn}>مشاهده همه</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
