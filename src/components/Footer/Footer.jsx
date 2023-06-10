import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="form" id="contacto">
          <h4>Envíanos tu consulta</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder="Mensaje"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul className="data">
            <li>
              Teléfono: <span>+54-9-260-435-0220</span>
            </li>
            <li>
              Email: <span>gabrielrosa@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <h4>Síguenos en redes sociales</h4>
        <ul>
          <li>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} BoardCraft. Todos los derechos reservados.
      </p>
    </div>
  );
}

export default Footer;
