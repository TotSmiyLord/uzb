import React, { useState } from "react";
import HomeEnd from "../../components/Home/HomeEnd.js";
const Buyurtma = () => {
  const [kattalar, setKattalar] = useState(1);
  const [childAges, setChildAges] = useState([]);
  const [hona, setHona] = useState(1);
  const [kelish, setKelish] = useState("");
  const [ketish, setKetish] = useState("");
  const [tel, setTel] = useState("");

  const handleKelishChange = (event) => {
    setKelish(event.target.value);
  };

  const handleKetishChange = (event) => {
    setKetish(event.target.value);
  };

  const handleKattalarIncrement = () => {
    if (kattalar < 30) {
      setKattalar(kattalar + 1);
    }
  };

  const handleKattalarDecrement = () => {
    if (kattalar > 1) {
      setKattalar(kattalar - 1);
    }
  };

  const handleYoshbolalarIncrement = () => {
    if (childAges.length < 10) {
      const updatedChildAges = [...childAges];
      updatedChildAges.push(0);
      setChildAges(updatedChildAges);
    }
  };

  const handleYoshbolalarDecrement = () => {
    const newChildAges = [...childAges];
    newChildAges.pop(); // Удаляет последний возраст из массива

    setChildAges(newChildAges);
  };

  const handleHonaIncrement = () => {
    if (hona < 30) {
      setHona(hona + 1);
    }
  };

  const handleHonaDecrement = () => {
    if (hona > 1) {
      setHona(hona - 1);
    }
  };

  const handleYoshbolalarChange = (index, value) => {
    const updatedChildAges = [...childAges];
    updatedChildAges[index] = value;
    setChildAges(updatedChildAges);
  };

  const handleJonatishClick = () => {
    // Отправить данные на телеграм бот
    fetch(
      "https://api.telegram.org/bot6057923661:AAGjpgAtx_2BYuZcy3pO2FwWc7xKNC--XZA/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-971460812",
          text: `
Kelish: ${kelish}
Ketish: ${ketish}
Kattalar: ${kattalar}
Hona: ${hona}
Yoshbolalar: ${childAges.join(", ")}
Tel: ${tel}

     `,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="uzb">
      <div data-aos="zoom-out-down">
        <div
          className="flex justify-center items-center"
          style={{ paddingTop: "5%" }}
        >
          <div className="md:w-[500px] w-[330px] blur-contents rounded-xl">
            <div
              className="md:w-[500px] w-[300px]  "
              style={{ margin: "0 auto" }}
            >
              <div className="flex justify-center">
                <div className="text-lg font-seans font-semibold text-center">
                  <br />
                  <h1>Hona band qilish uchun toldiring</h1>
                  <h1>Чтобы забронировать заполните</h1>
                </div>
              </div>
              <div className="flex justify-center md:w-[500px] ">
                <div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800">
                      Kelish/прибытие
                    </span>
                    <input
                      type="date"
                      className="mt-1 px-2 py-1 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={kelish}
                      onChange={handleKelishChange}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <span className="font-bold text-gray-800">
                      Ketish/Убытие
                    </span>
                    <input
                      type="date"
                      className="mt-1 px-2 py-1 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={ketish}
                      onChange={handleKetishChange}
                    />
                  </div>
                  <div className="flex justify-around text-start mt-2">
                    <span className="font-bold text-gray-800">
                      Kattalar/Взрослых
                    </span>
                    <div className="w-[120px] h-[50px] border-2 rounded-lg text-center bg-gray-100 flex items-center justify-center">
                      <button
                        className="text-gray-500 hover:text-gray-700 w-[40px] h-[40px] rounded-xl text-4xl bg-blue-500 hover:bg-blue-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={handleKattalarDecrement}
                      >
                        -
                      </button>
                      <span className="text-black w-[40px] h-[40px]">
                        {kattalar}
                      </span>
                      <button
                        className="text-gray-500 hover:text-gray-700 w-[40px] h-[40px] rounded-xl text-4xl  bg-blue-500 hover:bg-blue-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={handleKattalarIncrement}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-around mt-5">
                    <span className="font-bold text-gray-800 text-start ">
                      Hona soni/Количество комнат
                    </span>
                    <div className="w-[120px] h-[50px] border-2 rounded-lg text-center bg-gray-100 flex items-center justify-center">
                      <button
                        className="text-gray-500 w-[40px] h-[40px] rounded-xl text-4xl  bg-blue-500 hover:bg-blue-700 hover:text-gray-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={handleHonaDecrement}
                      >
                        -
                      </button>
                      <span className="text-black w-[40px] h-[40px]">
                        {hona}
                      </span>
                      <button
                        className="text-gray-500 w-[40px] h-[40px] rounded-xl text-4xl  bg-blue-500 hover:bg-blue-700 hover:text-gray-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={handleHonaIncrement}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-around mt-5 deti">
                    {childAges.length === 0 ? (
                      <span className="font-bold text-gray-800 text-start">
                        yoshbolalar/Детей
                      </span>
                    ) : (
                      <span className="font-bold text-gray-800">
                        yoshbolalar/Детей
                      </span>
                    )}
                    <div className="w-[120px] h-[50px] border-2 rounded-lg text-center bg-gray-100 flex items-center justify-center">
                      <button
                        className="text-gray-500 hover:text-gray-700 w-[40px] h-[40px] rounded-xl text-4xl  bg-blue-500 hover:bg-blue-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={handleYoshbolalarDecrement}
                      >
                        -
                      </button>
                      <span className="text-black w-[40px] h-[40px]">
                        {childAges.length}
                      </span>
                      <button
                        className="text-gray-500 hover:text-gray-700 w-[40px] h-[40px] rounded-xl text-4xl  bg-blue-500 hover:bg-blue-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={handleYoshbolalarIncrement}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {childAges.map((age, index) => (
                    <div className="flex justify-around mt-5" key={index}>
                      <button
                        className="text-gray-500 hover:text-gray-700 w-[40px] h-[40px] rounded-xl text-4xl  bg-blue-500 hover:bg-blue-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={() => handleYoshbolalarChange(index, age - 1)}
                      >
                        -
                      </button>
                      <span>
                        {age === 0
                          ? "0 лет"
                          : age === 1
                          ? "1 год"
                          : age > 1 && age < 5
                          ? age + " года"
                          : age > 4 && age < 18
                          ? age + "лет"
                          : "Mumkun emas"}
                      </span>
                      <button
                        className="text-gray-500 hover:text-gray-700 w-[40px] h-[40px] rounded-xl text-4xl  bg-blue-500 hover:bg-blue-700 transition-colors ease-in-out duration-200 focus:outline-none"
                        onClick={() => handleYoshbolalarChange(index, age + 1)}
                      >
                        +
                      </button>
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <div className="md:flex justify-around mt-5 font-bold text-gray-800">
                      <h1>Aloqa uchun kontakt</h1>
                      <input
                        type=""
                        name="tel"
                        placeholder="+998"
                        onChange={(e) => setTel(e.target.value)}
                        className="custom-input"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      className={`px-4 py-2 text-white font-semibold rounded hover:bg-blue-700 ${
                        !kattalar || !tel || !hona || !kelish || !ketish
                          ? "disabled bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500"
                      }`}
                      onClick={handleJonatishClick}
                      disabled={
                        !kattalar || !tel || !hona || !kelish || !ketish
                      }
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
        </div>
        <div className="mt-20">
          <HomeEnd />
        </div>
      </div>
    </div>
  );
};

export default Buyurtma;
