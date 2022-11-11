import "../Team/Team.css";

import data from "../../../../data.json";

function Team() {
  const { omer, robert } = data.aboutus;

  return (
    <section className="team">
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
        <div className="team-circle-container">
          <div className="team-circle"></div>
        </div>
      </div>
    </section>
  );
}

export default Team;
