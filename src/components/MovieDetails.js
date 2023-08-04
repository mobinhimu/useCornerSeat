import React, { useEffect, useState } from "react";
import WatchButtons from "./WatchButtons";
import Header from "./Header";
import Rating from "./Rating";
import Description from "./Description";
import { KEY } from "../App";
import Loading from "./Loading";
import UserRating from "../UserRating";

export default function MovieDetails({
  movieID,
  onMovieDetails,
  onWatchedMovie,
  onMovieID,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?i=${movieID}&apikey=${KEY}`
        );
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");

        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [movieID, error]);

  const {
    Actors: actors,
    Poster: poster,
    Title: title,
    imdbRating,
    Plot: plot,
    Runtime: runtime,
    Director: director,
    Genre: genre,
    Released: released,
    imdbID,
  } = movie;

  const watchedMovie = {
    poster,
    title,
    imdbRating: +imdbRating ? +imdbRating : 0,
    userRating,
    runtime: +runtime?.split(" ")[0] ? +runtime?.split(" ")[0] : 0,
    imdbID,
  };

  const isWatched = watched.map((wat) => wat.imdbID).includes(movieID);
  const watchedUserRating = watched.find(
    (wat) => wat.imdbID === movieID
  )?.userRating;
  console.log(watchedUserRating);

  return !loading ? (
    <div className={`movie-details ${imdbRating ? "zIndexClass" : ""}`}>
      <WatchButtons onMovieDetails={onMovieDetails} />
      <Header
        poster={poster}
        title={title}
        released={released}
        runtime={runtime}
        genre={genre}
        imdbRating={imdbRating}
      />
      <Rating
        isWatched={isWatched}
        onWatchedMovie={onWatchedMovie}
        watchedMovie={watchedMovie}
        onMovieID={onMovieID}
        userRating={userRating}
        watchedUserRating={watchedUserRating}
      >
        <UserRating
          onMovieRating={setUserRating}
          countRating={10}
          height={18}
        />
      </Rating>
      <Description actors={actors} plot={plot} director={director} />
    </div>
  ) : (
    <Loading movieID={movieID} />
  );
}
