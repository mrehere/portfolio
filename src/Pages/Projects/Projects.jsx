import "./Projects.scss";
import easer from "../../assets/project/easer.png";

import close from "../../assets/icons/close.svg";
import details from "../../assets/icons/details.svg";

import rct from "../../assets/icons/dev/react.svg";
import sass from "../../assets/icons/dev/sass.svg";
import js from "../../assets/icons/dev/js.svg";
import { useState } from "react";

function Projects() {
  const [activeDetails, setActiveDetails] = useState(null);

  const handleDetails = (project) => {
    setActiveDetails(project ? project : null);
  };
  return (
    <main className="projects">
      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_easer</p>

          <button className="projects__view-button">view-projects</button>
        </div>

        <div className="projects__thumbnail-container">
          <img src={easer} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          <div className="projects__name-tech">
            <img src={rct} alt="" className="projects__tech" />

            <img src={sass} alt="" className="projects__tech" />

            <img src={js} alt="" className="projects__tech" />
          </div>

          <div className="projects__button-container">
            <img
              onClick={() => handleDetails("easer")}
              src={details}
              alt=""
              className="projects__img"
            />
            <button
              onClick={() => handleDetails("easer")}
              className="projects__button"
            >
              details
            </button>
          </div>
        </div>

        {activeDetails === "easer" && (
          <div className="projects__description-container">
            <p className="projects__description">
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah
            </p>
            <img
              onClick={handleDetails}
              src={close}
              alt=""
              className="projects__close"
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default Projects;
