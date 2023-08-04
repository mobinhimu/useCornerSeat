import React, { useState } from "react";

const ratingContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

const Rating = ({
  height = 16,
  countRating = 5,
  stroke = "#FCC419",
  fill = "#FCC419",
  message = [],
  onMovieRating,
}) => {
  const [activeFill, setActiveFill] = useState(0);
  const [hoverFill, setHoverFill] = useState(0);

  function handleFill(count) {
    setActiveFill(count);
    onMovieRating(count);
  }
  function hoverMouse() {
    setHoverFill(0);
  }

  return (
    <div
      style={{
        display: "flex",
        height: "40px",
        alignItems: "center",
      }}
    >
      <div style={ratingContainer}>
        {Array.from({ length: (0, countRating) }, (_, i) => (
          <Star
            key={i + 1}
            count={i + 1}
            onFill={handleFill}
            onHoverFill={setHoverFill}
            onMouseOut={hoverMouse}
            rating={hoverFill ? hoverFill >= i + 1 : activeFill >= i + 1}
            height={height}
            stroke={stroke}
            fill={fill}
          />
        ))}
      </div>

      <p
        style={{
          color: `${fill}`,
          fontWeight: "bold",
          fontSize: `${height}px`,
          marginLeft: "14px",
        }}
      >
        {countRating === message.length
          ? message[hoverFill ? hoverFill - 1 : activeFill - 1]
          : hoverFill || activeFill || ""}
      </p>
    </div>
  );
};

function Star({
  count,
  onFill,
  onHoverFill,
  onMouseOut,
  rating,
  height,
  stroke,
  fill,
}) {
  return (
    <svg
      style={{
        height: `${height}px`,
        stroke: `${stroke}`,
        cursor: "pointer",
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill={rating ? fill : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      onClick={() => onFill(count)}
      onMouseOver={() => onHoverFill(count)}
      onMouseOut={() => onMouseOut(count)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

export default Rating;
