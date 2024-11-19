import React from "react";
import "./LandingPage.css";
import Header from "../../components/common/Header/Header";
import NavBar from "../../components/common/Navigation/NavBar";
import Hero from "../../components/common/Hero/Hero";
import Footer from "../../components/common/Footer/Footer";
import NavCard from "../../components/common/Card/NavCard";
import image1 from "/assets/images/launch.jpg";
import image2 from "/assets/images/nebula.jpg";
import image3 from "/assets/images/solsys.jpg";
import image4 from "/assets/images/iss.jpg";

const cardData = [
  {
    image: image1,
    title: "Space News",
    description: "Explore the latest news in space",
    link: "/launch",
    id: 1,
  },
  {
    image: image2,
    title: "NASA Imagery",
    description: "See the beautiful images captured by NASA",
    link: "/exploration",
    id: 2,
  },
  {
    image: image3,
    title: "3D Interactive Solar System",
    description: "Explore our neighborhood in space",
    link: "/solar-system",
    id: 3,
  },
  {
    image: image4,
    title: "International Space Station",
    description: "See the ISS current location and live video feed",
    link: "/iss",
    id: 4,
  },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <NavBar />
      <Hero />
      <main className="main-content">
        {cardData.map((card) => (
          <NavCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
