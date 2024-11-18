import React from "react";
import "./MainLayout.css";
import LandingPage from "../pages/Landing/LandingPage";
import NavBar from "../components/common/Navigation/NavBar";
import Footer from "../components/common/Footer/Footer";

const MainLayout = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};

export default MainLayout;
