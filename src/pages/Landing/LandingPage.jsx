import React from "react";
import "./LandingPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import Hero from "../../components/common/Hero/Hero";
import Footer from "../../components/common/Footer/Footer";
import NavCard from "../../components/common/Card/NavCard";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <NavBar />
      <Hero />
      <main className="main-content">
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
