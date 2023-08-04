import React from "react";

export default function Header({
  poster,
  title,
  released,
  runtime,
  genre,
  imdbRating,
}) {
  return (
    <div className="header">
      <img src={poster} alt={title} />
      <div className="desc">
        <h1>{title}</h1>
        <span>
          {released} &bull; {runtime}
        </span>
        <p>{genre}</p>
        <p>
          <span>⭐</span> {imdbRating} IMDB rating
        </p>
      </div>
    </div>
  );
}
