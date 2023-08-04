import React from "react";

function WatchMovies({ children }) {
  return (
    <div className={`watched-movie`}>
      <ul className="watched">{children}</ul>
    </div>
  );
}

export default WatchMovies;
