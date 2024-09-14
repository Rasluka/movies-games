"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:px-2 lg:py-2 lg:w-1/2 lg:mx-auto bg-blue-950 dark:bg-transparent">
      <div className="flex items-center px-4 py-3 justify-between lg:p-0">
        <Link
          className="flex justify-center items-center hover:opacity-90"
          href="/"
        >
          <Image src="/images/logo.png" width="40" height="40" alt="app-logo" />
          <p className="dark:bg-gradient-to-r dark:from-blue-600 dark:via-red-800 dark:to-blue-400 dark:bg-clip-text dark:text-transparent text-white font-bold">
            PureCinema!
          </p>
        </Link>

        <div className="lg:hidden me-2">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>
      </div>

      <div className={`px-2 pt-2 pb-2 ${isOpen ? "block" : "hidden"} lg:flex`}>
        <Link
          className="block text-white rounded dark:hover:bg-slate-900 hover:opacity-90 lg:mx-2 px-2 navbar-item"
          href="/movies"
        >
          Movies
        </Link>
        <Link
          className="block text-white rounded dark:hover:bg-slate-900 hover:opacity-90 lg:mx-2 px-2 navbar-item"
          href="/series"
        >
          TV Series
        </Link>
        <Link
          className="block text-white rounded dark:hover:bg-slate-900 hover:opacity-90 lg:mx-2 px-2 navbar-item"
          href="/people"
        >
          People
        </Link>
        <Link
          className="block text-white rounded dark:hover:bg-slate-900 hover:opacity-90 lg:mx-2 px-2 navbar-item"
          href="/games"
        >
          Games
        </Link>
        <Link
          className="block text-white rounded dark:hover:bg-slate-900 hover:bg--red-bg-red-400 lg:mx-2 px-2 navbar-item"
          href="/about"
        >
          About
        </Link>
        <div className="text-white navbar-item hidden lg:block">|</div>
        <div className="navbar-item hidden lg:block">
          <a
            href="https://github.com/Rasluka/movies-games"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repo"
          >
            <GitHubIcon className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
