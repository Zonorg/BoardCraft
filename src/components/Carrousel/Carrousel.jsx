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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://res.cloudinary.com/dk1bxaazz/image/upload/v1685382078/Boardcraft/Catan_f9neuk.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://res.cloudinary.com/dk1bxaazz/image/upload/v1685382078/Boardcraft/Catan_f9neuk.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
