import React from "react";

export default function WatchSummary({ watched }) {
  const movies = watched?.length;
  const avgIMDBRating =
    watched.reduce((acc, mov) => acc + mov.imdbRating, 0) / movies;
  const avgUserRating =
    watched.reduce((acc, mov) => acc + mov.userRating, 0) / movies;
  const avgRuntime =
    watched.reduce((acc, mov) => acc + mov.runtime, 0) / movies;

  return (
    <li className="movie watched-summary">
      <h3>Watched Summary</h3>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{movies} Movies</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{avgIMDBRating ? Math.round(avgIMDBRating) : 0}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating ? Math.round(avgUserRating) : 0}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime ? Math.round(avgRuntime) : 0} min</span>
        </p>
      </div>
    </li>
  );
}
