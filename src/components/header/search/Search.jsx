import React from "react";
import style from "./search.module.css";
import { IoIosSearch } from "react-icons/io";
const Search = (isSmallScreen) => {
  return (
    <div className={isSmallScreen ? style.searchContainer_v2 : style.searchContainer}>
      <input type="text" className={style.searchInput} placeholder="جست و جو" />
      <button className={style.searchButton}>
        <IoIosSearch />
      </button>
    </div>
  );
};

export default Search;
