import React, { useState } from "react";
import axios from "axios";
const Yangiobod = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [hotel, setHotel] = useState("");
  const [meal, setMeal] = useState(false);
  const [people, setPeople] = useState([]);
  const [hotelPrice, setHotelPrice] = useState(0);
  const [mealPrice] = useState(80000);

  const handleAddPerson = () => {
    const person = { firstName, lastName };
    setPeople([...people, person]);

    setFirstName("");
    setLastName("");
  };

  const calculateTotal = () => {
    const numberOfPeople = people.length;
    const days = Math.ceil(
      (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
    );
    const accommodationTotal = numberOfPeople * days * hotelPrice;

    let mealTotal = 0;
    if (meal) {
      mealTotal = numberOfPeople * days * mealPrice;
    }

    const total = accommodationTotal + mealTotal;

    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const total = calculateTotal();

    let reference = `
    
    
    
    
    






                               СПРАВКА
Дано, что в гостинице ч.п “Янгобод Восток Туризм” ${
      people.length === 1 ? "проживал" : "проживали"
    } и     ${people.length === 1 ? "питался" : "питались"}

        ${people
          .map((person) => `${person.firstName} ${person.lastName}`)
          .join("\n")}



                       С ${arrivalDate} по ${departureDate}.
    Проживание = ${people.length}${
      people.length === 1 ? " человек" : " человека"
    }* ${Math.ceil(
      (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
    )}${Date.length === 1 ? "день" : "дня"} * ${hotelPrice}сум = ${
      people.length *
      Math.ceil(
        (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
      ) *
      hotelPrice
    } сум.
    ${
      meal
        ? `Питание = ${people.length}${
            people.length === 1 ? " человек" : " человека"
          } * ${Math.ceil(
            (new Date(departureDate) - new Date(arrivalDate)) /
              (1000 * 3600 * 24)
          )}${Date.length === 1 ? "день" : "дня"} * ${mealPrice}сум = ${
            people.length *
            Math.ceil(
              (new Date(departureDate) - new Date(arrivalDate)) /
                (1000 * 3600 * 24)
            ) *
            mealPrice
          } сум.`
        : " "
    }
                       Общая сумма ${total}сум





        Директор ч.п “Янгобод Восток Туризм”       Алиев Ш.___________`;

    // Отправить сообщение в телеграм
    const botToken = "6312107364:AAFqtqYT_0KY-t8XmP3ELZeEm1UDAr9e00c";
    const chatId = "-913955194";
    const message = `Новая справка создана! 
СПРАВКА \n
Дано, что в гостинице ч.п “Янгобод Восток Туризм” ${
      people.length === 1 ? "проживал" : "проживали"
    } и ${people.length === 1 ? "питался" : "питались"}\n


${people.map((person) => `${person.firstName} ${person.lastName}`).join("\n")}\n



С ${arrivalDate} по ${departureDate}.\n
    Проживание = ${people.length}${
      people.length === 1 ? " человек" : " человека"
    }* ${Math.ceil(
      (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
    )}${Date.length === 1 ? "день" : "дня"} * ${hotelPrice}сум = ${
      people.length *
      Math.ceil(
        (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
      ) *
      hotelPrice
    } сум.\n
${
  meal
    ? `Питание = ${people.length}${
        people.length === 1 ? " человек" : " человека"
      } * ${Math.ceil(
        (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
      )}${Date.length === 1 ? "день" : "дня"} * ${mealPrice}сум = ${
        people.length *
        Math.ceil(
          (new Date(departureDate) - new Date(arrivalDate)) / (1000 * 3600 * 24)
        ) *
        mealPrice
      } сум.`
    : " "
}\n
Общая сумма ${total}сум
`;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

    axios
      .get(telegramUrl)
      .then(() => {
        console.log("Сообщение отправлено в телеграм.");
      })
      .catch((error) => {
        console.error("Ошибка при отправке сообщения в телеграм:", error);
      });

    const element = document.createElement("a");
    const file = new Blob([reference], { type: "application/pdf" });
    element.href = URL.createObjectURL(file);
    element.download = "spravka.pdf";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div data-aos="zoom-out-down">
      <div
        className="flex justify-center items-center"
        style={{ paddingTop: "20%", paddingBottom: "20%" }}
      >
        <div
          className="md:w-[500px] w-[310px] rounded-xl blur-contents "
          style={{ margin: "0 auto" }}
        >
          <div className="flex justify-center mt-6">
            <form onSubmit={handleSubmit} className="">
              <label className="mt-5">
                Фамилия:
                <input
                  className="mt-1 px-2 py-1 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                Имя:
                <input
                  className="mt-1 px-2 py-1 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                <button
                  className={`px-4 py-2 text-white font-semibold rounded hover:bg-blue-700 ${
                    !firstName || !lastName
                      ? "disabled bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500"
                  }`}
                  disabled={!firstName || !lastName}
                  type="button"
                  onClick={handleAddPerson}
                >
                  Добавить человека
                </button>
              </label>
              <br />
              <br />
              <label>
                Дата прибытия:
                <input
                  type="date"
                  data-date-format="dd-mm-yyyy"
                  value={arrivalDate}
                  className="mt-1 px-2 py-1 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                Дата отъезда:
                <input
                  type="date"
                  className="mt-1 px-2 py-1 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-date-format="dd-mm-yyyy"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                Гостиница:
                <select
                  className="mt-1 px-2 py-1 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={hotel}
                  onChange={(e) => {
                    setHotel(e.target.value);
                    if (e.target.value === "O'zbegim") {
                      setHotelPrice(100000);
                    } else if (e.target.value === "Konchi") {
                      setHotelPrice(40000);
                    }
                  }}
                >
                  <option value="">Выберите гостиницу</option>
                  <option value="O'zbegim">O'zbegim</option>
                  <option value="Konchi">Konchi</option>
                </select>
              </label>
              <br />
              <br />
              <label>
                Питание:
                <input
                  type="checkbox"
                  checked={meal}
                  onChange={(e) => setMeal(e.target.checked)}
                />
              </label>
              <br />
              <br />

              <label>
                Люди:
                {people.length > 0 && (
                  <ul>
                    {people.map((person, index) => (
                      <li key={index}>
                        {person.lastName} {person.firstName}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
              <br />
              <br />
              <label>
                <button
                  type="submit"
                  className={`px-4 py-2 text-white font-semibold rounded hover:bg-blue-700 ${
                    !arrivalDate || !departureDate || !hotel
                      ? "disabled bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500"
                  }`}
                  disabled={!arrivalDate || !departureDate || !hotel}
                >
                  Создать справку
                </button>
              </label>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yangiobod;
