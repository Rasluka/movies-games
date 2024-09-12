"use client";
import React, { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form action="/search" className="flex justify-center mt-10">
      <input
        className="input-block input w-1/3"
        placeholder="Search a movie"
        value={searchInput}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
      />

      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
