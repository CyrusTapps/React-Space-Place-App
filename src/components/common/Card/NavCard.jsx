import React, { useState } from "react";
import "./NavCard.css";
import { Link } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const NavCard = ({
  image,
  title,
  description,
  link,
  isExternal = false,
  usePopover = false, // New prop to control popover functionality
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="nav-card">
      <img src={image} alt="nav-card-image"></img>
      <div className="nav-card-content">
        <h3>{title}</h3>
        {usePopover ? (
          <>
            <Typography
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              See more...
            </Typography>
            <Popover
              className="popover"
              id="mouse-over-popover"
              sx={{ pointerEvents: "none" }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>{description}</Typography>
            </Popover>
          </>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <Link
        to={link}
        className="nav-card-link"
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        <PaperAirplaneIcon className="nav-card-icon" />
      </Link>
    </div>
  );
};

export default NavCard;
