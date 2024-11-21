import React, { useEffect, useRef } from "react";
import "./Header.css";
// IMPORTANT: Using the minified production build resolves Lit warnings
// This version is optimized and doesn't show development mode warnings
import "@google/model-viewer/dist/model-viewer.min.js";

/*
KEY LEARNINGS:
1. Model Viewer Import:
   - Use .min.js version for production-ready build
   - Removes development warnings
   - Maintains all functionality
   - More performant than the development build

2. What We Kept:
   - All existing functionality
   - Clean event handling
   - Proper ref management
   - Camera positioning
   - All model-viewer attributes

3. Why This Works:
   - Minified version has development checks disabled
   - Still includes all necessary features
   - Better optimized for production use
*/

// Separate component for the rotating moon with proper update handling
function RotatingMoon() {
  const modelRef = useRef(null);

  useEffect(() => {
    if (modelRef.current) {
      // Initialize model-viewer settings once after mount
      const viewer = modelRef.current;
      viewer.addEventListener("load", () => {
        // Set initial camera position after model loads
        viewer.cameraOrbit = "0deg 75deg 150%";
      });
    }
  }, []);

  return (
    <div className="moon-container">
      <model-viewer
        ref={modelRef}
        src="/assets/models/moon.glb"
        alt="3D Rotating Moon"
        auto-rotate
        rotation-per-second="10deg"
        shadow-intensity="1"
        exposure="2"
        camera-controls
        disable-zoom
        disable-pan
        interaction-prompt="none"
        className="rotating-moon"
        bounds="tight"
        min-camera-orbit="auto auto 5%"
        max-camera-orbit="auto auto 100%"
      >
        <div slot="poster">Loading 3D Moon...</div>
      </model-viewer>
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
