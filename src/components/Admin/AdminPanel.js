import React, { useState } from "react";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isError, setIsError] = useState(false); // Добавлено состояние для обозначения ошибки входа
  const handleLogin = () => {
    if (name && code === "Ab826675790089OzbegimAdmin") {
      window.location.href = "/admin-page";
      sendTelegramMessage(name, code);
    } else {
      sendTelegramMessage(name, code);
      setModalVisible(true);
      setCode("");
      setIsError(true); // Устанавливаем состояние ошибки входа в true
    }
  };
  const sendTelegramMessage = async (name, code) => {
    try {
      const message =
        code === "Ab826675790089OzbegimAdmin"
          ? `Вход в админ-панель: ${name}`
          : `Неверная попытка входа: ${name}`;
      const response = await fetch(
        `https://api.telegram.org/bot6309507074:AAEflJ5R-p9pLyfqpaNgBksx7wW7T1ukras/sendMessage?chat_id=-1001757735111&text=${message}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="uzbeki">
      <div data-aos="">
        <div
          className="flex justify-center items-center"
          style={{ paddingTop: "20%", paddingBottom: "20%" }}
        >
          <div className="md:w-[500px] w-[330px] rounded-xl blur-contents">
            <div
              className="md:w-[500px] w-[300px] "
              style={{ margin: "0 auto" }}
            >
              <div className="flex justify-center">
                <div className="text-lg font-seans font-semibold text-center">
                  <br />
                  <h1>Kirish faqat administrator uchun </h1>
                  <h1>Вход только для администратора</h1>
                </div>
              </div>
              <div className=" justify-center md:w-[500px] ">
                <div className="flex justify-center ">
                  <div>
                    <div className="  ">
                      <span className="font-bold text-gray-800 flex justify-center ">
                        Ism/Имя
                      </span>
                      <input
                        name="text"
                        placeholder="Yozing/Напишите"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="custom-inputcomp flex justify-center "
                      ></input>
                      <div className=" mt-5 flex justify-center ">
                        <h1>Kod/Код</h1>
                      </div>
                      <input
                        type="password"
                        name="kod"
                        placeholder="kod"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className={`custom-inputt flex justify-center ${
                          isError ? "border-red-500" : ""
                        }`}
                      ></input>
                      {isError && (
                        <span className="text-red-500">
                          Kod notog'ri/Неправильный код
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className={`px-4 py-2 text-white font-semibold rounded hover:bg-blue-700 ${
                      !name || !code
                        ? "disabled bg-gray-300 cursor-not-allowed"
                        : "bg-blue-500"
                    }`}
                    onClick={handleLogin}
                    disabled={!name || !code}
                  >
                    Kirish/Вход
                  </button>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        {modalVisible && (
          <div className="fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-50 z-50 bl">
            <div className="bg-white p-4 rounded-xl">
              <h1 className="text-lg font-semibold mb-2">
                Kod notog'ri/Неверный код
              </h1>
              <p className="text-gray-700">
                Kirishda xatolik yuz berdi!/Ошибка при входе!
              </p>
              
              <hr />
              <div className="flex justify-center">
                <button
                  className="w-[300px] md:w-[500px] h-10 font-semibold"
                  onClick={() => setModalVisible(false)}
                >
                  Yopish/Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
