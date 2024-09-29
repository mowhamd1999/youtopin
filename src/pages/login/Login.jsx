import React, { useState } from "react";
import style from "./login.module.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/userReducer/userAction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    onSubmit: async (values) => {
      try {
        const response = await axios.get(
          "https://66cb0c7d4290b1c4f1995a66.mockapi.io/api/v1/users"
        );
        const foundUser = response.data.find(
          (user) =>
            values.email === user.email && values.password === user.password
        );
        if (foundUser) {
          dispatch(setUser(foundUser));
          toast.success(`${foundUser.name} خوش آمدید`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          formik.resetForm();
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("ایمیل یا نام کاربری صحیح نمی‌باشد", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          formik.resetForm();
        }
      } catch (error) {
        toast.warning("اتصال به اینترنت خود را برسی کنید", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        richColors
      />
    </div>
  );
};

export default Login;
