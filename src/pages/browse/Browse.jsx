import React from "react";
import Banner from "./Banner";
import NavBar from "../../Components/NavBar/NavBar";
import MovieList from "./MovieList";
import { requests } from "../../Components/api/requests";

function Browse() {
  return (
    <div>
      <Banner />
      <NavBar />
      <MovieList url={requests.fetchNetflixOriginals} />
      <MovieList title="Xu hướng" url={requests.fetchTrending} />
      <MovieList title="Xếp hạng cao" url={requests.fetchTopRated} />
      <MovieList title="Hành động" url={requests.fetchActionMovies} />
      <MovieList title="Hài" url={requests.fetchComedyMovies} />
      <MovieList title="Kinh dị" url={requests.fetchHorrorMovies} />
      <MovieList title="Lãng mạng" url={requests.fetchRomanceMovies} />
      <MovieList title="Tài liệu" url={requests.fetchDocumentaries} />
    </div>
  );
}

export default Browse;
