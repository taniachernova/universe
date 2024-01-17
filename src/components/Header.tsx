"use client";

import Head from "next/head";
import { useState } from "react";

const categories = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
];

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const visibleCategories = navbar ? categories : categories.slice(0, 8);

  return (
    <div>
      <Head>
        <title>Header</title>
        <meta name="robot" content="index" />
      </Head>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 relative z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              İstanbul Eskort, İstanbul Escort, Eskort İstanbul, Escort İstanbul
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={navbar}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full absolute top-16 left-0 overflow-y-auto ${
              navbar ? "block" : "hidden"
            }`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 max-h-60 overflow-y-auto ">
              {visibleCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.link}
                    className="block py-2 px-3 text-black rounded"
                    aria-current="page"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
