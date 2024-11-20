import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <HomeIcon className="home-icon" width={24} height={24} />
      </NavLink>
      <div className="nav-links">
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
