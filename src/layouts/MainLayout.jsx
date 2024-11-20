import React from "react";
import "./MainLayout.css";
import LandingPage from "../pages/Landing/LandingPage";
import SpaceNewsPage from "../pages/SpaceNews/SpaceNewsPage";
import SolarSystemPage from "../pages/SolarSystem/SolarSystemPage";
import ISSPage from "../pages/ISS/ISSPage";
import NasaImagePage from "../pages/NasaImage/NasaImagePage";
const MainLayout = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};

export default MainLayout;
