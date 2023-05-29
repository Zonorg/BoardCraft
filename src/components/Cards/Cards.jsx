import React, { useState } from "react";
import "./cards.css";
import BoardCraft from "./boardcraft.json";

const Cards = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleClick = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <div className="cards">
      {BoardCraft.map((game, index) => {
        const isFlipped = flippedCards.includes(index);
        return (
          <div
            className={`card ${isFlipped ? "flipped" : ""}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h5 className="card-title">{game.name}</h5>
                <img src={game.img} alt="game" />
              </div>
              <div className="card-back">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-description">{game.description}</p>
                <div className="card-details">
                  <div>
                    <h6>Min Players:</h6>
                    <p>{game.min_players}</p>
                  </div>
                  <div>
                    <h6>Max Players:</h6>
                    <p>{game.max_players}</p>
                  </div>
                  <div>
                    <h6>Min Age:</h6>
                    <p>{game.min_age} years</p>
                  </div>
                  <div>
                    <h6>Min Playtime:</h6>
                    <p>{game.min_playtime} min</p>
                  </div>
                  <div>
                    <h6>Max Playtime:</h6>
                    <p>{game.max_playtime} min</p>
                  </div>
                  <div>
                    <h6>Price:</h6>
                    <p>${game.price.toLocaleString().replace(",", ".")}</p>
                  </div>
                </div>
                <div className="card-links">
                  <a href="#" className="card-link">
                    View
                  </a>
                  <a href="#" className="card-link">
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
