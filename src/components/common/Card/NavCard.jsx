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
