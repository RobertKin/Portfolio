import React from "react";
import "../Work/Work.css";

function Work() {
  return (
    <div className="work">
        
      <div id="box3" className="work-box">
      <div className="work-circle-container">
          <div className="work-circle"></div></div>
        <div className="box-a">
          <h1>Selected work</h1>
          <div className="work-info">
            <div id="work" className="work1">
              <p>All</p>
            </div>
            <div id="work" className="work2">
              <p>Web Desing</p>
            </div>
            <div id="work" className="work3">
              <p>Logo Desing</p>
            </div>
            <div id="work" className="work4">
              Branding
            </div>
          </div>

          <div className="work-img">
            <div id="img" className="img1"></div>
            <div id="img" className="img2"></div>
            <div id="img" className="img3"></div>
            <div id="img" className="img4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
