import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown Menu for Mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                Homepage
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Center - Brand Name */}
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl font-bold text-blue-600 hover:text-blue-700 transition duration-300">
          CoinTracker
        </a>
      </div>

      {/* Navbar End - Icons and Search */}
      <div className="navbar-end">
        {/* Search Bar */}
        <div className="form-control hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Notification Icon */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* Profile Icon */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://placehold.co/100x100"
                alt="Profile"
                className="hover:opacity-80 transition duration-300"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                Profile
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                Settings
              </a>
            </li>
            <li>
              <a className="hover:bg-blue-100 hover:text-blue-600 transition duration-300">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
