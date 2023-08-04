import React from "react";

export default function WatchButtons({ onMovieDetails }) {
  return (
    <div className="watch-buttons">
      <button className="back" onClick={onMovieDetails}>
        {" "}
        &larr;
      </button>
      {/* <button className="btn watch-btn">&minus;</button> */}
    </div>
  );
}
