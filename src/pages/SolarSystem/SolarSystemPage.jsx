import React from "react";
import "./SolarSystemPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import MainViewer from "../../components/common/MainViewer/MainViewer";
import Hero from "../../components/common/Hero/Hero";
import solsysImage from "/assets/images/solSysImage.jpg";
import Footer from "../../components/common/Footer/Footer";

const SolarSystemPage = () => {
  const iframeSrc = "https://www.solarsystemscope.com/iframe/";

  const heroContent = {
    title: "Our Solar System",
    subtitle: "Explore the solar system in 3D",
    backgroundImage: solsysImage,
  };

  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  return (
    <div className="solar-system-page">
      <Header />
      <NavBar />
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        backgroundImage={heroContent.backgroundImage}
      />
      <MainViewer>
        <div className="iframe-wrapper">
          {isMobileDevice() ? (
            <p>Please view in desktop mode.</p>
          ) : (
            <iframe className="solsysframe" src={iframeSrc}></iframe>
          )}
        </div>
      </MainViewer>
      <Footer />
    </div>
  );
};

export default SolarSystemPage;
// *****************************************************************//

// *****************************************************************//

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
