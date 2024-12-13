import React, { useEffect, useRef } from "react";
import "./Header.css";
// IMPORTANT: Using the minified production build resolves Lit warnings
// This version is optimized and doesn't show development mode warnings
import "@google/model-viewer/dist/model-viewer.min.js";

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
        shadow-intensity="0"
        exposure="1.5"
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
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  return (
    <header className="header">
      {isMobileDevice() ? (
        <h1 className="mobile-header">The Space Place</h1>
      ) : (
        <h1 className="normal-header">The Space Place</h1>
      )}

      <RotatingMoon />
    </header>
  );
};

export default Header;

/*********************************************************
 *  ███████╗██████╗  █████╗  ██████╗███████╗    ██████╗ ██╗      █████╗  ██████╗███████╗
 *  ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝    ██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
 *  ███████╗██████╔╝███████║██║     █████╗      ██████╔╝██║     ███████║██║     █████╗
 *  ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝      ██╔═══╝ ██║     ██╔══██║██║     ██╔══╝
 *  ███████║██║     ██║  ██║╚██████╗███████╗    ██║     ███████╗██║  ██║╚██████╗███████╗
 *  ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝
 * ┌───────────────────────────────────────────────────────────────────────────────────┐
 * │     Created by: Shawn M. Tapps                                                    │
 * │     Created on: 2024-12-13 @ 17:35 GMT                                             │
 * │     Language: JSX                                                                 │
 * └───────────────────────────────────────────────────────────────────────────────────┘
 *    ███████╗███╗   ███╗████████╗
 *    ██╔════╝████╗ ████║╚══██╔══╝
 *    ███████╗██╔████╔██║   ██║
 *    ╚════██║██║╚██╔╝██║   ██║
 *    ███████║██║ ╚═╝ ██║   ██║
 *    ╚══════╝╚═╝     ╚═╝   ╚═╝
 *
 * MIT License
 *
 * Copyright (c) 2024 Shawn M. Tapps
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *********************************************************/
