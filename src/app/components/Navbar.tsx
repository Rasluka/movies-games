import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="navbar navbar-glass lg:w-3/6 lg:mx-auto">
      <div className="navbar-start">
        <Link
          className="navbar-item flex justify-center items-center hover:opacity-90"
          href="/"
        >
          <Image src="/images/logo.png" width="40" height="40" alt="app-logo" />
          <p className="bg-gradient-to-r from-blue-600 via-blue-800 to-blue-400 bg-clip-text text-transparent font-bold">
            PureCinema!
          </p>
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
