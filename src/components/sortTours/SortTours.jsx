import React from "react";
import style from "./sortTour.module.css";

import africa from "./../../assets/sortpic/africa.jpg";
import egypt from "./../../assets/sortpic/egypt.jpg";
import euro from "./../../assets/sortpic/euro.jpg";
import forein from "./../../assets/sortpic/forein.jpg";
import france from "./../../assets/sortpic/france.jpg";
import italy from "./../../assets/sortpic/italy.jpg";
import japan from "./../../assets/sortpic/japan.jpg";
import persian from "./../../assets/sortpic/persian.jpg";
import shomal from "./../../assets/sortpic/shomal.jpg";
import spain from "./../../assets/sortpic/spain.jpg";


const SortTours = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={forein} alt="تور‌های خارجی" />
          <p className={style.p}>تور‌های خارجی</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={euro} alt="اروپا با یوتوپین" />
          <p className={style.p}>اروپا با یوتوپین</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={france} alt="تور‌های فرانسه" />
          <p className={style.p}>تور‌های فرانسه</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={italy} alt="تور‌های ایتالیا" />
          <p className={style.p}>تور‌های ایتالیا</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={spain} alt="تور‌های اسپانیا" />
          <p className={style.p}>تور‌های اسپانیا</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={persian} alt="ایران گردی با یوتوپین" />
          <p className={style.p}>ایران گردی با یوتوپین</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={egypt} alt="تور مصر" />
          <p className={style.p}>تور مصر</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={japan} alt="تور ژاپن" />
          <p className={style.p}>تور ژاپن</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={shomal} alt="تور‌های شمال" />
          <p className={style.p}>تور‌های شمال</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.div}>
          <img className={style.img} src={africa} alt="تور‌های آفریقا" />
          <p className={style.p}>تور‌های آفریقا</p>
        </div>
      </div>
    </div>
  );
};

export default SortTours;
