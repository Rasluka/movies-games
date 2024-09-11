"use client";
import React, { useState } from "react";

interface ISearchInputProps {
  onSubmit: (input: string) => void;
}

function SearchBar({ onSubmit }: ISearchInputProps) {
  const [searchInput, setSearchInput] = useState("");

  const localSubmit = () => {
    onSubmit(searchInput);
  };

  return (
    <div className="flex justify-center mt-10">
      <input
        className="input-block input w-1/3"
        placeholder="Search a movie"
        value={searchInput}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
      />

      <button onClick={localSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
