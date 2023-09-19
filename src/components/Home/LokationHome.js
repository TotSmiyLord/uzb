/* eslint-disable jsx-a11y/iframe-has-title */
import "../../index.css";
import HomeEnd from "./HomeEnd";

const LocationHome = () => {
  return (
    <div>
      <div className="flex justify-center" data-aos="zoom-out-down">
        <div>
          <div className="lg:w-[1280px] lg:h-[677px] w-[300px] h-[350px] md:w-[700px] md:h-[400px] rounded-xl  relative">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc947353b0b0779bec68c853af6ee7e22ab73c26d9de5961b5794f810a3eb3c5&amp;source=constructor"
              frameBorder="0"
              style={{ zIndex: -1 }}
              className=" w-[100%]
              lg:h-[677px]
              md:h-[400px]
              h-[350px]
              rounded-xl
              "
            ></iframe>

            <div className="hidden md:block">
              <div className="flex justify-center ">
                <div className="lg:w-[1194px] lg:h-[150px] w-[300px] h-[50px] md:w-[650px] md:h-[100px] blur-objecting absolute top lg:bottom-10 md:bottom-10 rounded-xl text-white flex justify-center ">
                  <div className="flex justify-between md:w-[600px] lg:w-[800px] ">
                    <p className="items-center text-lg lg:text-4xl md:text-xl">
                      Haritada Bizning Manzil
                      <span className="text-white text-lg">
                        <br /> Ish vaqti <br />
                        24/7
                      </span>
                    </p>
                    <p className="items-center text-lg lg:text-4xl md:text-xl">
                      Наш адрес на карте
                      <span className="text-white text-lg">
                        <br />
                        Время работы <br /> 24/7
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <HomeEnd />
      </div>
    </div>
  );
};

export default LocationHome;
