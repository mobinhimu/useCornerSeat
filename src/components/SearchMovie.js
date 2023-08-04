import React from "react";
import Movie from "./Movie";

function SearchMovie({ searchResult, onMovieID }, ref) {
  return (
    <ul
      ref={ref}
      className={`search-result ${searchResult.length ? "zIndexClass" : ""}`}
    >
      {/* <button className="btn container-btn">&minus;</button> */}
      <Movie searchResult={searchResult} onMovieID={onMovieID} />
    </ul>
  );
}

export default React.forwardRef(SearchMovie);
