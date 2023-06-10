import React from "react";
import { Link, useParams } from "react-router-dom";
import "./detail.css";
import Boardcraft from "../../../boardcraft.json";

const Detail = () => {
  const { id } = useParams();

  const selectedGame = Boardcraft.find((game) => game.id === id);

  return (
    <div className="detail">
      <Link to="/">Volver</Link>
      {selectedGame ? (
        <div>
          <h2>{selectedGame.name}</h2>
          <p>{selectedGame.description}</p>
          <img src={selectedGame.img} alt={selectedGame.name} />
          <p>Precio: ${selectedGame.price}</p>
          <p>
            Jugadores: {selectedGame.min_players} - {selectedGame.max_players}
          </p>
          <p>
            Tiempo de juego: {selectedGame.min_playtime} -{" "}
            {selectedGame.max_playtime} minutos
          </p>
          <p>Edad mínima: {selectedGame.min_age}+</p>
        </div>
      ) : (
        <p>¡Vaya, parece que no tenemos este juego!</p>
      )}
    </div>
  );
};

export default Detail;
