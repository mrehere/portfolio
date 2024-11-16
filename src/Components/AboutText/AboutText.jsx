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
import firebase from "../../assets/icons/dev/firebase.svg";
import heroku from "../../assets/icons/dev/heroku.svg";
import netlify from "../../assets/icons/dev/netlify.svg";

// soft-skills
import communcation from "../../assets/icons/soft/communication.svg";
import teamwork from "../../assets/icons/soft/teamwork.svg";
import problem from "../../assets/icons/soft/problem-solving.svg";
import adaptivility from "../../assets/icons/soft/adaptivility.svg";
import leadership from "../../assets/icons/soft/leadership.svg";
import time from "../../assets/icons/soft/time-management.svg";
import conflict from "../../assets/icons/soft/conflict-resolution.svg";
import critical from "../../assets/icons/soft/critical-thinking.svg";
import attention from "../../assets/icons/soft/attention.svg";
import patience from "../../assets/icons/soft/patience.svg";
import multitask from "../../assets/icons/soft/multi-task.svg";
import empathy from "../../assets/icons/soft/empathy.svg";
import innovative from "../../assets/icons/soft/innovative.svg";

// education
import bs from "../../assets/logos/brainstation.webp";
import mun from "../../assets/logos/mun.jpg";
import aiub from "../../assets/logos/aiub.png";

