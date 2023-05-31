import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cards.css";
import BoardCraft from "./boardcraft.json";
import { MdGroups, MdPerson, MdTimer } from "react-icons/md";

const Cards = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleClick = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handleMouseLeave = (index) => {
    setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
  };

  return (
    <div id="catalogo">
      <h2>Catálogo</h2>
      <div className="cards">
        {BoardCraft.map((game, index) => {
          const isFlipped = flippedCards.includes(index);
          return (
            <div
              className={`card ${isFlipped ? "flipped" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <h5 className="card-title">{game.name}</h5>
                  <img src={game.img} alt="game" />
                  <p>${game.price.toLocaleString().replace(",", ".")}</p>
                </div>
                <div className="card-back">
                  <div className="card-details">
                    <div>
                      <MdGroups size={30} />
                      <p>
                        {game.min_players} - {game.max_players}
                      </p>
                    </div>
                    <div>
                      <MdPerson size={30} />
                      <p>+ {game.min_age}</p>
                    </div>
                    <div>
                      <MdTimer size={30} />
                      <p>{game.max_playtime} min</p>
                    </div>
                    <div>
                      <Link to="/Comprar" className="button-detail">
                        VER MÁS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
