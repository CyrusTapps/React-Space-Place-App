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
            />
          ))
        )}
      </MainViewer>
      <Footer />
    </div>
  );
};

export default SpaceNewsPage;
