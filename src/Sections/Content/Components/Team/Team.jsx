import React from "react";
import "../Team/Team.css";


function Team() {


  return (
    <div className="team">
      <div id="box2" className="team-box">
        <div className="box-a">
          <h1>Creative and Professional</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            perferendis inventore facilis, pariatur ad laboriosam sint omnis?
            Sapiente, repellat commodi. Perspiciatis quibusdam animi temporibus
            sunt repudiandae! Similique Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Neque dolore itaque et ipsum repellat maxime id
            pariatur aliquid magni asperiores? corporis aliquam ut.
          </p>
        </div>

        <div className="box-b">
          <h1>Our Team</h1>
          <div className="pic-container">
            <div className="img-1"></div>
            <div className="info-container">
              <h4>Omer Aslani</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                eaque.
              </p>
            </div>

          </div>


          <div className="pic-container">
            <div className="img-2"></div>
            <div className="info-container">
              <h4>Robert Firanji</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                eaque.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Team;
