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
      <div>{<AboutText section={activeSubMenu} />}</div>
    </main>
  );
}

export default About;
