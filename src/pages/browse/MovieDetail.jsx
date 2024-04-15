import React, { useEffect, useState } from "react";
import style from "./MovieDetail.module.css";
function MovieDetail({
  name = "Movie Name",
  id,
  release,
  vote,
  overview,
  img,
}) {
  const [trailer, setTrailer] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bbdd3c2a0486dda851d6fe44eebcaf6f`
    )
      .then((res) => res.json())
      .then((data) => {
        let temp;
        const image = (
          <img
            className={style.image}
            src={`https://image.tmdb.org/t/p/original${img}`}
            alt="movie"
          />
        );
        //loc mang de tim trailer phu hop
        if (data.results.length !== 0) {
          for (const movie of data.results) {
            if (
              movie.site === "YouTube" &&
              (movie.type === "Teaser" || movie.type === "Trailer")
            )
              temp = (
                <iframe
                  title={id}
                  width="48%"
                  height="400"
                  src={`https://www.youtube.com/embed/${movie.key}`}
                ></iframe>
              );
          }
        }
        if (temp) {
          setTrailer(temp);
        } else setTrailer(image);
      })
      .catch((error) => console.error(error.status_message));
  }, [id, img]);
  return (
    <div className={style.container}>
      <div className={style.decription}>
        <h1 className={style.title}>{name}</h1>
        <p className={style.text}>Release Date:{release}</p>
        <p className={style.text}>Vote:{+vote.toFixed(1)}/10</p>
        <p>{overview}</p>
      </div>
      {trailer}
    </div>
  );
}
export default MovieDetail;
