import React from "react";
import deleteButton from "../assets/delete.svg";

export default function WatchMovie({ watched, onDeleteMovie }) {
  return watched?.map(
    ({ poster, title, imdbRating, userRating, runtime, imdbID }) => (
      <li className="movie " key={imdbID}>
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <div>
          <p className="first-item">
            <span>⭐</span>
            <span>{imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{runtime} min</span>
          </p>

          <img
            onClick={() => onDeleteMovie(imdbID)}
            className="delete"
            alt="For Deleting Movie"
            src={deleteButton}
          ></img>
        </div>
      </li>
    )
  );
}
