import React, { useState, useEffect } from "react";
import HomeEnd from "../Home/HomeEnd";

const images = [
  require("../../images/komnota/komnota.jpg"),
  require("../../images/komnota/komnota2.jpg"),
  require("../../images/komnota/komnota3.jpg"),
  require("../../images/komnota/rooms.jpg"),
  require("../../images/komnota/rooms1.jpg"),
  require("../../images/komnota/rooms2.jpg"),
  require("../../images/komnota/rooms3.jpg"),
  require("../../images/komnota/rooms4.jpg"),
  require("../../images/komnota/rooms5.jpg"),
  require("../../images/komnota/rooms6.jpg"),
  require("../../images/komnota/rooms7.jpg"),
  require("../../images/komnota/rooms8.jpg"),
];

export default function Rooms() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="flex justify-center items-center"
        style={{ paddingTop: "1%" }}
      >
        <div className="flex justify-center items-center">
          <img
            src={images[currentImageIndex]}
            alt="Room"
            className="md:w-[500px] w-[300px] rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <p>Mehmonhona rasimlari / Фотографии гостиницы</p>
      </div>
      <div className="mt-5">
        <HomeEnd />
      </div>
    </div>
  );
}
