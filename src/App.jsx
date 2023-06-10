import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
