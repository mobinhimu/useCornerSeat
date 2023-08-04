import React, { useState, useEffect, useRef } from "react";
import { Container } from "./components/Container";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Logo from "./components/Logo";
import FoundMovie from "./components/FoundMovie";
import WatchMovies from "./components/WatchMovies";
import MovieDetails from "./components/MovieDetails";
import SearchMovie from "./components/SearchMovie";
import WatchSummary from "./components/WatchSummary";
import WatchMovie from "./components/WatchMovie";
import Loading from "./components/Loading";
import Error from "./components/Error";
import useMovieFetch from "./hooks/useMovieFetch";

export const KEY = "c34c67dd";

function App() {
  const [search, setSearch] = useState("");
  const [watched, setWatched] = useState(() => {
    const watchedMovie = localStorage.getItem("watched");

    return watchedMovie ? JSON.parse(watchedMovie) : [];
  });
  const [movieID, setMovieID] = useState("");
  const watchedMovie = useRef("");

  const { error, loading, value: searchMovies } = useMovieFetch(search);

  // event Handler
  function handleSearch(value) {
    setSearch(value);
  }

  function handleMovieID(id) {
    setMovieID(id);
  }

  function handleMovieDetails() {
    setMovieID(null);
  }

  function handleWatchedMovie(movie) {
    setWatched([...watched, movie]);
    watchedMovie.current.classList.remove("zIndexClass");
  }

  function handleDeleteMovie(id) {
    setWatched(watched.filter((wat) => wat.imdbID !== id));
  }

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <Nav>
        <Logo />
        <Search search={search} onSearch={handleSearch} />
        <FoundMovie result={searchMovies.length} />
      </Nav>

      <Container>
        {loading && <Loading />}
        {!loading && !error && searchMovies && (
          <SearchMovie
            searchResult={searchMovies}
            onMovieID={handleMovieID}
            movieID={movieID}
            ref={watchedMovie}
          />
        )}
        {error && <Error error={error} />}

        {movieID ? (
          <MovieDetails
            onMovieID={handleMovieID}
            movieID={movieID}
            onMovieDetails={handleMovieDetails}
            onWatchedMovie={handleWatchedMovie}
            watched={watched}
          />
        ) : (
          <WatchMovies>
            <WatchSummary watched={watched} />
            <WatchMovie watched={watched} onDeleteMovie={handleDeleteMovie} />
          </WatchMovies>
        )}
      </Container>
    </>
  );
}

export default App;
