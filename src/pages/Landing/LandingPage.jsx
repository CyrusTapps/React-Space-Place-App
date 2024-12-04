import React from "react";
import "./LandingPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import Hero from "../../components/common/Hero/Hero";
import MainViewer from "../../components/common/MainViewer/MainViewer";
import Footer from "../../components/common/Footer/Footer";
import NavCard from "../../components/common/Card/NavCard";
import newsImage from "/assets/images/newsImage.jpg";
import nasaImage from "/assets/images/nasaImage.jpg";
import solSysImage from "/assets/images/solSysImage.jpg";
import issImage from "/assets/images/issImage.jpg";
import landingImage from "/assets/images/landingImage.jpg";

const cardData = [
  {
    image: newsImage,
    title: "Space News",
    description: "Explore the latest news in space",
    link: "/SpaceNewsPage",
    id: 1,
  },
  {
    image: nasaImage,
    title: "NASA Imagery",
    description: "See the beautiful images captured by NASA",
    link: "/NasaImagePage",
    id: 2,
  },
  {
    image: solSysImage,
    title: "3D Interactive Solar System",
    description: "Explore our neighborhood in space",
    link: "/SolarSystemPage",
    id: 3,
  },
  {
    image: issImage,
    title: "International Space Station",
    description: "See the ISS current location and live video feed",
    link: "/ISSPage",
    id: 4,
  },
];

const LandingPage = () => {
  const heroContent = {
    title: "Welcome to The Space Place!",
    subtitle: "Your out-of-this-world educational resource!",
    backgroundImage: landingImage,
  };

  return (
    <div className="landing-page">
      <Header />
      <NavBar />
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        backgroundImage={heroContent.backgroundImage}
      />
      <MainViewer className="main-viewer">
        {cardData.map((card) => (
          <NavCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </MainViewer>

      <Footer />
    </div>
  );
};

export default LandingPage;

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
