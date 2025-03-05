import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/pages/Home";
import { Route, Routes } from "react-router-dom";
import EbooksDetails from "./Components/pages/EbooksDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebook/:bookName" element={<EbooksDetails />} />
      </Routes>
    </>
  );
}

export default App;
