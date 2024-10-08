import React, { useState } from "react";
import style from "./cart_form.module.css";

const Cart_form = () => {
  const [focusedInputs, setFocusedInputs] = useState({
    name: false,
    userCode: false,
    number: false,
    email: false,
  });

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const handleFocus = (key) => {
    setFocusedInputs((prev) => ({ ...prev, [key]: true }));
  };

  const handleBlur = (key, value) => {
    setFocusedInputs((prev) => ({ ...prev, [key]: value !== "" }));
  };

  const renderDayOptions = () => {
    let options = [];
    for (let day = 1; day <= 31; day++) {
      options.push(
        <option key={day} value={day}>
          {day}
        </option>
      );
    }
    return options;
  };

  const renderYearOptions = () => {
    let options = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 30; year <= currentYear; year++) {
      options.push(
        <option key={year} value={year} className={style.option_year}>
          {year}
        </option>
      );
    }
    return options;
  };

  return (
    <div className={style.container}>
      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.name ? style.focused : ""
          }`}
        >
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("name")}
          onBlur={(e) => handleBlur("name", e.target.value)}
        />
      </div>

      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.userCode ? style.focused : ""
          }`}
        >
          کد ملی
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("userCode")}
          onBlur={(e) => handleBlur("userCode", e.target.value)}
        />
      </div>

      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.number ? style.focused : ""
          }`}
        >
          شماره موبایل
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("number")}
          onBlur={(e) => handleBlur("number", e.target.value)}
        />
      </div>

      <div className={style.date}>
        <p className={style.date_p}>تاریخ تولد</p>
        <select name="day" id="day" className={style.select}>
          <option value="" disabled selected hidden>
            روز
          </option>
          {renderDayOptions()}
        </select>
        <select name="month" id="month" className={style.select}>
          <option value="" disabled selected hidden>
            ماه
          </option>
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
        <select name="year" id="year" className={style.select}>
          <option value="" disabled selected hidden>
            سال
          </option>
          {renderYearOptions()}
        </select>
      </div>

      <div className={style.input_group}>
        <label
          className={`${style.floating_label} ${
            focusedInputs.email ? style.focused : ""
          }`}
        >
          ایمیل (اختیاری)
        </label>
        <input
          type="text"
          className={style.input}
          onFocus={() => handleFocus("email")}
          onBlur={(e) => handleBlur("email", e.target.value)}
        />
      </div>
      <p className={style.p_info}>
        کد ملی و تاریخ تولد جهت صدور بلیت و بیمه استفاده می‌شود
      </p>
    </div>
  );
};

export default Cart_form;
