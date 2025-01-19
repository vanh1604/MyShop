// src/components/Header.js
import React from "react";

import { Link } from "react-router-dom";
import { lineWidth } from "./../../node_modules/tailwindcss/src/util/dataTypes";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl">My Website</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
