import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cards.css";
import BoardCraft from "../../../boardcraft.json";
import { MdGroups, MdPerson, MdTimer } from "react-icons/md";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = BoardCraft.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <h2 className="striped-heading">Catálogo</h2>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(BoardCraft.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="cards">
        {currentProducts.map((game, index) => {
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
                  <img src={game.img} alt="game" />
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-price">
                    ${game.price.toLocaleString().replace(",", ".")}
                  </p>
                  <Link to={`/productos/${game.id}`} className="button-detail">
                    VER MÁS
                  </Link>
                </div>
                <div className="card-back">
                  <div className="card-details">
                    <MdGroups size={30} />
                    <p>
                      {game.min_players} - {game.max_players}
                    </p>

                    <MdPerson size={30} />
                    <p>+ {game.min_age}</p>

                    <MdTimer size={30} />
                    <p>{game.max_playtime} min</p>
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
