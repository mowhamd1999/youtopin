import React, { useState } from "react";
import style from "./login.module.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
const Login = () => {
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={style.container}>
      <h4 className={style.h4}>
        لطفا شماره موبایل یا نام کاربری و رمز عبور خود را وارد کنید
      </h4>

      {/* فیلد نام کاربری یا شماره موبایل */}
      <div
        className={`${style.input_container} ${
          isFocusedUsername || inputValue ? style.focused : ""
        }`}
      >
        <label className={style.floating_label}>
          نام کاربری یا شماره موبایل
        </label>
        <input
          type="text"
          onFocus={() => setIsFocusedUsername(true)}
          onBlur={() => setIsFocusedUsername(false)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {/* فیلد رمز عبور */}
      <div
        className={`${style.input_container} ${
          isFocusedPassword || passwordValue ? style.focused : ""
        }`}
      >
        <label className={style.floating_label}>رمز عبور</label>
        <input
          type={showPassword ? "text" : "password"} // تغییر نوع input
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <span
          className={style.eye_icon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </div>
    </div>
  );
};

export default Login;
