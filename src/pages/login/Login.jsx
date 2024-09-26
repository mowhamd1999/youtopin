import React, { useState } from "react";
import style from "./login.module.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // مدیریت خطاهای رمز عبور
  const validatePassword = () => {
    if (passwordValue === "") {
      setPasswordError("نمی‌تواند خالی باشد");
    } else if (passwordValue.length < 6) {
      setPasswordError("حداقل شش کاراکتر");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className={style.container}>
      <h4 className={style.h4}>
        لطفا نام کاربری و رمز عبور خود را وارد کنید
      </h4>
      <div
        className={`${style.input_container} ${
          isFocusedUsername || inputValue ? style.focused : ""
        }`}
      >
        <label className={style.floating_label}>
          نام کاربری  
        </label>
        <input
          type="text"
          onFocus={() => setIsFocusedUsername(true)}
          onBlur={() => setIsFocusedUsername(false)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div
        className={`${style.input_container} ${
          isFocusedPassword || passwordValue ? style.focused : ""
        }`}
      >
        <label className={style.floating_label}>رمز عبور</label>
        <input
          type={showPassword ? "text" : "password"}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => {
            setIsFocusedPassword(false);
            validatePassword();
          }}
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className={`${
            passwordError !== "" ? style.withError : style.withoutError
          }`}
        />
        <span
          className={style.eye_icon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      </div>
      <div className={style.error_div}>
        {passwordError && <span className={style.error}>{passwordError}</span>}
      </div>
      <div className={style.div_btn}>
        <button className={style.btn}>ورود</button>
      </div>
      <div className={style.p_div}>
        <p className={style.p}>
          اگر قبلا اکانت نساخته‌اید برای{" "}
          <Link to="/singup" className={style.link}>
            <span className={style.span}> ثبت نام </span>
          </Link>
          کلیک کنید
        </p>
      </div>
    </div>
  );
};

export default Login;
