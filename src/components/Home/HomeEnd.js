import "../../index.css";

import { Link } from "react-router-dom";

const HomeEnd = () => {
  const handleKontaktClick = () => {
    window.location.href = "https://t.me/muxaya";
  };

  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="md:flex justify-center bg-white rounded goo md:w-[1280px] w-[300px]">
          <div className="md:flex justify-between  md:w-[500px] w-[300px]">
            {/* <div className="">
              <p className="font-bold text-gray-800">
                Shuningdek bizni Facebook, Instagram, Telegram orqali
                kuzatishingiz mumkin
                <br />
                Вы также можете наблюдать за нами на этих платформах
              </p>
              <ul className="flex mt-2">
                <li>
                  <img src={Facebook} className="" alt="" />
                </li>
                <li className="ml-5">
                  <img src={Instagram} className="" alt="" />
                </li>
                <li className="ml-5">
                  <img src={Telegram} className="" alt="" />
                </li>
              </ul>
            </div> */}
            <ul className="hidden md:block">
              <Link to="/">
                <li className="font-bold text-gray-800">Boshsahifa</li>
              </Link>
              <Link to="/rooms">
                <li className="mt-3 font-semibold">Honalar</li>
              </Link>{" "}
              <Link to="/rooms">
                <li className="mt-3 font-semibold">Sharoit</li>
              </Link>{" "}
              <Link to="/joylashuv">
                <li className="mt-3 font-semibold">Joylashuv</li>
              </Link>{" "}
            </ul>
            <ul className="hidden md:block">
              <Link to="/boglan">
                <li className="font-bold text-gray-800">Takliflar</li>
              </Link>{" "}
              <li onClick={handleKontaktClick} className="font-semibold">
                Kontakt
              </li>
            </ul>
            <div className="block md:hidden flex justify-between mt-2">
              <ul>
                <Link to="/">
                  <li className="font-bold text-gray-800">Boshsahifa</li>
                </Link>{" "}
                <Link to="/rooms">
                  <li className="mt-3 font-semibold">Honalar</li>
                </Link>
                <Link to="/rooms">
                  <li className="mt-3 font-semibold">Sharoit</li>
                </Link>
                <Link to="/joylashuv">
                  <li className="mt-3 font-semibold">Joylashuv</li>
                </Link>
              </ul>
              <ul>
                <Link to="/boglan">
                  <li className="font-bold text-gray-800">Takliflar</li>
                </Link>
                <li onClick={handleKontaktClick} className="font-semibold">
                  Kontakt
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomeEnd;
