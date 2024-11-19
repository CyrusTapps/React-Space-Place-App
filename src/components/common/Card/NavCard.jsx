import React from "react";
import "./NavCard.css";
import { Link } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
const NavCard = ({ image, title, description, link }) => {
  return (
    <div className="nav-card">
      <img src={image} alt="nav-card-image"></img>
      <div className="nav-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link to={link} className="nav-card-link">
        <PaperAirplaneIcon className="nav-card-icon" />
      </Link>
    </div>
  );
};

export default NavCard;
