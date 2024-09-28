import React, { useState } from "react";
import style from "./singup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Signup = () => {
  const [focusedField, setFocusedField] = useState(null); 
  const [user , setUser ] = useState()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: "https://www.imghippo.com/i/hphDo1727506240.png",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("نمیتواند خالی باشد"),
      email: Yup.string()
        .email("لطفا ایمیل خود را با دقت وارد کنید")
        .required("نمیتواند خالی باشد"),
      password: Yup.string()
        .min(8, "باید بیشتر از ۸ کارکتر باشد")
        .required("نمیتواند خالی باشد"),
    }),
    onSubmit: async (values) => {
      if (values.name && values.email && values.password) {
        try {
          const response = await axios.post(
            "https://api.escuelajs.co/api/v1/users/",
            values
          );
          console.log(response.data);
          setUser(response.data)
        } catch (error) {
          console.log(error);
        }
      }
    },
  });
  
  console.log(user)
  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getClassName = (field) => {
    return `${style.input_container} ${
      focusedField === field || formik.values[field] ? style.focused : ""
    }`;
  };

  return (
    <div className={style.container}>
      <h4 className={style.h4}>اطلاعات خود را وارد کنید</h4>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Input */}
        <div className={getClassName("name")}>
          <label className={style.floating_label}>نام و نام خانوادگی</label>
          <input
            type="text"
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            {...formik.getFieldProps("name")}
          />
        </div>
        <div className={style.error_div}>
          {formik.touched.name && formik.errors.name ? (
            <span className={style.error}>{formik.errors.name}</span>
          ) : null}
        </div>

        {/* Email Input */}
        <div className={getClassName("email")}>
          <label className={style.floating_label}>ایمیل</label>
          <input
            type="email"
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className={style.error_div}>
          {formik.touched.email && formik.errors.email ? (
            <span className={style.error}>{formik.errors.email}</span>
          ) : null}
        </div>

        {/* Password Input */}
        <div className={getClassName("password")}>
          <label className={style.floating_label}>رمز عبور</label>
          <input
            type="password"
            onFocus={() => handleFocus("password")}
            onBlur={handleBlur}
            {...formik.getFieldProps("password")}
          />
        </div>
        <div className={style.error_div}>
          {formik.touched.password && formik.errors.password ? (
            <span className={style.error}>{formik.errors.password}</span>
          ) : null}
        </div>
        <div className={style.div_btn}>
          <button type="submit" className={style.btn}>
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
