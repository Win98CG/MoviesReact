import React, { useEffect, useState } from "react";
import { fetchApi, requests } from "../../Components/api/requests";

import style from "./Banner.module.css";

function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetchApi(requests.fetchNetflixOriginals).then((data) => {
      setBanner(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    });
  }, []);
  return (
    <div className={style.container}>
      <img
        className={style.banner}
        src={`https://image.tmdb.org/t/p/original${banner?.poster_path}`}
        alt="Banner movie"
      />
      <div className={style.decription}>
        <h1>{banner?.name}</h1>
        <button className={style.btn}>Play</button>
        <button className={style.btn}>Pause</button>
        <p>{banner?.overview}</p>
      </div>
    </div>
  );
}
export default Banner;
