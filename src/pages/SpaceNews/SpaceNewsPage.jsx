import React from "react";
import { useState, useEffect } from "react";
import { spaceflightAPI } from "../../services/api/endpoints.js";
import "./SpaceNewsPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import Hero from "../../components/common/Hero/Hero";
import spaceNewsImage from "/assets/images/newsImage.jpg";
import MainViewer from "../../components/common/MainViewer/MainViewer";
import NavCard from "../../components/common/Card/NavCard";
import Footer from "../../components/common/Footer/Footer";

const SpaceNewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroContent = {
    title: "Space News",
    subtitle: "Explore current space-related news from Spaceflight News",
    backgroundImage: spaceNewsImage,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchSpaceNews = () => {
    spaceflightAPI
      .getLatestArticles()
      .then((articles) => {
        setArticles(articles);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch articles");
        setArticles([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSpaceNews();
  }, []);

  const formatTitle = (title) => {
    return isMobile ? `${title.slice(0, 60)}...` : title;
  };

  const formatDescription = (description) => {
    return isMobile ? `${description.slice(0, 150)}...` : description;
  };

  return (
    <div className="space-news-page">
      <Header />
      <NavBar />
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        backgroundImage={heroContent.backgroundImage}
      />
      <MainViewer>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          articles.map((article) => (
            <NavCard
              key={article.id}
              image={article.image_url}
              title={formatTitle(article.title)}
              description={formatDescription(article.summary)}
              link={article.url}
              isExternal={true}
              usePopover={true}
            />
          ))
        )}
      </MainViewer>
      <Footer />
    </div>
  );
};

export default SpaceNewsPage;

/*********************************************************
 *  ███████╗██████╗  █████╗  ██████╗███████╗    ██████╗ ██╗      █████╗  ██████╗███████╗
 *  ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝    ██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
 *  ███████╗██████╔╝███████║██║     █████╗      ██████╔╝██║     ███████║██║     █████╗
 *  ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝      ██╔═══╝ ██║     ██╔══██║██║     ██╔══╝
 *  ███████║██║     ██║  ██║╚██████╗███████╗    ██║     ███████╗██║  ██║╚██████╗███████╗
 *  ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝
 * ┌───────────────────────────────────────────────────────────────────────────────────┐
 * │     Created by: Shawn M. Tapps                                                    │
 * │     Created on: 2024-12-13 @ 17:35 GMT                                            │
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
