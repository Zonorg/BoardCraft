import React, { useState } from "react";
import "./home.css";
import Carrousel from "../Carrousel/Carrousel";
import Cards from "../Cards/Cards";

const Home = () => {

  return (
    <div className="home">
      <Carrousel />
      <Cards />
    </div>
  );
};

export default Home;
