import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Header = () => {
  const navLinks = [
    <>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>,
  ];
  return (
    <div className="navbar bg-transparent absolute top-0 left-0 text-white">
      <div className="navbar max-w-6xl mx-auto px-3 md:px-5">
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
              {navLinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="logo" className="w-20" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden md:flex">
            <div className="form-control relative">
              <label for="search" className="absolute top-4 left-3">
                <FaSearch />
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search your Destination..."
                className="input input-bordered border-white bg-[#FFFFFF33] w-24 md:w-auto pl-10 hidden lg:flex"
              />
            </div>
            <ul className="menu menu-horizontal px-1 ml-8">{navLinks}</ul>
          </div>
          <Link to="/login" className="btn bg-[#F9A51A] px-8 border-none">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
