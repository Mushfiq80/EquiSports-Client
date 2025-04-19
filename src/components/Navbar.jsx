import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";

// const Navbar ( isAuthenticated ) => {
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-equipment">All Sports Equipment</Link>
            </li>
            {/* {isAuthenticated && ( */}
            {
              <>
                <li>
                  <Link to="/add-equipment">Add Equipment</Link>
                </li>
                <li>
                  <Link to="/my-equipment">My Equipment List</Link>
                </li>
              </>
            }
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <Dumbbell className="h-6 w-6" />
          <span className="font-bold">EquiSports</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-equipment">All Sports Equipment</Link>
          </li>
          {/* {isAuthenticated && ( */}
          {
            <>
              <li>
                <Link to="/add-equipment">Add Equipment</Link>
              </li>
              <li>
                <Link to="/my-equipment">My Equipment List</Link>
              </li>
            </>
          }
        </ul>
      </div>
      <div className="navbar-end">
        {/* {!isAuthenticated ? ( */}
        {
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-ghost">
              Register
            </Link>
            <button className="btn btn-ghost">Logout</button>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
