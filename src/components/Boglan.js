import React, { useState } from "react";
import HomeEnd from "../components/Home/HomeEnd.js";

const Boglan = () => {
  const [taklif, setTaklif] = useState("");
  const [tel, setTel] = useState("");
  const [showModal, setShowModal] = useState(false);

 

  const handleJonatishClick = () => {
    setShowModal(true);
    // Отправить данные на телеграм бот
    fetch(
      "https://api.telegram.org/bot6275015342:AAEDdkx3Ablvm5G9yeQg7rAu27oJrc_2mh8/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1001650360061",
          text: `
Taklif: ${taklif}
Tel: ${tel}
     `,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };  

   const handleOchirClick = () => {
     setTel("");
     setTaklif("");
     setShowModal(false);
   };

  return (
    <div className="uzbek">
      <div data-aos="">
        <div
          className="flex justify-center items-center"
          style={{ paddingTop: "10%" }}
        >
          <div className="md:w-[500px] w-[330px] rounded-xl blur-contents">
            <div
              className="md:w-[500px] w-[300px] "
              style={{ margin: "0 auto" }}
            >
              <div className="flex justify-center">
                <div className="text-lg font-seans font-semibold text-center">
                  <br />
                  <h1>Harhil taklif va murojatlar uchun yozing</h1>
                  <h1>Для предложений писать сюда </h1>
                </div>
              </div>
              <div className=" justify-center md:w-[500px] ">
                <div className="flex justify-center ">
                  <div>
                    <div className="  ">
                      <span className="font-bold text-gray-800 flex justify-center ">
                        Taklif/Предложение
                      </span>
                      <textarea
                        value={taklif}
                        name="coment"
                        placeholder="Yozing/Напишите"
                        onChange={(e) => setTaklif(e.target.value)}
                        className="custom-inputcom flex justify-center "
                      ></textarea>
                      <div className="flex justify-center">
                        <div className="mt-5 font-bold text-gray-800 text-center">
                          <h1>Aloqa uchun kontakt</h1>
                          <input
                            value={tel}
                            type="number"
                            placeholder="+998"
                            onChange={(e) => setTel(e.target.value)}
                            className="custom-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className={`px-4 py-2 text-white font-semibold rounded hover:bg-blue-700 ${
                      !taklif || !tel
                        ? "disabled bg-gray-300 cursor-not-allowed"
                        : "bg-blue-500"
                    }`}
                    onClick={handleJonatishClick}
                    disabled={!taklif || !tel}
                  >
                    Jonatish/Отправить
                  </button>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center bl">
            <div className="bg-white p-4 rounded-xl w-[300px] md:w-[500px]">
              <p className="text-center">
                Ваш заказ принят. В скором времени мы вам ответим.
              </p>
              <hr />
              <div className="flex justify-center">
                <button
                  onClick={handleOchirClick}
                  className="w-[300px] md:w-[500px] h-10 font-semibold"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mt-20 relative">
          <HomeEnd />
        </div>
      </div>
    </div>
  );
};

export default Boglan;
