import Carousel from "react-bootstrap/Carousel";
import "./carrousel.css";

function Carrousel() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://res.cloudinary.com/dk1bxaazz/image/upload/v1685382078/Boardcraft/Catan_f9neuk.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://res.cloudinary.com/dk1bxaazz/image/upload/v1685382078/Boardcraft/Catan_f9neuk.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://res.cloudinary.com/dk1bxaazz/image/upload/v1685382078/Boardcraft/Catan_f9neuk.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
