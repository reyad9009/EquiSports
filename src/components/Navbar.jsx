import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2196f3] text-lg text-white font-bold md:px-5 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
              : "bg-white text-lg font-bold md:px-5 btn rounded-full hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2196f3] text-lg text-white font-bold md:px-5 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
              : "bg-white text-lg font-bold md:px-5 btn rounded-full hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2196f3] lg:text-lg text-white font-bold md:px-5 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
              : "bg-white text-lg font-bold md:px-5 btn rounded-full hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
          }
        >
          FAQ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mt-5 font-poppins">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow flex gap-5"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <a className="lg:btn lg:btn-ghost lg:text-[#2196f3] lg:text-3xl text-xl font-bold text-[#2196f3]">
              EquiSports
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-3 text-lg font-extrabold">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="md:pr-5 pr-4">
            {user && user?.email ? (
              <div>
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  className="lg:w-12 lg:h-12 w-10 h-[10]  border-[#2196f3] border-2 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <Tooltip id="my-tooltip"></Tooltip>
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>

          <div className="">
            {user && user?.email ? (
              <button
                onClick={logOut}
                className="bg-[#2196f3] lg:px-8 lg:py-3 px-2 py-2 lg:text-xl text-sm font-semibold rounded-full text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="bg-[#2196f3] lg:px-8 lg:py-3 px-2 py-2 lg:text-xl font-semibold rounded-full text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
