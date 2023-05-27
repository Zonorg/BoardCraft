import React from "react";
import "./home.css";
import BoardCraft from "./boardcraft.json";

const Home = () => {
  return (
    <div className="home">
      {BoardCraft.map((game, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{game.name}</h5>
              <img src={game.img} alt="game" />
              <p className="card-text">{game.description}</p>
              <h6>Min Players: {game.min_players}</h6>
              <h6>Max Players: {game.max_players}</h6>
              <h6>Min Age: {game.min_age} years</h6>
              <h6>Min Playtime: {game.min_playtime} min</h6>
              <h6>Max Playtime: {game.max_playtime} min</h6>
              <h6>Price: ${game.price.toLocaleString().replace(",", ".")}</h6>
              <a href="#" className="card-link">
                View
              </a>
              <a href="#" className="card-link">
                Edit
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
