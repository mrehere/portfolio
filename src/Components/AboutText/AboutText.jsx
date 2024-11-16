import "./AboutText.scss";

//language
import c from "../../assets/icons/dev/C.svg";
import cplus from "../../assets/icons/dev/C++.svg";
import js from "../../assets/icons/dev/js.svg";
import py from "../../assets/icons/dev/python.svg";

//front-end
import rct from "../../assets/icons/dev/react.svg";
import npm from "../../assets/icons/dev/npm.svg";
import html from "../../assets/icons/dev/html.svg";
import css from "../../assets/icons/dev/css.svg";
import sass from "../../assets/icons/dev/sass.svg";

//back-end
import node from "../../assets/icons/dev/node.svg";
import express from "../../assets/icons/dev/express.svg";
import mysql from "../../assets/icons/dev/mysql.svg";
import knex from "../../assets/icons/dev/knex.svg";

// tools
import vs from "../../assets/icons/dev/vs.svg";
import postman from "../../assets/icons/dev/postman.svg";
import axios from "../../assets/icons/dev/axios.svg";
import git from "../../assets/icons/dev/git.svg";
import heroku from "../../assets/icons/dev/heroku.svg";
import netlify from "../../assets/icons/dev/netlify.svg";

const AboutText = ({ section }) => {
  const content = {
    // ------------ pro-info----------
    "hard-skills": (
      <div className="text__container" id="hard-skills">
        <p className="text__header">
          <span className="text__header text__header-section">
            / / professional-info
          </span>
          <span className="text__header text__header-subSection">
            / hard-skills
          </span>
        </p>
        {/* languages */}
        <div className="text__skill-container">
          <p className="text__language-header">languages</p>

          <div className="text__language-container">
            <div className="text__language-item-container">
              <img src={js} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">JavaScript</p>
            </div>
            <div className="text__language-item-container">
              <img src={c} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">C</p>
            </div>
            <div className="text__language-item-container">
              <img src={cplus} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">C++</p>
            </div>
            <div className="text__language-item-container">
              <img src={py} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Python</p>
            </div>
          </div>
        </div>
        {/* front-end */}
        <div className="text__skill-container">
          <p className="text__language-header">front-end</p>

          <div className="text__language-container">
            <div className="text__language-item-container">
              <img src={rct} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">React.js</p>
            </div>
            <div className="text__language-item-container">
              <img src={html} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">HTML</p>
            </div>
            <div className="text__language-item-container">
              <img src={css} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">CSS</p>
            </div>
            <div className="text__language-item-container">
              <img src={sass} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Sass</p>
            </div>

            <div className="text__language-item-container">
              <img src={npm} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">npm</p>
            </div>
          </div>
        </div>
        {/* backend */}
        <div className="text__skill-container">
          <p className="text__language-header">back-end</p>

          <div className="text__language-container">
            <div className="text__language-item-container">
              <img src={node} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Node.js</p>
            </div>
            <div className="text__language-item-container">
              <img src={express} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Express.js</p>
            </div>
            <div className="text__language-item-container">
              <img src={mysql} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">MySQL</p>
            </div>
            <div className="text__language-item-container">
              <img src={knex} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Knex.js</p>
            </div>
          </div>
        </div>
        {/* tools */}
        <div className="text__skill-container">
          <p className="text__language-header">tools & deployment</p>

          <div className="text__language-container">
            <div className="text__language-item-container">
              <img src={vs} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">VS Code</p>
            </div>
            <div className="text__language-item-container">
              <img src={postman} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Postman</p>
            </div>
            <div className="text__language-item-container">
              <img src={axios} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Axios</p>
            </div>
            <div className="text__language-item-container">
              <img src={git} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Git</p>
            </div>
            <div className="text__language-item-container">
              <img src={heroku} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Heroku</p>
            </div>
            <div className="text__language-item-container">
              <img src={netlify} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Netlify</p>
            </div>
          </div>
        </div>
      </div>
    ),

    "soft-skills": (
      <div className="text__container" id="soft-skills">
        Paragraph: Soft Skills
      </div>
    ),

    education: (
      <div className="text__container" id="education">
        Paragraph: education
      </div>
    ),

    hobbies: (
      <div className="text__container" id="hobbies">
        Paragraph: hobbies
      </div>
    ),

    values: (
      <div className="text__container" id="hobbies">
        Paragraph: values
      </div>
    ),
  };

  return (
    content[section] || (
      <div className="alterTextContainer">Select a section to explore</div>
    )
  );
};
export default AboutText;
