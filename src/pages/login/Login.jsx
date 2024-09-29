import React, { useState } from "react";
import style from "./login.module.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("لطفا ایمیل خود را با دقت وارد کنید")
        .required("نمیتواند خالی باشد"),
      password: Yup.string()
        .min(8, "باید بیشتر از ۸ کارکتر باشد")
        .required("نمیتواند خالی باشد"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // اینجا می‌توانید درخواست ورود به API را ارسال کنید
    },
  });

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = (field) => {
    setFocusedField(null);
    formik.handleBlur(field); // اضافه شده برای ثبت `touched`
  };

  const getClassName = (field) => {
    return `${style.input_container} ${
      focusedField === field || formik.values[field] ? style.focused : ""
    }`;
  };

  return (
    <div className={style.container}>
      <h4 className={style.h4}>لطفا ایمیل و رمز عبور خود را وارد کنید</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className={getClassName("email")}>
          <label className={style.floating_label}>ایمیل</label>
          <input
            type="email" // تغییر به نوع ایمیل
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            {...formik.getFieldProps("email")}
          />
          <div className={style.error_div}>
            {formik.touched.email && formik.errors.email ? (
              <span className={style.error}>{formik.errors.email}</span>
            ) : null}
          </div>
        </div>

        <div className={getClassName("password")}>
          <label className={style.floating_label}>رمز عبور</label>
          <input
            type={showPassword ? "text" : "password"}
            onFocus={() => handleFocus("password")}
            onBlur={() => handleBlur("password")}
            {...formik.getFieldProps("password")}
            className={`${
              formik.errors.password ? style.withError : style.withoutError
            }`}
          />
          <span
            className={style.eye_icon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
          <div className={style.error_div}>
            {formik.touched.password && formik.errors.password ? (
              <span className={style.error}>{formik.errors.password}</span>
            ) : null}
          </div>
        </div>

        <div className={style.div_btn}>
          <button type="submit" className={style.btn}>
            ورود
          </button>
        </div>

        <div className={style.p_div}>
          <p className={style.p}>
            اگر قبلا اکانت نساخته‌اید برای{" "}
            <Link to="/signup" className={style.link}>
              <span className={style.span}> ثبت نام </span>
            </Link>
            کلیک کنید
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
