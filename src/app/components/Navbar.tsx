import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="navbar navbar-glass dark:lg:w-3/6 dark:lg:mx-auto bg-blue-800 dark:bg-transparent">
      <div className="navbar-start">
        <Link
          className="navbar-item flex justify-center items-center hover:opacity-90"
          href="/"
        >
          <Image src="/images/logo.png" width="40" height="40" alt="app-logo" />
          <p className="dark:bg-gradient-to-r dark:from-blue-600 dark:via-blue-800 dark:to-blue-400 dark:bg-clip-text dark:text-transparent text-white font-bold">
            PureCinema!
          </p>
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item text-white" href="movies">
          Movies
        </Link>
        <Link className="navbar-item text-white" href="games">
          Games
        </Link>
        <Link className="navbar-item text-white" href="about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
