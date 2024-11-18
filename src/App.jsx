import React from "react";
import "./App.css";
import { createStars } from "./utils/mainBackground.mjs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/Landing/LandingPage";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
