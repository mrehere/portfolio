import "./Projects.scss";
import easer from "../../assets/project/easer.png";
import easerapi from "../../assets/project/easer-api.png";
import brainstock from "../../assets/project/brainstock.png";
import brainflix from "../../assets/project/brainflix.png";
import brainflixapi from "../../assets/project/brainflix-api.png";
import bandsite from "../../assets/project/bandsite.png";
import coffeshop from "../../assets/project/coffee-shop.png";

import close from "../../assets/icons/close.svg";
import details from "../../assets/icons/details.svg";

//front-end
import rct from "../../assets/icons/dev/react.svg";
import sass from "../../assets/icons/dev/sass.svg";
import js from "../../assets/icons/dev/js.svg";
import firebase from "../../assets/icons/dev/firebase.svg";
import html from "../../assets/icons/dev/html.svg";
import css from "../../assets/icons/dev/css.svg";
import axios from "../../assets/icons/dev/axios.svg";
//back-end
import express from "../../assets/icons/dev/express.svg";
import node from "../../assets/icons/dev/node.svg";
import mysql from "../../assets/icons/dev/mysql.svg";
import knex from "../../assets/icons/dev/knex.svg";

import netlify from "../../assets/icons/dev/netlify.svg";
import heroku from "../../assets/icons/dev/heroku.svg";
import postman from "../../assets/icons/dev/postman.svg";
import { useState } from "react";

