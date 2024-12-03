import React, { useState, useEffect, useCallback } from "react";
import "./ISSPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import Hero from "../../components/common/Hero/Hero";
import MainViewer from "../../components/common/MainViewer/MainViewer";
import Footer from "../../components/common/Footer/Footer";
import issImage from "/assets/images/issImage.jpg";
import { issAPI } from "../../services/api/endpoints";

const ISSPage = () => {
  const getCurrentZuluTime = () => {
    return new Date().toISOString().replace("T", " ").slice(0, 19) + " GMT";
  };
  const [userLocation, setUserLocation] = useState(null);
  const [locationConsent, setLocationConsent] = useState(false);
  const [passTimes, setPassTimes] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPass, setCurrentPass] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentZuluTime());

  const videoId = "wG4YaEcNlb0";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0`;
  const mapUrl = "https://isstracker.spaceflight.esa.int/";

  const heroContent = {
    title: "International Space Station",
    subtitle: "Track the ISS and watch live views from space",
    backgroundImage: issImage,
  };

  // Placeholder for future API implementation
  const fetchPassTimes = useCallback(async (location) => {
    setIsLoading(true);
    try {
      const passes = await issAPI.getPassTimes(
        location.latitude,
        location.longitude
      );

      if (passes.length > 0) {
        const pass = passes[0];
        setCurrentPass(pass);
        setPassTimes({
          rise: pass.rise.utc_datetime,
          peak: pass.culmination.utc_datetime,
          set: pass.set.utc_datetime,
        });
        setError(null);
      } else {
        setError("No passes found in the next 15 days");
        setPassTimes(null);
        setCurrentPass(null);
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Unable to fetch ISS pass times");
      setPassTimes(null);
      setCurrentPass(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Effect to fetch pass times when location is available
  useEffect(() => {
    if (userLocation) {
      fetchPassTimes(userLocation);
    }
  }, [userLocation, fetchPassTimes]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentZuluTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setUserLocation(location);
          setLocationConsent(true);
          setError(null);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setError(
              "Please allow location access when prompted, or check your device settings to enable location for this site."
            );
          }
        }
      );
    } else {
      setError("Location services not available");
    }
  };

  const formatToGMT = (timestamp) => {
    return (
      new Date(timestamp * 1000).toISOString().replace("T", " ").slice(0, -5) +
      " GMT"
    );
  };

  const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
    return "Other";
  };

  // Update the renderLocationInfo function
  const renderLocationInfo = () => {
    const os = getMobileOperatingSystem();

    const getLocationInstructions = () => {
      switch (os) {
        case "iOS":
          return (
            <div className="location-instructions">
              <p>To enable location on iOS:</p>
              <ol>
                <li>Open Settings</li>
                <li>Scroll down to your browser (Safari/Chrome)</li>
                <li>Tap Location</li>
                <li>Select "Allow While Using App"</li>
                <li>Return to this page and refresh</li>
              </ol>
            </div>
          );
        case "Android":
          return (
            <div className="location-instructions">
              <p>To enable location on Android:</p>
              <ol>
                <li>Open browser settings (three dots ⋮)</li>
                <li>Tap Settings → Site settings → Location</li>
                <li>Enable location access</li>
                <li>Return to this page and refresh</li>
              </ol>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="location-info">
        {!locationConsent ? (
          <div className="location-consent">
            <p>Share your location to see the next ISS pass time</p>
            <button className="consent-button" onClick={getUserLocation}>
              Share Location
            </button>
            {error && (
              <>
                <p className="error-message">{error}</p>
                {getLocationInstructions()}
              </>
            )}
          </div>
        ) : userLocation ? (
          <>
            <p>
              Your Location: {userLocation.latitude.toFixed(4)}°,{" "}
              {userLocation.longitude.toFixed(4)}°
            </p>
            <p>Current Time: {currentTime}</p>
          </>
        ) : (
          <p>Getting location...</p>
        )}
      </div>
    );
  };

  // Update the time display section to show loading state
  const renderTimeDisplay = () => (
    <div className="time-display">
      {isLoading ? (
        <div className="loading-spinner" />
      ) : currentPass ? (
        <>
          <div className="time-item">
            <h4>Next Rise</h4>
            {passTimes?.rise.slice(0, 19)}
            <div className="visibility-info">
              {currentPass.visible ? "✨ Visible" : "👁️ Not visible"}
            </div>
          </div>
          <div className="time-item">
            <h4>Next Peak</h4>
            {passTimes?.peak.slice(0, 19)}
            <div className="elevation-info">
              Elevation: {currentPass.culmination.alt}°
            </div>
          </div>
          <div className="time-item">
            <h4>Next Set</h4>
            {passTimes?.set.slice(0, 19)}
          </div>
        </>
      ) : (
        "Waiting for location..."
      )}
    </div>
  );

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
              <a
                href="http://wsn.spaceflight.esa.int/iss/index_portal.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.esa.int
              </a>
            </div>
          </div>
        </div>

        <div className="iss-info-panel">
          {renderLocationInfo()}
          {renderTimeDisplay()}
        </div>
      </MainViewer>
      <Footer />
    </div>
  );
};

export default ISSPage;