// hobbies
import music from "../../assets/icons/about/music.svg";
import game from "../../assets/icons/about/game.svg";

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
        {/* // --- hard-skills --- */}
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
              <img src={firebase} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Firebase</p>
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

    // ------- soft-skills----------
    "soft-skills": (
      <div className="text__container" id="soft-skills">
        <p className="text__header">
          <span className="text__header text__header-section">
            / / professional-info
          </span>
          <span className="text__header text__header-subSection">
            / soft-skills
          </span>
        </p>

        <div className="text__skill-container">
          <p className="text__language-header">personal strengths</p>

          <div className="text__language-container">
            <div className="text__language-item-container">
              <img src={communcation} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Communication</p>
            </div>
            <div className="text__language-item-container">
              <img src={teamwork} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Teamwork</p>
            </div>
            <div className="text__language-item-container">
              <img src={problem} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Problem Solving</p>
            </div>
            <div className="text__language-item-container">
              <img src={adaptivility} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Adaptivility</p>
            </div>

            <div className="text__language-item-container">
              <img src={leadership} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Leadership</p>
            </div>
            <div className="text__language-item-container">
              <img src={time} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Time Management</p>
            </div>
            <div className="text__language-item-container">
              <img src={conflict} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">
                Conflict Resolution
              </p>
            </div>
            <div className="text__language-item-container">
              <img src={attention} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">
                Attention-to-Details
              </p>
            </div>
            <div className="text__language-item-container">
              <img src={empathy} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Empathy</p>
            </div>
            <div className="text__language-item-container">
              <img src={critical} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Critical Thinking</p>
            </div>
            <div className="text__language-item-container">
              <img src={innovative} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Creativity</p>
            </div>
            <div className="text__language-item-container">
              <img src={patience} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Patience</p>
            </div>
            <div className="text__language-item-container">
              <img src={multitask} alt="" className="text__language-img" />
              <p className="text__language-item-subtitle">Multitask</p>
            </div>
          </div>
        </div>
      </div>
    ),

    // ------- education----------
    education: (
      <div className="text__container" id="education">
        <p className="text__header">
          <span className="text__header text__header-section">
            / / professional-info
          </span>
          <span className="text__header text__header-subSection">
            / education
          </span>
        </p>
        {/* brainstation */}
        <div className="text__education-container">
          <div className="text__education">
            <a
              href="https://brainstation.io/online/software-engineering-bootcamp"
              target="_blank"
            >
              <img
                src={bs}
                alt="brainstation"
                className="text__education-img"
              />
            </a>

            <div className="text__education-info">
              <p className="text__education-degree">
                <span className="text">Diploma, </span>
                <span className="text__education-name">
                  Software Engineering
                </span>
              </p>

              <p className="text__education-location">Toronto, On</p>

              <p className="text__education-grade">Grade: 93% / 100%</p>
              <div className="text__education-timeline">
                Aug 2024 - Nov 2024
              </div>
            </div>
          </div>
        </div>
        {/* mun */}
        <div className="text__education-container">
          <div className="text__education">
            <a
              href="https://www.mun.ca/engineering/graduate/programs/energy-systems-engineering/"
              target="_blank"
            >
              <img
                src={mun}
                alt="brainstation"
                className="text__education-img"
              />
            </a>

            <div className="text__education-info">
              <p className="text__education-degree">
                <span className="text"> Master of Applied Science, </span>
                <span className="text__education-name">
                  Energy Systems Engineering
                </span>
              </p>

              <p className="text__education-location">St. John's, Nl</p>

              <p className="text__education-grade">GPA: 3.80 / 4.00</p>
              <div className="text__education-timeline">
                Sep 2021 - Apr 2023
              </div>
            </div>
          </div>
        </div>

        {/* aiub */}
        <div className="text__education-container">
          <div className="text__education">
            <a
              href="https://www.aiub.edu/faculties/engg/departments/eee"
              target="_blank"
            >
              <img
                src={aiub}
                alt="brainstation"
                className="text__education-img"
              />
            </a>

            <div className="text__education-info">
              <p className="text__education-degree">
                <span className="text"> Bachelor of Science, </span>
                <span className="text__education-name">
                  Electrical & Electronics Engineering
                </span>
              </p>

              <p className="text__education-location">Dhaka, Bangladesh</p>

              <p className="text__education-grade">GPA: 3.98 / 4.00</p>
              <div className="text__education-timeline">
                Sep 2016 - Sep 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // ---------- hobbies ----------
    hobbies: (
      <div className="text__container" id="hobbies">
        <p className="text__header">
          <span className="text__header text__header-section">
            / / personal-info
          </span>
          <span className="text__header text__header-subSection">
            / hobbies
          </span>
        </p>

        {/* favourite music */}
        <div className="text__hobby-container">
          <div className="text__hobby-logo">
            <img src={music} alt="" className="text__hobby-img" />

            <p className="text__hobby-line">
              Exploring diverse genres of Music and playing the guitar
            </p>
          </div>

          <p className="text__hobby-section">favourite genre</p>
          <div className="text__hobby-item-container">
            <p className="text__hobby-item">Rock</p>
            <p className="text__hobby-item">Progressive Metal</p>
            <p className="text__hobby-item">Folk</p>
            <p className="text__hobby-item">Indian Classical</p>

            <p className="text__hobby-item">Indie</p>
          </div>

          <p className="text__hobby-section">favourite bands</p>

          {/* favourite bands */}
          <div className="text__hobby-item-container">
            <a
              href="https://en.wikipedia.org/wiki/Artcell"
              target="_blank"
              className="text__hobby-item-link"
            >
              <p className="text__hobby-item-2">Artcell</p>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Warfaze"
              target="_blank"
              className="text__hobby-item-link"
            >
              <p className="text__hobby-item-2">Warfaze</p>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Meghdol"
              target="_blank"
              className="text__hobby-item-link"
            >
              <p className="text__hobby-item-2">Meghdol</p>
            </a>

            <a
              href="https://en.wikipedia.org/wiki/Iron_Maiden"
              target="_blank"
              className="text__hobby-item-link"
            >
              <p className="text__hobby-item-2">Iron Maiden</p>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Rush_(band)"
              target="_blank"
              className="text__hobby-item-link"
            >
              <p className="text__hobby-item-2">Rush</p>
            </a>

            <a
              href="https://en.wikipedia.org/wiki/Dream_Theater"
              target="_blank"
              className="text__hobby-item-link"
            >
              <p className="text__hobby-item-2">Dream Theater</p>
            </a>
          </div>
        </div>
        {/* games */}
        <div className="text__hobby-logo">
          <img src={game} alt="" className="text__hobby-img" />

          <p className="text__hobby-line">
            Passionate about story-driven RPGs and immersive indie games
          </p>
        </div>
      </div>
    ),

    values: (
      <div className="text__container" id="hobbies">
        <p className="text__header">
          <span className="text__header text__header-section">
            / / personal-info
          </span>
          <span className="text__header text__header-subSection">/ values</span>
        </p>
      </div>
    ),
  };

  return (
    content[section] || (
      <div className="alterTextContainer">
        <p className="text__header">
          <span className="text__header text__header-section">
            / / select a section to
          </span>
          <span className="text__header text__header-subSection">
            / explore
          </span>
        </p>
      </div>
    )
  );
};
export default AboutText;
