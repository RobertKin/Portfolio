import "../Team/Team.css";

import React from "react";
import data from "../../../../data.json";

function Team() {
  const { omer, robert } = data.aboutus;

  return (
    <div className="team">
      <div id="box2" className="team-box">
        <div className="box-a">
          <h1>Creative and Professional</h1>
          <h2>You Dream it,We Build it.</h2>
          <p>
            <i>R & O team</i> takes pride in its award-wining team of
            designers,developers,strategists, and consultants who are skiled
            enough to turn your creative ideas into impactful realities.
          </p>
        </div>

        <div className="box-b">
          <h2 className="h2">Our Team</h2>
          <div className="pic-container">
            <div className="img-1"></div>
            <div className="info-container">
              <h3>{omer.name}</h3>
              <p>{omer.description}</p>
            </div>
          </div>

          <div className="pic-container">
            <div className="img-2"></div>
            <div className="info-container">
              <h3>{robert.name}</h3>
              <p>{robert.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
