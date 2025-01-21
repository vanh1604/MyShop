// src/components/Header.js
import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

import instance from "../axios";

const Header = () => {
  const navigate = useNavigate();
  const [checkuser, setCheckUser] = useState(null);
  const user = JSON.parse(localStorage.getItem("token"))?.user;

  const Logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };
  useEffect(() => {
    (async () => {
      const res = await instance.get("users");
      setCheckUser(res.data);
    })();
  }, []);
  const check = checkuser?.find((item) => item.id === user?.id);

  return (
    <header className="flex justify-between items-center p-4 bg-slate-500">
      <h1 className="text-3xl">My Shop</h1>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>

          {user ? (
            <li className="flex gap-6 items-center">
              {check ? (
                <div className="flex items-center gap-4">
                  <img src={avatar} className="w-10 h-10 rounded-full" />
                  <h2 className="text-xl">{user.email}</h2>
                </div>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  Logout();
                }}
                className="btn border border-blue-400 bg-slate-400 text-orange-700"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="flex gap-4 items-center">
              <Link to="/login">Login</Link>
              <Link to="/register">
                <button className="btn border border-blue-400 bg-slate-400 text-orange-700">
                  Register
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
