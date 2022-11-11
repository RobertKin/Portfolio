import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <main id="box" className="main">
      <div className="main_hero">
        <h1>We are Front-end web developers</h1>
        <h4>We make wonderful things</h4>
        <p>
          We bulid website and create unlimited pathways for the brand to capure
          leads and enjoy unexpected conversions. <i>R & O teams</i> believes in
          delivering expectations that are doable for our experts. We promise
          nothing but perfection when it comes to website development.
          <i>R & O teams</i> has a firm approach for every web design that is
          further tailored to the business niche of the brand. The proficient
          strategies for every UI/UX of our website design company open
          plentiful leads ready to be converted.
        </p>
        <ul className="hero-list">
          <li className="list"><i>Costom website design & development</i></li>
          <li className="list"><i>Mobile responsive web designs</i></li>
          <li className="list"><i>Advance conversions</i></li>
          <li className="list"><i>Tailored marketing strategies</i></li>
          <li className="list"><i>Search engine friendly websites</i></li>
        </ul>
      </div>
    </main>
  );
}

export default Hero;
