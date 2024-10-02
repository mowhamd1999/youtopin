import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import Ul from "./ul/Ul";
import Search from "./search/Search";
import { IoCallOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { useSelector } from "react-redux";
const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState();
  const users = useSelector((state) => state.userState);
  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1095);
    };
    const debouncedHandleResize = debounce(handleResize, 100);
    handleResize();
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);
  return (
    <>
      {isSmallScreen === false && (
        <nav className={style.container}>
          <div className={style.first}>
            <Link to={"/"} className={style.Links}>
              <div className={style.div_logo}>
                <img className={style.logo} src={logo} alt="" />
                <span className={style.span_v1}>
                  یوتو<span className={style.span_v2}>پین</span>
                </span>
              </div>
            </Link>
            <div className={style.ui}>
              <Ul />
            </div>
          </div>
          <div className={style.secound}>
            <Search />
            <div className={style.call}>
              <span className={style.span_span}>021-91005711</span>
              <IoCallOutline className={style.icons} />
            </div>
            {users.user !== null ? (
              <div className={style.name}>
                <span>{users.user.name}</span>
              </div>
            ) : (
              <Link to={"/login"} className={style.Links}>
                <div className={style.btn}>
                  <IoPersonOutline className={style.icons} />
                  <span className={style.span_span}>ورود / ثبت‌ نام</span>
                </div>
              </Link>
            )}
            <div className={style.call}>
              <HiOutlineShoppingCart className={style.shop} />
            </div>
          </div>
        </nav>
      )}
      {isSmallScreen === true && (
        <nav className={style.container_v2}>
          <div className={style.body_v2}>
            <LuMenu className={style.menu_icon} />
            <Search isSmallScreen />
            <HiOutlineShoppingCart className={style.shop} />
            <div className={style.div_logo_v2}>
              <img className={style.logo} src={logo} alt="" />
              <span className={style.span_v1}>
                یوتو<span className={style.span_v2}>پین</span>
              </span>
            </div>
          </div>
          <div className={style.secound_v2}>
            <div className={style.btn}>
              <IoPersonOutline className={style.icons} />
              <span className={style.span_span}>ورود / ثبت‌ نام</span>
            </div>
            <div className={style.call}>
              <span className={style.span_span}>021-91005711</span>
              <IoCallOutline className={style.icons_v2} />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
