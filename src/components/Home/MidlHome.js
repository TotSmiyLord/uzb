import "../../index.css";
import ThreHome from "./ThreHome";
import { Link } from "react-router-dom";

import HotelRoms from "../../images/komnota/komnota.jpg";
import HotelRoms_2 from "../../images/komnota/komnota2.jpg";
import HotelRoms_3 from "../../images/komnota/komnota3.jpg";
const MidlHome = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div
          style={{ textAlign: "center" }}
          className="lg:w-[1280px]  md:w-[700px] "
        >
          <div className="text-center md:text-start text-3xl md:text-4xl">
            <h1 className="font-sans font-semibold" data-aos="fade-up">
              Mehmonhonamizning eng yahshi honalari
              <br />
              <br />
              Самые лучшие комноты гостиницы
            </h1>
          </div>
          <div className=" pt-10 md:flex justify-between">
            <Link to="/rooms">
              <div
                className="inline-block md:w-[200px] md:h-[250px] w-[300px] h-[350px] lg:w-[411px] lg:h-[480px] bg-[#DDDDDD] rounded-xl  mt-[50px] cont"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                <img
                  src={HotelRoms}
                  className="rounded-xl md:w-[200px] md:h-[250px] w-[300px] h-[350px] lg:w-[411px] lg:h-[480px] image"
                  alt=""
                  style={{ zIndex: -1 }}
                />
                <div class="middle">
                  <div class="text font-semibold">Batafsil</div>
                </div>
              </div>
            </Link>
            <Link to="/rooms">
              <div
                className="inline-block md:w-[200px] md:h-[250px] w-[300px] h-[350px] lg:w-[411px] lg:h-[480px]   bg-[#DDDDDD] rounded-xl mt-[50px] cont"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={HotelRoms_2}
                  className="image rounded-xl md:w-[200px] md:h-[250px] w-[300px] h-[350px]  lg:w-[411px] lg:h-[480px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
                <div class="middle">
                  <div class="text font-semibold">Batafsil</div>
                </div>
              </div>
            </Link>
            <Link to="/rooms">
              <div
                className="inline-block md:w-[200px] md:h-[250px] w-[300px] h-[350px] lg:w-[411px] lg:h-[480px]  bg-[#DDDDDD] rounded-xl  mt-[50px] cont"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <img
                  src={HotelRoms_3}
                  className="image rounded-xl md:w-[200px] md:h-[250px] w-[300px] h-[350px]  lg:w-[411px] lg:h-[480px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
                <div class="middle">
                  <div class="text font-semibold">Batafsil</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ThreHome />
      </div>
    </div>
  );
};

export default MidlHome;
