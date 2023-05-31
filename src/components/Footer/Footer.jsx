import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="contacto">
        <ul className="data" id="contacto">
          <li>
            Teléfono
            <p>+54-9-260-435-0220</p>
          </li>
          <li>
            Email
            <p>gabrielrosa@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <ul className="footer-social">
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
        <p>
          Copyright © {new Date().getFullYear()} BoardCraft. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
