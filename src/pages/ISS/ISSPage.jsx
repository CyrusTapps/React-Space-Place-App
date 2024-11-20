import React from "react";
import "./ISSPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import Hero from "../../components/common/Hero/Hero";
import MainViewer from "../../components/common/MainViewer/MainViewer";
import Footer from "../../components/common/Footer/Footer";
import issImage from "/assets/images/issImage.jpg";

const ISSPage = () => {
  const videoId = "wG4YaEcNlb0";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0`;
  const mapUrl = "https://isstracker.spaceflight.esa.int/";

  const heroContent = {
    title: "International Space Station",
    subtitle: "Track the ISS and watch live views from space",
    backgroundImage: issImage,
  };

  return (
    <div className="iss-page">
      <Header />
      <NavBar />
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        backgroundImage={heroContent.backgroundImage}
      />
      <MainViewer>
        <div className="iss-feeds-container">
          <div className="feed-container">
            <iframe
              className="youtube-iframe"
              src={embedUrl}
              title="Live Feed from the ISS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="feed-container">
            <iframe
              className="map-iframe"
              src={mapUrl}
              title="ESA ISS tracking map"
              sandbox="allow-same-origin allow-scripts"
              scrolling="no"
              allowFullScreen
            />
            <div className="map-attribution">
              Map Source:{" "}
              <a href="http://wsn.spaceflight.esa.int/iss/index_portal.php">
                www.esa.int
              </a>
            </div>
          </div>
        </div>

        <div className="iss-info-panel">
          <div className="location-info">
            {/* Location information will go here */}
            User Location: Lat/Long
          </div>

          <div className="time-display">
            <div className="time-item">
              <h4>Next Rise</h4>
              {/* Rise time will go here */}
            </div>
            <div className="time-item">
              <h4>Next Peak</h4>
              {/* Peak time will go here */}
            </div>
            <div className="time-item">
              <h4>Next Set</h4>
              {/* Set time will go here */}
            </div>
          </div>
        </div>
      </MainViewer>
      <Footer />
    </div>
  );
};

export default ISSPage;