function Projects() {
  const [activeDetails, setActiveDetails] = useState(null);

  const handleDetails = (project) => {
    setActiveDetails(project ? project : null);
  };
  return (
    <main className="projects">
      {/* project easer */}
      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_easer</p>

          <a href="https://easer.netlify.app/" target="_blank">
            <button className="projects__view-button">view-project</button>
          </a>
        </div>

        <div className="projects__thumbnail-container">
          <img src={easer} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          {/* tech-stacks */}
          <div className="projects__name-tech">
            <div data-id="React" className="projects__tech-container">
              <img src={rct} alt="" className="projects__tech" />
            </div>

            <div data-id="Sass" className="projects__tech-container">
              <img src={sass} alt="" className="projects__tech" />
            </div>

            <div data-id="JavaScript" className="projects__tech-container">
              <img src={js} alt="" className="projects__tech" />
            </div>

            <div data-id="Firebase" className="projects__tech-container">
              <img src={firebase} alt="" className="projects__tech" />
            </div>
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
              Developed a responsive, mobile-first web application using React,
              JavaScript, and SASS to promote emotional well-being. Designed a
              user-friendly UI featuring mood logging, journaling, personalized
              motivational quotes, and a guest mood feature. Integrated Firebase
              Authentication to handle secure user login and data privacy,
              ensuring a seamless experience across devices.
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
      {/* project easer api */}
      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_easer-api</p>

          <a
            href="https://mrehere-easer-database-36c68bd11f60.herokuapp.com/"
            target="_blank"
          >
            <button className="projects__view-button">view-project</button>
          </a>
        </div>

        <div className="projects__thumbnail-container">
          <img src={easerapi} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          {/* ----- */}
          <div className="projects__name-tech">
            <div data-id="Express.js" className="projects__tech-container">
              <img src={express} alt="" className="projects__tech" />
            </div>

            <div data-id="Node.js" className="projects__tech-container">
              <img src={node} alt="" className="projects__tech" />
            </div>

            <div data-id="MySQL" className="projects__tech-container">
              <img src={mysql} alt="" className="projects__tech" />
            </div>

            <div data-id="Knex.js" className="projects__tech-container">
              <img src={knex} alt="" className="projects__tech" />
            </div>
          </div>

          <div className="projects__button-container">
            <img
              onClick={() => handleDetails("easerapi")}
              src={details}
              alt=""
              className="projects__img"
            />
            <button
              onClick={() => handleDetails("easerapi")}
              className="projects__button"
            >
              details
            </button>
          </div>
        </div>

        {activeDetails === "easerapi" && (
          <div className="projects__description-container">
            <p className="projects__description">
              Built a secure and scalable back-end with Node.js, Express.js, and
              Knex.js, ensuring efficient database management with MySQL.
              Integrated Firebase Authentication to fetch user-based data
              securely, safeguarding privacy, and deployed data-driven insights
              for mood tracking.
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

      {/* project brainStock */}
      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_inStock</p>

          <a href="https://mrehere-brainstock.netlify.app/" target="_blank">
            <button className="projects__view-button">view-project</button>
          </a>
        </div>

        <div className="projects__thumbnail-container">
          <img src={brainstock} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          {/* ----- */}
          <div className="projects__name-tech">
            <div data-id="React.js" className="projects__tech-container">
              <img src={rct} alt="" className="projects__tech" />
            </div>

            <div data-id="Sass" className="projects__tech-container">
              <img src={sass} alt="" className="projects__tech" />
            </div>

            <div data-id="JavaScript" className="projects__tech-container">
              <img src={js} alt="" className="projects__tech" />
            </div>

            <div data-id="Express.js" className="projects__tech-container">
              <img src={express} alt="" className="projects__tech" />
            </div>

            <div data-id="MySQL" className="projects__tech-container">
              <img src={mysql} alt="" className="projects__tech" />
            </div>
            <div data-id="Knex.js" className="projects__tech-container">
              <img src={knex} alt="" className="projects__tech" />
            </div>
          </div>

          <div className="projects__button-container">
            <img
              onClick={() => handleDetails("brainstock")}
              src={details}
              alt=""
              className="projects__img"
            />
            <button
              onClick={() => handleDetails("brainstock")}
              className="projects__button"
            >
              details
            </button>
          </div>
        </div>

        {activeDetails === "brainstock" && (
          <div className="projects__description-container">
            <p className="projects__description">
              Developed inStock, a full-stack inventory management app for
              tracking and managing warehouse inventories with real-time
              updates. Built a responsive SPA using React, Sass, and JavaScript,
              and implemented a scalable back-end with Express.js, Knex, and
              MySQL. Utilized API integration for seamless CRUD operations,
              following Agile methodologies with Jira and Git Flow for efficient
              team collaboration.
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

      {/* project brainflix */}
      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_brainflix</p>

          <a href="https://mrehere-brainflix.netlify.app/" target="_blank">
            <button className="projects__view-button">view-project</button>
          </a>
        </div>

        <div className="projects__thumbnail-container">
          <img src={brainflix} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          {/* ----- */}
          <div className="projects__name-tech">
            <div data-id="React.js" className="projects__tech-container">
              <img src={rct} alt="" className="projects__tech" />
            </div>

            <div data-id="Sass" className="projects__tech-container">
              <img src={sass} alt="" className="projects__tech" />
            </div>

            <div data-id="JavaScript" className="projects__tech-container">
              <img src={js} alt="" className="projects__tech" />
            </div>

            <div data-id="Postman" className="projects__tech-container">
              <img src={postman} alt="" className="projects__tech" />
            </div>

            <div data-id="Netlify" className="projects__tech-container">
              <img src={netlify} alt="" className="projects__tech" />
            </div>
          </div>

          <div className="projects__button-container">
            <img
              onClick={() => handleDetails("brainflix")}
              src={details}
              alt=""
              className="projects__img"
            />
            <button
              onClick={() => handleDetails("brainflix")}
              className="projects__button"
            >
              details
            </button>
          </div>
        </div>

        {activeDetails === "brainflix" && (
          <div className="projects__description-container">
            <p className="projects__description">
              Developed BrainFlix, a video streaming app inspired by YouTube,
              using React to build a dynamic single-page application (SPA) with
              React Router for seamless navigation. Utilized HTML, CSS, and Sass
              for a responsive design, ensuring a smooth user experience across
              devices. Integrated API for content fetching and data submissions.
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

      {/* project brainflix api */}
      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_brainflix-api</p>

          <a
            href="https://mrehere-brainflix-api-349537f543d4.herokuapp.com/"
            target="_blank"
          >
            <button className="projects__view-button">view-project</button>
          </a>
        </div>

        <div className="projects__thumbnail-container">
          <img src={brainflixapi} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          {/* ----- */}
          <div className="projects__name-tech">
            <div data-id="Express.js" className="projects__tech-container">
              <img src={express} alt="" className="projects__tech" />
            </div>

            <div data-id="Postman" className="projects__tech-container">
              <img src={postman} alt="" className="projects__tech" />
            </div>

            <div data-id="Heroku" className="projects__tech-container">
              <img src={heroku} alt="" className="projects__tech" />
            </div>
          </div>

          <div className="projects__button-container">
            <img
              onClick={() => handleDetails("brainflix-api")}
              src={details}
              alt=""
              className="projects__img"
            />
            <button
              onClick={() => handleDetails("brainflix-api")}
              className="projects__button"
            >
              details
            </button>
          </div>
        </div>

        {activeDetails === "brainflix-api" && (
          <div className="projects__description-container">
            <p className="projects__description">
              Built the server-side of BrainFlix using Express.js to manage data
              and content. Implemented API integration for fetching and
              submitting video data, ensuring smooth functionality.
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

      {/* project bandsite */}

      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_bandsite</p>

          <a href="https://mrehere-bandsite.netlify.app/" target="_blank">
            <button className="projects__view-button">view-project</button>
          </a>
        </div>

        <div className="projects__thumbnail-container">
          <img src={bandsite} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          {/* ----- */}
          <div className="projects__name-tech">
            <div data-id="Html" className="projects__tech-container">
              <img src={html} alt="" className="projects__tech" />
            </div>

            <div data-id="Css" className="projects__tech-container">
              <img src={css} alt="" className="projects__tech" />
            </div>

            <div data-id="Sass" className="projects__tech-container">
              <img src={sass} alt="" className="projects__tech" />
            </div>

            <div data-id="JavaScript" className="projects__tech-container">
              <img src={js} alt="" className="projects__tech" />
            </div>

            <div data-id="Postman" className="projects__tech-container">
              <img src={postman} alt="" className="projects__tech" />
            </div>

            <div data-id="Axios" className="projects__tech-container">
              <img src={axios} alt="" className="projects__tech" />
            </div>
          </div>

          <div className="projects__button-container">
            <img
              onClick={() => handleDetails("bandsite")}
              src={details}
              alt=""
              className="projects__img"
            />
            <button
              onClick={() => handleDetails("bandsite")}
              className="projects__button"
            >
              details
            </button>
          </div>
        </div>

        {activeDetails === "bandsite" && (
          <div className="projects__description-container">
            <p className="projects__description">
              Developed Bandsite - The Bees Knees, a dynamic band website using
              vanilla JavaScript for interactivity and DOM manipulation. Created
              seamless navigation, interactive forms for commenting, and
              integrated an API to fetch and display real-time updates on events
              and music releases. Utilized HTML, CSS, and Sass for an organized,
              responsive design, ensuring a smooth and engaging user experience.
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

      {/* project coffe shop */}
      <div className="projects__container">
        <div className="projects__name-view-container">
          <p className="projects__name">_coffee-shop</p>

          <a href="https://mrehere-coffeshop.netlify.app/" target="_blank">
            <button className="projects__view-button">view-project</button>
          </a>
        </div>

        <div className="projects__thumbnail-container">
          <img src={coffeshop} alt="" className="projects__thumbnail" />
        </div>

        <div className="projects__details">
          {/* ----- */}
          <div className="projects__name-tech">
            <div data-id="Html" className="projects__tech-container">
              <img src={html} alt="" className="projects__tech" />
            </div>

            <div data-id="Css" className="projects__tech-container">
              <img src={css} alt="" className="projects__tech" />
            </div>
          </div>

          <div className="projects__button-container">
            <img
              onClick={() => handleDetails("coffe-shop")}
              src={details}
              alt=""
              className="projects__img"
            />
            <button
              onClick={() => handleDetails("coffe-shop")}
              className="projects__button"
            >
              details
            </button>
          </div>
        </div>

        {activeDetails === "coffe-shop" && (
          <div className="projects__description-container">
            <p className="projects__description">
              Developed a visually appealing static website for a coffee shop
              using vanilla HTML and CSS, showcasing the shop's offerings,
              ambiance, and branding for an engaging user experience.
              Implemented animations to enhance the visual appeal and highlight
              key elements, creating an inviting atmosphere for visitors.
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
