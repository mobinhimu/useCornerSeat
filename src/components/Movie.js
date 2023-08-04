import React from "react";

export default function Movie({ searchResult, onMovieID }) {
  return searchResult.map(
    ({ Title: title, Year: year, Poster: poster, imdbID }) => (
      <li className="movie" key={imdbID} onClick={() => onMovieID(imdbID)}>
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <div>
          <p>
            <span>📅</span>
            <span>{year}</span>
          </p>
        </div>
      </li>
    )
  );
}
