import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import HomeImage from "../images/svg/navbarIcon/svg-editor-image (1).svg";
import Buyurtma from "../images/svg/navbarIcon/calendar-svgrepo-com.svg";
import Admin from "../images/svg/navbarIcon/open-book-book-svgrepo-com.svg";

import Joylashuv from "../images/svg/navbarIcon/placeholder-map-location-svgrepo-com.svg";
import Kontakt from "../images/svg/navbarIcon/paper-plane-svgrepo-com.svg";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div
        className="fixed bottom-0 left-4 w-full blur-container "
        style={{ zIndex: 1 }}
      >
        <div className="container overflow-hidden mx-auto ">
          <div className="flex text-white  block sm:hidden justify-center">
            <Link to="/" className="px-4 py-2 m-2">
              <img src={HomeImage} className="w-[120px]" alt="" />
            </Link>
            <Link to="/buyurtma" className="px-4 py-2 m-2">
              <img src={Buyurtma} className="" alt="" />{" "}
            </Link>

            <Link to="/joylashuv" className="px-4 py-2 m-2">
              <img src={Joylashuv} className="" alt="" />
            </Link>
            <Link to="/boglan" className="px-4 py-2 m-2">
              <img src={Kontakt} className="" alt="" />
            </Link>
            <Link to="/admin" className="px-4 py-2 m-2">
              <img src={Admin} className="" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
