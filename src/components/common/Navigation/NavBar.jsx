import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <HomeIcon className="home-icon" width={24} height={24} />
      </NavLink>

      <button
        className="hamburger-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <XMarkIcon className="menu-icon" width={24} height={24} />
        ) : (
          <Bars3Icon className="menu-icon" width={24} height={24} />
        )}
      </button>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/SpaceNewsPage">Space News</NavLink>
          </li>
          <li>
            <NavLink to="/NasaImagePage">NASA Images</NavLink>
          </li>
          <li>
            <NavLink to="/SolarSystemPage">Solar System</NavLink>
          </li>
          <li>
            <NavLink to="/ISSPage">Int'l Space Station</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
