import React from "react";
import "./App.css";
import { createStars } from "./utils/mainBackground.mjs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/Landing/LandingPage";
import SpaceNewsPage from "./pages/SpaceNews/SpaceNewsPage";
import NasaImagePage from "./pages/NasaImage/NasaImagePage";
import SolarSystemPage from "./pages/SolarSystem/SolarSystemPage";
import ISSPage from "./pages/ISS/ISSPage";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SpaceNewsPage" element={<SpaceNewsPage />} />
            <Route path="/NasaImagePage" element={<NasaImagePage />} />
            <Route path="/SolarSystemPage" element={<SolarSystemPage />} />
            <Route path="/ISSPage" element={<ISSPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
