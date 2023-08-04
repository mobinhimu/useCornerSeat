import React from "react";

export default function Rating({
  watchedMovie,
  children,
  onWatchedMovie,
  onMovieID,
  userRating,
  isWatched,
  watchedUserRating,
}) {
  return (
    <div className="rating">
      {!isWatched ? (
        <>
          {children}
          {userRating ? (
            <button
              onClick={() => {
                onWatchedMovie(watchedMovie);
                onMovieID(null);
              }}
              className="add-review"
            >
              &#43; Add To List
            </button>
          ) : (
            ""
          )}
        </>
      ) : (
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "600",
            letterSpacing: "1.4px",
          }}
        >
          {" "}
          You rated with movie {watchedUserRating} <span>⭐</span>{" "}
        </p>
      )}
    </div>
  );
}
