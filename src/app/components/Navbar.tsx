import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar w-3/6 mx-auto bg-inherit shadow-none font-black">
      <div className="navbar-start">
        <Link className="navbar-item" href="/">
          MoviesApp
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" href="movies">
          Movies
        </Link>
        <Link className="navbar-item" href="games">
          Games
        </Link>
        <Link className="navbar-item" href="about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
