import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import EbooksDetails from "./Components/pages/EbooksDetails";
import Navbar from "./Components/Navbar";
import Login from "./Components/pages/Login";
import SignIn from "./Components/pages/SignIn";
import { Toaster } from "sonner";
import { ToastContainer } from "react-toastify";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ToastContainer autoClose={3000} />

      {!pathname.includes("login") && !pathname.includes("signin") && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/ebook/:bookName" element={<EbooksDetails />} />
      </Routes>
    </>
  );
}

export default App;
