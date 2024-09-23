import React, { useState } from "react";
import style from "./singup.module.css";
const Signup = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={style.container}>
      <div
        className={`${style.input_container} ${
          isFocused || inputValue ? `${style.focused}` : ""
        }`}
      >
        <label className={style.floating_label}>نام کاربری یا شماره موبایل</label>
        <input
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Signup;
