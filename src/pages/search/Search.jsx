import React, { useState, useRef } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import SearchForm from "./SearchForm";
import MovieItem from "../browse/MovieItem";
import MovieDetail from "../browse/MovieDetail";

import style from "./Search.module.css";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchMovie, setSearchMovie] = useState();
  const [isShow, setIsShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const prevSeelectedMovie = useRef(selectedMovie);
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
    if (prevSeelectedMovie?.id !== selectedMovie.id) {
      setIsShow(true);
      setSelectedMovie(selectedMovie);
    }
  };
  const handleClearForm = function (input) {
    setInputSearch(input);
    setIsShow(false);
  };
  //tim kiem phim khi nhan vao nut search
  const handleSubmit = function (e) {
    e.preventDefault();
    if (inputSearch.length === 0) {
      alert("Please type the input");
      return;
    } else {
      setIsShow(false);

      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${inputSearch}&include_adult=true&api_key=bbdd3c2a0486dda851d6fe44eebcaf6f&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          //loc cac bo phim khong co hinh anh
          const fliteredData = data.results.filter(
            (movie) => movie.back_drop_path || movie.poster_path
          );
          setSearchMovie(fliteredData);
        });
    }
  };
  return (
    <div>
      <NavBar />
      <SearchForm
        userInput={inputSearch}
        onChange={setInputSearch}
        onSubmit={handleSubmit}
        onClear={handleClearForm}
      />
      <h1 className={style.title}>Search results</h1>
      <div className={style.container}>
        {isShow && (
          <MovieDetail
            id={selectedMovie.id}
            name={selectedMovie.name}
            release={selectedMovie.release}
            vote={selectedMovie.vote}
            overview={selectedMovie.overview}
            img={selectedMovie.img}
            isShow={isShow}
          />
        )}
      </div>
      <div className={style.container}>
        {searchMovie?.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onSelectedMovide={handleClickMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
