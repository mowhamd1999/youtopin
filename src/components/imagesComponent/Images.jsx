import React, { useState } from "react";
import style from "./images.module.css";
import image1 from "./../../assets/travel/travel1.jpg";
import image2 from "./../../assets/travel/travel2.jpg";
import image3 from "./../../assets/travel/travel3.jpg";
import image4 from "./../../assets/travel/travel4.jpg";
import image5 from "./../../assets/travel/travel5.jpg";

import ImagesModal from "../modals/imagesModal/ImagesModal";

const Images = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image); // ذخیره تصویر انتخاب‌شده
    setIsModalOpen(true); // نمایش مودال
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // خالی کردن تصویر انتخاب‌شده پس از بسته شدن مودال
  };

  return (
    <div className={style.container}>
      <div className={style.right}>
        <div
          className={style.imageـcontainer}
          onClick={() => handleImageClick(image1)}
        >
          <img src={image1} className={style.image1} alt="image1" />
          <p className={style.p}>جنگل ۲۰۰۰</p>
        </div>
      </div>

      {isModalOpen && (
        <ImagesModal image={selectedImage} onClose={handleCloseModal} />
      )}

      <div className={style.left}>
        <div className={style.top}>
          <div className={style.right_top}>
            <div
              className={style.imageـcontainer}
              onClick={() => handleImageClick(image2)}
            >
              <img src={image2} className={style.image1} alt="image2" />
              <p className={style.p_left}>جنگل ۲۰۰۰</p>
            </div>
          </div>
          <div className={style.left_top}>
            <div
              className={style.imageـcontainer}
              onClick={() => handleImageClick(image3)}
            >
              <img src={image3} className={style.image1} alt="image3" />
              <p className={style.p_left}>جنگل ۲۰۰۰</p>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.right_bottom}>
            <div
              className={style.imageـcontainer}
              onClick={() => handleImageClick(image4)}
            >
              <img src={image4} className={style.image1} alt="image4" />
              <p className={style.p_left}>جنگل ۲۰۰۰</p>
            </div>
          </div>
          <div className={style.left_bottom}>
            <div
              className={style.imageـcontainer}
              onClick={() => handleImageClick(image5)}
            >
              <img src={image5} className={style.image1} alt="image5" />
              <p className={style.p_left}>جنگل ۲۰۰۰</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
