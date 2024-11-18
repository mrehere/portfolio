import React, { useState } from "react";
import "./About.scss";
import AboutText from "../../Components/AboutText/AboutText";

import arrow from "../../assets/icons/arrow.svg";
import experience from "../../assets/icons/about/experience.svg";
import hs from "../../assets/icons/about/hard-skills.svg";
import ss from "../../assets/icons/about/soft-skills.svg";
import ed from "../../assets/icons/about/education.svg";
import hobby from "../../assets/icons/about/hobby.svg";
import values from "../../assets/icons/about/heart.svg";

import pro from "../../assets/icons/about/pro.svg";
import personal from "../../assets/icons/about/personal.svg";

function About() {
  const [activeMenu, setActiveMenu] = useState("professional-info");

  const [activeSubMenu, setActiveSubMenu] = useState("hard-skills");

  const handleMenu = (index) => {
    setActiveMenu((prev) => (prev === index ? null : index));
  };

  const handleSubMenu = (index) => {
    setActiveSubMenu((prev) => (prev === index ? null : index));
  };

  return (
    <main className="about">
      <h2 className="about__me">_about-me</h2>

      <div className="about__mobile-nav">
        {/* professional-info */}
        <div
          onClick={() => handleMenu("professional-info")}
          className={`about__nav-menu ${
            activeMenu === "professional-info" ? "about__nav-menu-active" : ""
          }`}
        >
          <img src={arrow} alt="arrow" className="about__arrow" />
          professional-info
        </div>

        {activeMenu === "professional-info" && (
          <div className="about__menu-item-container">
            {/* <div className="about__menu-item">
              <img
                src={experience}
                alt="pro-icon"
                className="about__item-img"
              />
              experience
            </div> */}
            <div
              onClick={() => handleSubMenu("hard-skills")}
              className={`about__menu-item ${
                activeSubMenu === "hard-skills" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={hs} alt="pro-icon" className="about__item-img" />
              hard-skills
            </div>

            <div
              onClick={() => handleSubMenu("soft-skills")}
              className={`about__menu-item ${
                activeSubMenu === "soft-skills" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={ss} alt="pro-icon" className="about__item-img" />
              soft-skills
            </div>

            <div
              onClick={() => handleSubMenu("education")}
              className={`about__menu-item ${
                activeSubMenu === "education" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={ed} alt="pro-icon" className="about__item-img" />
              education{" "}
            </div>
          </div>
        )}

        {/* personal info */}
        <div
          onClick={() => handleMenu("personal-info")}
          className={`about__nav-menu ${
            activeMenu === "personal-info" ? "about__nav-menu-active" : ""
          }`}
        >
          <img src={arrow} alt="arrow" className="about__arrow" />
          personal-info
        </div>

        {activeMenu === "personal-info" && (
          <div className="about__menu-item-container">
            <div
              onClick={() => handleSubMenu("hobbies")}
              className={`about__menu-item ${
                activeSubMenu === "hobbies" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={hobby} alt="pro-icon" className="about__item-img" />
              hobbies
            </div>

            <div
              onClick={() => handleSubMenu("values")}
              className={`about__menu-item ${
                activeSubMenu === "values" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={values} alt="pro-icon" className="about__item-img" />
              values
            </div>
          </div>
        )}
      </div>

      <div className="about__desktop-nav">
        <div
          className={`about__desktop-nav-img ${
            activeMenu === "professional-info"
              ? "about__desktop-nav-img-active"
              : ""
          }`}
        >
          <svg
            onClick={() => handleMenu("professional-info")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
          </svg>
        </div>

        <div
          className={`about__desktop-nav-img ${
            activeMenu === "personal-info"
              ? "about__desktop-nav-img-active"
              : ""
          }`}
        >
          <svg
            onClick={() => handleMenu("personal-info")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
          </svg>
        </div>
      </div>

      <div className="about__menu-desktop-container">
        <p className="about__desktop-menu-header">
          {activeMenu || "select-a-section"}
        </p>

        {/* desktop professional info */}
        {activeMenu === "professional-info" && (
          <div className="about__menu-item-container">
            {/* <div className="about__menu-item">
              <img
                src={experience}
                alt="pro-icon"
                className="about__item-img"
              />
              experience
            </div> */}
            <div
              onClick={() => handleSubMenu("hard-skills")}
              className={`about__menu-item ${
                activeSubMenu === "hard-skills" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={hs} alt="pro-icon" className="about__item-img" />
              hard-skills
            </div>

            <div
              onClick={() => handleSubMenu("soft-skills")}
              className={`about__menu-item ${
                activeSubMenu === "soft-skills" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={ss} alt="pro-icon" className="about__item-img" />
              soft-skills
            </div>

            <div
              onClick={() => handleSubMenu("education")}
              className={`about__menu-item ${
                activeSubMenu === "education" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={ed} alt="pro-icon" className="about__item-img" />
              education{" "}
            </div>
          </div>
        )}

        {/* personal info */}
        {activeMenu === "personal-info" && (
          <div className="about__menu-item-container">
            <div
              onClick={() => handleSubMenu("hobbies")}
              className={`about__menu-item ${
                activeSubMenu === "hobbies" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={hobby} alt="pro-icon" className="about__item-img" />
              hobbies
            </div>

            <div
              onClick={() => handleSubMenu("values")}
              className={`about__menu-item ${
                activeSubMenu === "values" ? "about__menu-item-active" : ""
              }`}
            >
              <img src={values} alt="pro-icon" className="about__item-img" />
              values
            </div>
          </div>
        )}
      </div>
      <div className="about__description-container">
        <p className="about__desktop-menu-description-header">
          {activeSubMenu || "select-a-sub-section"}
        </p>
        {<AboutText section={activeSubMenu} />}
      </div>

      <div className="about__snippet-container">
        <div className="about__snippet-header"></div>
        <div className="about__code-container"></div>
      </div>
    </main>
  );
}

export default About;
