import React, { useState } from "react";
import style from "./singup.module.css";
import { useFormik } from "formik";
const Signup = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isFocusedUsername, setIsFocusedNumber] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [numberError, setNumberError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: "https://i.postimg.cc/ZRWVFq4z/man.png",
    },
  });

  return (
    <div className={style.container}>
      <h4 className={style.h4}>اطلاعات خود را وارد کنید</h4>
      <form onSubmit={formik.handleSubmit}>
        <div
          className={`${style.input_container} ${
            isFocusedUsername || nameValue ? style.focused : ""
          }`}
        >
          <label className={style.floating_label}>نام و نام خانوادگی</label>
          <input
            type="text"
            onFocus={() => setIsFocusedNumber(true)}
            onBlur={() => setIsFocusedNumber(false)}
            {...formik.getFieldProps("name")}
            className={`${
              numberError !== "" ? style.withError : style.withoutError
            }`}
          />
        </div>
        <div className={style.error_div}>
          {/* {numberError && <span className={style.error}>{numberError}</span>} */}
        </div>
        <div
          className={`${style.input_container} ${
            isFocusedEmail || emailValue ? style.focused : ""
          }`}
        >
          <label className={style.floating_label}>ایمیل</label>
          <input
            type="email"
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(false)}
            {...formik.getFieldProps("email")}
            className={`${
              numberError !== "" ? style.withError : style.withoutError
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
