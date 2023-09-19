import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import LocationHome from "./LokationHome";

import Hotel_comunications from "../../images/png/wifi.png";
import Hotel_comunications_food from "../../images/png/food.png";
import Hotel_comunications_dush from "../../images/png/duush.png";
import Hotel_comunications_obs from "../../images/png/obs.png";
import Hotel_comunications_ekonom from "../../images/png/ekonom.png";
import Hotel_comunications_happy from "../../images/png/bayram.png";
import Hotel_comunications_sport from "../../images/png/sport.png";
import Hotel_comunications_ekskurs from "../../images/png/ekskursya.png";

const ThreHome = () => {
  const handleKontaktClick = () => {
    window.location.href = "https://t.me/muxaya";
  };
  const isSmallScreen = window.innerWidth <= 640;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isSmallScreen ? 1 : 8,
    slidesToScroll: isSmallScreen ? 1 : 8,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true, // переход по свайпу
    pauseOnHover: true, // остановка автопрокрутки при наведении
    variableWidth: true, // изменение ширины слайдов в зависимости от содержимого
    centerPadding: "50px", // отступ по краям
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div cla>
      <div className="md:flex justify-center">
        <div className="lg:flex justify-around mt-20 lg:w-[1280px] md:w-[700px]  ">
          <div
            className={
              isSmallScreen ? "text-center" : "text-start inline-block"
            }
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <h1 className="lg:text-3xl mt-10">
              Biz sizga qulaylik yaratish uchun qo'limizdan kelganicha harakat
              qilamiz
            </h1>
            <p className="lg:text-3xl mt-4">
              Мы делаем все возможное, чтобы предоставить вам комфорт
            </p>
            <button
              className="rounded-full w-[160px] h-[50px] bg-[#24AB70] text-whiite font-semibold mt-5"
              onClick={handleKontaktClick}
            >
              Kontakt
            </button>
          </div>
          <div className="block md:hidden">
            <div
              style={{ textAlign: "center" }}
              className={isSmallScreen ? "carousel" : "name"}
            >
              <Slider {...settings}>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications}
                    className="rounded-xl w-[80px] h-[70px] m-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications_food}
                    className="rounded-xl w-[80px] h-[70px] m-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications_dush}
                    className="rounded-xl w-[120px] h-[70px] m-[40px] mt-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications_obs}
                    className="rounded-xl w-[80px] h-[70px] m-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications_ekonom}
                    className="rounded-xl w-[80px] h-[70px] m-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications_happy}
                    className="rounded-xl w-[80px] h-[70px] m-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications_sport}
                    className="rounded-xl w-[80px] h-[70px] m-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
                <div className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2">
                  <img
                    src={Hotel_comunications_ekskurs}
                    className="rounded-xl w-[80px] h-[70px] m-[55px]"
                    alt=""
                    style={{ zIndex: -1 }}
                  />{" "}
                </div>
              </Slider>
            </div>
          </div>
          <div style={{ textAlign: "center" }} className="hidden md:block">
            <div className="flex justify-between ">
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-down-right"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications}
                  className="rounded-xl md:w-[50px] md:h-[80px] w-[40px] h-[50px]  lg:w-[80px] lg:h-[70px] m-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications_food}
                  className="rounded-xl md:w-[50px] md:h-[80px] w-[40px] h-[50px]  lg:w-[80px] lg:h-[70px] m-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications_dush}
                  className="rounded-xl md:w-[50px] md:h-[50px] w-[40px] h-[50px]  lg:w-[120px] lg:h-[70px] m-[40px] mt-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-down-left"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications_obs}
                  className="rounded-xl md:w-[50px] md:h-[80px] w-[40px] h-[50px]  lg:w-[80px] lg:h-[70px] m-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
            </div>
            <div className="flex justify-between ">
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications_ekonom}
                  className="rounded-xl md:w-[50px] md:h-[80px] w-[40px] h-[50px]  lg:w-[80px] lg:h-[70px] m-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications_happy}
                  className="rounded-xl md:w-[50px] md:h-[80px] w-[40px] h-[50px]  lg:w-[80px] lg:h-[70px] m-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications_sport}
                  className="rounded-xl md:w-[50px] md:h-[80px] w-[40px] h-[50px]  lg:w-[80px] lg:h-[70px] m-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
              <div
                className="inline-block w-[193px] h-[193px] border-solid border-2 rounded-lg border-[#E8E8E8] m-2"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <img
                  src={Hotel_comunications_ekskurs}
                  className="rounded-xl md:w-[50px] md:h-[80px] w-[40px] h-[50px]  lg:w-[80px] lg:h-[70px] m-[55px]"
                  alt=""
                  style={{ zIndex: -1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <LocationHome />
      </div>
    </div>
  );
};
export default ThreHome;
