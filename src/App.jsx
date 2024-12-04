import React from "react";
import "./App.css";
import {
  BrowserRouter as Router, // Provides routing context for the app
  Routes, // Container for route definitions
  Route, // Individual route component
  Navigate, // Used for redirections
  Outlet, // Used for nested routes (future use)
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/Landing/LandingPage";
import SpaceNewsPage from "./pages/SpaceNews/SpaceNewsPage";
import NasaImagePage from "./pages/NasaImage/NasaImagePage";
import SolarSystemPage from "./pages/SolarSystem/SolarSystemPage";
import ISSPage from "./pages/ISS/ISSPage";
import { createStars } from "./utils/mainBackground.mjs";

/*
Router v7 Future Flags Explained:
v7_startTransition: Improves performance during route changes
v7_relativeSplatPath: Updates path resolution for nested routes
v7_fetcherPersist: Maintains data when navigating between routes
v7_normalizeFormMethod: Standardizes form handling across the app
*/

function App() {
  return (
    <Router
      future={{
        // These flags prepare the app for React Router v7
        v7_startTransition: true, // Uses React 18's concurrent features
        v7_relativeSplatPath: true, // New path resolution behavior
        v7_fetcherPersist: true, // Better data fetching persistence
        v7_normalizeFormMethod: true, // Standardized form handling
      }}
    >
      <MainLayout>
        <Routes>
          {/* 
            Current routing structure:
            - Simple, flat routing (no nesting)
            - Clear, descriptive paths
            - Includes 404 handling
          */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/SpaceNewsPage" element={<SpaceNewsPage />} />
          <Route path="/NasaImagePage" element={<NasaImagePage />} />
          <Route path="/SolarSystemPage" element={<SolarSystemPage />} />
          <Route path="/ISSPage" element={<ISSPage />} />
          {/* Catch-all route - redirects to home if no match found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

/*
CURRENT WORKING FEATURES:
1. Routing
   - All routes are accessible
   - Navigation works correctly
   - 404 handling redirects to home

2. Layout
   - MainLayout wrapper provides consistent structure
   - Background stars animation working

3. Future-Proofing
   - v7 flags implemented
   - Ready for future routing updates

NEXT POSSIBLE IMPROVEMENTS (When Needed):
1. Error Boundaries
   - Add React error boundaries for better error handling
   - Implement fallback UI for route errors

2. URL Standardization (Optional)
   - Current: /SpaceNewsPage
   - Possible: /space-news
   - Note: Would require updating all navigation links

3. Nested Routes (Optional)
   - Current: Flat structure
   - Possible: /space/news, /space/nasa, etc.
   - Note: Would require component restructuring

4. Code Splitting (Future)
   - Implement lazy loading for routes
   - Improve initial load performance

Remember: Current setup is working well - any changes should be
carefully considered and tested thoroughly before implementation.

COMPONENT STRUCTURE:
<Router>                    // Provides routing functionality
  <MainLayout>             // Consistent layout wrapper
    <Routes>               // Groups route definitions
      <Route />           // Individual route definitions
    </Routes>
  </MainLayout>
</Router>

ROUTING BEHAVIOR:
- Direct path matching
- Automatic 404 handling with redirect
- Maintains background animations
- Preserves state during navigation
*/

export default App;

/*********************************************************
 *  ███████╗██████╗  █████╗  ██████╗███████╗    ██████╗ ██╗      █████╗  ██████╗███████╗
 *  ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝    ██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
 *  ███████╗██████╔╝███████║██║     █████╗      ██████╔╝██║     ███████║██║     █████╗
 *  ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝      ██╔═══╝ ██║     ██╔══██║██║     ██╔══╝
 *  ███████║██║     ██║  ██║╚██████╗███████╗    ██║     ███████╗██║  ██║╚██████╗███████╗
 *  ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝
 * ┌───────────────────────────────────────────────────────────────────────────────────┐
 * │     Created by: Shawn M. Tapps                                                    │
 * │     Created on: 2024-03-20 @ 14:35 GMT                                            │
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
