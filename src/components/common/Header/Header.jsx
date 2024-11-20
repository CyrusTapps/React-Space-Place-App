import React, { useEffect, useRef } from "react";
import "./Header.css";
import "@google/model-viewer";

function RotatingMoon() {
  return (
    <div className="moon-container">
      <model-viewer
        src="/assets/models/moon.glb"
        alt="3D Rotating Moon"
        auto-rotate
        rotation-per-second="10deg"
        shadow-intensity="0"
        camera-controls
        interaction-prompt="none"
        className="rotating-moon"
        bounds="tight"
        min-camera-orbit="auto auto 5%"
        max-camera-orbit="auto auto 100%"
        camera-orbit="0deg 75deg 150%"
      />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>The Space Place</h1>
      <RotatingMoon />
    </header>
  );
};

export default Header;
