import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Boardcraft from "../../../boardcraft.json";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();

  const selectedGame = Boardcraft.find((game) => game.id === id);

  const [selectedImage, setSelectedImage] = useState(selectedGame.img);
  const imageList = {
    img: selectedGame.img,
    img1: selectedGame.img1,
    img2: selectedGame.img2,
    img3: selectedGame.img3,
    img4: selectedGame.img4,
    img5: selectedGame.img5,
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleWhatsAppClick = () => {
    const message = `Hola, quiero realizar un pedido del juego: ${selectedGame.name}. ¿Podrían proporcionarme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=542604676270&text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="detail-container">
      <Link to="/" className="detail-link">
        Volver
      </Link>
      {selectedGame ? (
        <div className="detail">
          <h2 className="detail-title">{selectedGame.name}</h2>
            <p className="detail-description">{selectedGame.description}</p>
          <img src={selectedImage} alt={selectedGame.name} className="detail-image" />
          <div className="image-list-container">
            {Object.keys(imageList).map((key, index) => {
              const image = imageList[key];
              if (image && index > 0) {
                return (
                  <img
                    key={key}
                    src={image}
                    alt={`Image ${key}`}
                    className="thumbnail-image"
                    onMouseEnter={() => handleImageClick(image)}
                  />
                );
              }
              return null;
            })}
          </div>
          <p className="detail-price">Precio: ${selectedGame.price}</p>
          <p>
            Jugadores: {selectedGame.min_players} - {selectedGame.max_players}
          </p>
          <p>
            Tiempo de juego: {selectedGame.min_playtime} - {selectedGame.max_playtime} minutos
          </p>
          <p>Edad mínima: {selectedGame.min_age}+</p>
          <button onClick={handleWhatsAppClick} className="detail-whatsapp-button">
            Realizar pedido por WhatsApp
          </button>
        </div>
      ) : (
        <p>¡Vaya, parece que no tenemos este juego!</p>
      )}
    </div>
  );
};

export default Detail;