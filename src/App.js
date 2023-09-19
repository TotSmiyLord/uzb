import React, { useState, useEffect } from "react";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home/HomeFirst";
import Buyurtma from "./components/order/Buyurtma";
import Joylashuv from "./components/Joylashuv";
import Boglan from "./components/Boglan";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import AdminPanel from "./components/Admin/AdminPanel";
import Admin from "./components/Admin/Adminstr";
import Angren from "./components/Admin/adminlayauts/Angren_etyud_sharq";
import Yangiobod from "./components/Admin/adminlayauts/Yangiobod_vostok_turizm";
import Rooms from "./components/rooms/Rooms";

function App() {
  const [isAdminPage, setIsAdminPage] = useState(false);
  const [isFormPage, setIsFormPage] = useState(false);
  const [isFormaPage, setIsFormaPage] = useState(false);
  const [isRooms, setIsRooms] = useState(false);
  const [isOrder, setOrder] = useState(false);
  const [isKont, setKont] = useState(false);

  const location = useLocation();

  // Проверяем, находится ли пользователь на странице администратора
  useEffect(() => {
    setIsAdminPage(location.pathname === "/admin-page");
  }, [location]);

  // Проверяем, находится ли пользователь на странице /angren
  useEffect(() => {
    setIsFormPage(location.pathname === "/angren");
  }, [location]);

  // Проверяем, находится ли пользователь на странице /yangiobod
  useEffect(() => {
    setIsFormaPage(location.pathname === "/yangiobod");
  }, [location]);

  useEffect(() => {
    setIsRooms(location.pathname === "/rooms");
  }, [location]);
  useEffect(() => {
    setOrder(location.pathname === "/buyurtma");
  }, [location]);

  useEffect(() => {
    setKont(location.pathname === "/boglan");
  }, [location]);

  // Условный рендеринг для компонентов <Header /> и <Navbar />
  const renderHeaderAndNavbar = () => {
    if (
      isAdminPage ||
      isFormPage ||
      isFormaPage ||
      isRooms ||
      isOrder ||
      isKont
    ) {
      return null;
    }
    return (
      <>
        <Header />
        <Navbar />
      </>
    );
  };

  return (
    <div className="container overflow-hidden mx-auto">
      {renderHeaderAndNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyurtma" element={<Buyurtma />} />
        <Route path="/boglan" element={<Boglan />} />
        <Route path="/joylashuv" element={<Joylashuv />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin-page" element={<Admin />} />
        <Route path="/yangiobod" element={<Yangiobod />} />
        <Route path="/angren" element={<Angren />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </div>
  );
}

export default App;
