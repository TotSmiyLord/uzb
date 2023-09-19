import React, { useState } from "react";
import "../../index.css";

//images
import Video from "../../images/png/knopka.png";
import HotelImage from "../../images/png/image.png";
import Hotel from "../../images/png/otel.png";

//Davomi
import MidlHome from "./MidlHome";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal" data-aos="zoom-out" data-aos-duration="1000">
      <iframe
        title="YouTube Video"
        width="400"
        height="400"
        src="https://www.youtube.com/embed/1_cU_ZagjFI"
        frameBorder="0"
        allowFullScreen
      />
      <button className="modal-close" onClick={closeModal}>
        X
      </button>
    </div>
  );
};

const Modall = ({ closeModal }) => {
  return (
    <div className="modall" data-aos="zoom-out">
      <iframe
        title="YouTube Video"
        width="300"
        height="300"
        src="https://www.youtube.com/embed/1_cU_ZagjFI"
        frameBorder="0"
        allowFullScreen
      />
      <button className="modal-close" onClick={closeModal}>
        X
      </button>
    </div>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className="flex justify-center sm:mt-[160px] md:mt-[100px]"
        id="home"
      >
        <div
          className=" w-[1280px] h-[656px] boto w-sm-50 h-sm-50 "
          data-aos="fade-up"
        >
          <sapn className="flex ">
            <span className="hidden sm:block lg:m-10 m-5 w-[633px] sm:text-3xl font-sans font-semibold text-clip">
              <p style={{ zIndex: -4 }} className="mt-40">
                O'zingizga qulay va shinam joy tanlang
              </p>
              <p style={{ zIndex: 1 }} className="mt-5">
                Выберите свое идеальное место для отдыха
              </p>
              <div>
                <button
                  onClick={openModal}
                  className="flex items-center mt-10 button-style"
                >
                  <img src={Video} className="" alt="" />
                  <h1 className="ml-2">Video rolik</h1>
                </button>
                {isOpen && <Modal closeModal={closeModal} />}
              </div>
            </span>

            <div className="">
              <img
                src={HotelImage}
                className=" w-[640px] h-[656px] hidden sm:block"
                alt=""
                style={{ zIndex: -1 }}
              />
              <img
                src={Hotel}
                className=" block sm:hidden"
                alt=""
                style={{ zIndex: -4 }}
              />
              <div className="block sm:hidden  font-sans font-semibold">
                <p className="text-center text-sm " style={{ zIndex: -1 }}>
                  O'zingizga qulay va shinam joy tanlang
                </p>
                <p className="text-center text-sm mt-2" style={{ zIndex: -1 }}>
                  Выберите свое идеальное место для проживания
                </p>
                <div className="flex justify-center mt-1">
                  <button
                    onClick={openModal}
                    className="flex items-center  button-style"
                  >
                    <img src={Video} className="" alt="" />
                    <h1 className="ml-2">Video rolik</h1>
                  </button>
                  {isOpen && <Modall closeModal={closeModal} />}
                </div>
              </div>
            </div>
          </sapn>
        </div>
      </div>
      <div className="mt-20">
        <MidlHome />
      </div>
    </div>
  );
};

export default Home;
