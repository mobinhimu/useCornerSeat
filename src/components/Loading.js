import React from "react";

function Loading({ movieID }) {
  return (
    <h3 className={`message ${movieID ? "message-right" : ""}`}>
      Loading......
    </h3>
  );
}

export default Loading;
