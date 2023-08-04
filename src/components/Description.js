import React from "react";

export default function Description({ actors, plot, director }) {
  return (
    <>
      <p className="description">{plot}</p>

      <p className="actors">
        <strong>Starring :</strong> {actors}
      </p>

      <p className="director">
        <strong>Directed By :</strong> {director}
      </p>
    </>
  );
}
