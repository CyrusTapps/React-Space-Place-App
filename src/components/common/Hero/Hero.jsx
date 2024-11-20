import "./Hero.css";

const Hero = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="hero" style={heroStyle}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Hero;
