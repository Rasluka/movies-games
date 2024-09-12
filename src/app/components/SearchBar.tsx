"use client";
import React, { useState } from "react";
import Link from "next/link";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex justify-center mt-10">
      <input
        className="input-block input w-1/3"
        placeholder="Search a movie"
        value={searchInput}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
      />

      <Link href={`search?${searchInput}`} className="btn btn-primary">
        Search
      </Link>
    </div>
  );
}

export default SearchBar;
