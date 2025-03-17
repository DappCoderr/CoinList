// import { useContext } from "react";
// import { CurrencyContext } from "../context/CurrencyContext";
import { useNavigate } from "react-router-dom";
import currencyStore from "../store/currencyStore";

const Navbar = () => {
  const { setCurrency } = currencyStore();

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-blue-600/20 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center flex-1">
            {/* Mobile Menu */}
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost hover:bg-gray-800/50 rounded-xl p-2 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-300"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-gray-900/95 rounded-2xl w-56 border border-gray-800 backdrop-blur-xl"
              >
                <li>
                  <a
                    className="hover:bg-blue-900/20 text-gray-300 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                    onClick={() => setCurrency("usd")}
                  >
                    $ USD
                  </a>
                </li>
                <li>
                  <a
                    className="hover:bg-blue-900/20 text-gray-300 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                    onClick={() => setCurrency("inr")}
                  >
                    ₹ INR
                  </a>
                </li>
              </ul>
            </div>

            {/* Brand Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-mono text-sm">CT</span>
              </div>
              <span
                onClick={goToHome}
                className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
              >
                CoinTracker
              </span>
            </div>
          </div>

          {/* Center Search (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search coins..."
                className="w-full pl-12 pr-6 py-2.5 rounded-full bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-4 top-3 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end flex-1 space-x-3">
            {/* Mobile Search */}
            <button className="lg:hidden btn btn-ghost hover:bg-gray-800/50 rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Notification */}
            <button className="btn btn-ghost hover:bg-gray-800/50 rounded-xl p-2 relative">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-300"
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
                <span className="badge badge-xs badge-primary indicator-item animate-pulse"></span>
              </div>
            </button>

            {/* Profile */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost avatar hover:ring-2 hover:ring-blue-500/50 rounded-full p-0.5 transition-all duration-300"
              >
                <div className="w-9 rounded-full ring-2 ring-gray-700 hover:ring-blue-500 transition-all duration-300">
                  <img
                    src="https://placehold.co/100x100"
                    alt="Profile"
                    className="hover:opacity-80 transition duration-300"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-gray-900/95 rounded-2xl w-56 border border-gray-800 backdrop-blur-xl"
              >
                <li>
                  <a className="hover:bg-blue-900/20 text-gray-300 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Profile
                  </a>
                </li>
                <li>
                  <a className="hover:bg-blue-900/20 text-gray-300 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </a>
                </li>
                <li>
                  <a className="hover:bg-red-900/20 text-red-400 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
