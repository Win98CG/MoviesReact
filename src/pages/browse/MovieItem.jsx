import React from "react";

import style from "./MovieItem.module.css";

function MovieItem({ title, movie, onSelectedMovide }) {
  const handleSelected = function () {
    const img = movie.backdrop_path ? movie.backdrop_path : movie.poster_path;
    const name = movie.name ? movie.name : movie.title;
    const date = movie.release_date ? movie.release_date : movie.first_air_date;
    onSelectedMovide(
      movie.id,
      name,
      date,
      movie.vote_average,
      movie.overview,
      img
    );
  };
  const imgLink = title
    ? `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`
    : `https://image.tmdb.org/t/p/original${movie?.poster_path}`;
  return (
    <>
      <div
        className={`${style.movie} ${(style.movieClass = title
          ? style.movie_style
          : "")} ${style.style}`}
        key={movie?.id}
        onClick={handleSelected}
      >
        <img src={imgLink} alt="Movie" />
      </div>
    </>
  );
}
export default MovieItem;
