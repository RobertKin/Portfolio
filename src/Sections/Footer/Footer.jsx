import React from "react";
import "../Footer/Contact.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";






function Footer() {
  const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div className="footer">
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>text</h2>
        </div>
        <div className="footer-content-right">
          <form  className="contact-us-form" action="">
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="text" placeholder="Email" />
            <input className="input" type="texteare" placeholder="Message" />
          </form>
        </div>


      </div>

      <div className="box-1">
        <div className="footer-nav">
          <div id="footer" className="footer1">
            <p>Home</p>
          </div>
          <div id="footer" className="footer2">
            <p>About Us</p>
          </div>
          <div id="footer" className="footer3">
            <p>Portfolio</p>
          </div>
          <div id="footer" className="footer4">
            Service
          </div>
          <div id="footer" className="footer4">
            Contat Us
          </div>
        </div>
        <div className="footer-icon">
          <div id="icon" className="icon1">
            <a href="">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </div>
          <div id="icon" className="icon2">
            <a href="">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </div>
          <div id="icon" className="icon3">
            <a href="">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </div>
          <div id="icon" className="icon4">
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy 2022 Designed by <span>R & O</span>
          </p>
        </div>
      </div>
    </div>

  );
}

export default Footer;
