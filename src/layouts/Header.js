import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../images/png/Green_Mountain_Adventure_Logo-transformed.png";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="blur-conte">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{ zIndex: 1 }}
        className="container overflow-hidden mx-auto hidden sm:block fixed blur-cont"
      >
        <div className="flex  md:justify-around">
          <Link to="/">
            <div className="">
              <img src={Logo} width={130} alt="" />
            </div>
          </Link>
          <div className="flex justify-center m-6">
            <Link to="/" className="px-4 hidden sm:block font-semibold">
              Bosh sahifa
            </Link>
            <Link
              to="/buyurtma"
              className="px-4  hidden sm:block font-semibold"
            >
              Buyurtma
            </Link>
            <Link
              to="/joylashuv"
              className="px-4  hidden sm:block font-semibold"
            >
              Joylashuv
            </Link>
            <Link to="/boglan" className="px-4  hidden sm:block font-semibold">
              Bog'lanish
            </Link>
            <Link to="/admin" className="px-4  hidden sm:block font-semibold">
              Admin
            </Link>
          </div>
        </div>
      </div>
      <div
        className="py-2 block sm:hidden flex justify-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Header;
