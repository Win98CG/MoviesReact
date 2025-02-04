import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";

function NavBar() {
  //doi mau navbar khi scroll
  const [color, setColor] = useState(false);
  useEffect(() => {
    const handleChangeColor = function () {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", handleChangeColor);
    return () => {
      window.removeEventListener("scroll", handleChangeColor);
    };
  }, []);
  // icon cho phan search
  const searchIcon = (
    <svg
      className="svg-inline--fa fa-search fa-w-16"
      fill="#ccc"
      aria-hidden="true"
      data-prefix="fas"
      data-icon="search"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
    </svg>
  );
  //chuyen trang
  const handleChangeBrowsePage = function () {
    window.location.replace("/");
  };
  const handleChangeSearchPage = function () {
    window.location.replace("/search");
  };
  return (
    <div className={`${style.nav_bar} ${color ? style.nav_bar_bg : ""}`}>
      <h3 onClick={handleChangeBrowsePage} className={style.logo}>
        Movie App
      </h3>
      <div onClick={handleChangeSearchPage} className={style.search}>
        {searchIcon}
      </div>
    </div>
  );
}
export default NavBar;
