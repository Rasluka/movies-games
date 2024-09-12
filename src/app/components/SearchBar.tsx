"use client";
import React, { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form
      action="/search"
      className="relative mb-4 mt-5 lg:mt-10 lg:w-3/6 lg:mx-auto"
    >
      <div className="flex rounded-lg shadow-sm">
        <input
          type="text"
          placeholder="Search a movie"
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          className="py-3 px-4 block w-full rounded-s-lg text-sm focus:z-10 bg-white dark:bg-slate-900 bg-opacity-90 focus:border-blue-900 focus:ring-blue-900 dark:focus:border-blue-500 focus:ring dark:focus:ring-blue-200 focus:outline-none"
        />
        <button
          type="submit"
          className="w-[2.875rem] h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
