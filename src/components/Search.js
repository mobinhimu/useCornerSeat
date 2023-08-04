import React from "react";

export default function Search({ search, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Movies....."
      value={search}
      onChange={(eve) => onSearch(eve.target.value)}
    />
  );
}
