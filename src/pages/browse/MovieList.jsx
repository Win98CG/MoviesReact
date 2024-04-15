import React, { useEffect, useState } from "react";
import { fetchApi } from "../../Components/api/requests";

import style from "./MovieList.module.css";
import MovieItem from "./MovieItem";
import MovieDetail from "./MovieDetail";

function MovieList({ title, url }) {
  const [isShow, setIsShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const [movies, setMovies] = useState();
  //xem thong tin khi click vao 1 bo phim
  const handleClickMovie = function (id, name, release, vote, overview, img) {
    const selectedMovie = {
      id,
      name,
      release,
      vote,
      overview,
      img,
    };

    //click vao phim khac se hien thi thong tin moi
    setIsShow(true);
    setSelectedMovie(selectedMovie);
  };
  //call api list phim
  useEffect(() => {
    fetchApi(url).then((data) => {
      //loc cac bo phim khong co hinh anh
      const fliteredData = data.results.filter(
        (movie) => movie.back_drop_path || movie.poster_path
      );
      setMovies(fliteredData);
    });
  }, [url]);
  return (
    <div className={style.container}>
      {title && <h1 className={style.title}>{title}</h1>}
      <div className={style.movie_list}>
        {movies?.map((movie) => (
          <MovieItem
            key={movie.id}
            title={title}
            movie={movie}
            onSelectedMovide={handleClickMovie}
          />
        ))}
      </div>
      {isShow && (
        <MovieDetail
          id={selectedMovie.id}
          name={selectedMovie.name}
          release={selectedMovie.release}
          vote={selectedMovie.vote}
          overview={selectedMovie.overview}
          img={selectedMovie.img}
        />
      )}
    </div>
  );
}
export default MovieList;
