import React from "react";
import "../Footer/Contact.css";
import "./Components/Circle/Half.css";
import Half from "./Components/Circle/Half";
import Form from "./Components/Forme/Form";
import FooterNav from "./Components/FooterNav/FooterNav";
import FooterBottom from "./Components/FooterBottom/FooterBottom";











function Footer() {
  

  return (
    <div className="footer">
        <Half />
        <Form />
        <FooterNav />
        <FooterBottom />
    </div>

  );
}

export default Footer;
