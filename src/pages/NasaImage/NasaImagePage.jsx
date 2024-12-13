import React, { useState, useEffect } from "react";
import "./NasaImagePage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import Hero from "../../components/common/Hero/Hero";
import MainViewer from "../../components/common/MainViewer/MainViewer";
import Footer from "../../components/common/Footer/Footer";
import { nasaAPI } from "../../services/api/endpoints";
import nasaImage from "/assets/images/nasaImage.jpg";
import { PlayIcon, PauseIcon, ForwardIcon } from "@heroicons/react/24/outline";

const NasaImagePage = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const heroContent = {
    title: "NASA Image Gallery",
    subtitle: "Exploring the Universe Through NASA's Lens",
    backgroundImage: nasaImage,
  };

  // Fetch new image function using fetch/then
  const fetchNewImage = () => {
    setIsLoading(true);
    nasaAPI
      .getImageOfDay()
      .then((response) => {
        console.log("NASA API Response:", response.data);
        setCurrentImage(response.data[0]);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to fetch NASA image");
        console.error("NASA API Error:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Handle interval
  useEffect(() => {
    let intervalId = null;

    // Initial fetch
    if (!isPaused) {
      fetchNewImage();
      intervalId = setInterval(fetchNewImage, 20000);
      console.log("Interval started");
    }

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        console.log("Interval stopped");
      }
    };
  }, [isPaused]); // Dependency on isPaused to restart/stop interval

  // Handle play/pause
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Handle manual next
  const handleNext = () => {
    fetchNewImage();
  };

  return (
    <div className="nasa-image-page">
      <Header />
      <NavBar />
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        backgroundImage={heroContent.backgroundImage}
      />
      <MainViewer>
        <div className="nasa-content">
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              <div className="image-title">{currentImage?.title}</div>
              <div className="image-container">
                <img
                  src={currentImage?.url}
                  alt={currentImage?.title}
                  className="nasa-image"
                />
              </div>
              <h5 className="refresh-info">
                Images and descriptions will refresh every 20 seconds unless
                paused.
              </h5>

              <div className="controls">
                <button className="control-btn pause" onClick={togglePause}>
                  {isPaused ? (
                    <PlayIcon className="control-icon" width={24} height={24} />
                  ) : (
                    <PauseIcon
                      className="control-icon"
                      width={24}
                      height={24}
                    />
                  )}
                </button>
                <button
                  className="control-btn next"
                  onClick={handleNext}
                  disabled={isLoading}
                >
                  <ForwardIcon
                    className="control-icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              {currentImage?.explanation && (
                <div className="image-description">
                  {currentImage.explanation}
                </div>
              )}
            </>
          )}
        </div>
      </MainViewer>
      <Footer />
    </div>
  );
};

export default NasaImagePage;

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
