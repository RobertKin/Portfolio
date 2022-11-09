import React from "react";
import "../Footer/Contact.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="box-1">
          <h1>Selected work</h1>
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
              Ikonice
            </div>
            <div id="icon" className="icon2">
              Ikonice
            </div>
            <div id="icon" className="icon3">
              Ikonice
            </div>
            <div id="icon" className="icon4">
              Ikonice
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              copyright &copy 2022 Designed by <span>R & O</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
