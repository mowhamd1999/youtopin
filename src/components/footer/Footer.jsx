import React from "react";
import style from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import image from "./../../assets/namad/e_namad.png";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.body_first}>
        <div className={style.div_1}>
          <div>
            <span className={style.link}>پشتیبانی</span>
            <p className={style.link}>۲۴ ساعته</p>
          </div>
          <div>
            <span className={style.link}>تلفن پشتیبانی :</span>
            <p className={style.link}>021-91005711</p>
          </div>
          <div className={style.social_div}>
            <span>یوتوپین در شبکه‌های اجتماعی:</span>
            <div className={style.social}>
              <button className={style.social_btn_in}>
                <FaLinkedinIn />
              </button>
              <button className={style.social_btn_insta}>
                <FaInstagram />
              </button>
              <button className={style.social_btn_telegram}>
                <FaTelegramPlane />
              </button>
            </div>
          </div>
        </div>
        <div className={style.div_2}>
          <div className={style.Links}>
            <div className={style.link_div}>
              <a className={style.link}>درباره ما</a>
              <a className={style.link}>تماس با ما</a>
              <a className={style.link}>سوالات متداول</a>
            </div>
            <div className={style.link_div}>
              <a className={style.link}>قوانین و شرایط</a>
              <a className={style.link}>حریم خصوصی</a>
              <a className={style.link}>شکایات</a>
            </div>
            <div className={style.link_div}>
              <a className={style.link}>دانلود اپلیکیشن</a>
              <a className={style.link}>اشتراک یوتوپین</a>
              <a className={style.link}>بلاگ</a>
            </div>
          </div>
          <div className={style.image}>
            <div className={style.image_div}>
              <img className={style.images} src={image} alt="e-namad" />
            </div>
            <div className={style.image_div}>
              <img className={style.images} src={image} alt="e-namad" />
            </div>
            <div className={style.image_div}>
              <img className={style.images} src={image} alt="e-namad" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.p_div}>
        <p className={style.p}>
          کلیه حقوق این سایت محفوظ و متعلق به شرکت ایده گستر داده کسب و کار شهر
          می‌باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
