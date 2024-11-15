import { useState } from "react";
import "./About.scss";

import arrow from "../../assets/icons/arrow.svg";
import experience from "../../assets/icons/about/experience.svg";
import hs from "../../assets/icons/about/hard-skills.svg";
import ss from "../../assets/icons/about/soft-skills.svg";
import ed from "../../assets/icons/about/education.svg";
import hobby from "../../assets/icons/about/hobby.svg";
import values from "../../assets/icons/about/heart.svg";

function About() {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleMenu = (index) => {
    setActiveMenu((prev) => (prev === index ? null : index));
  };
  return (
    <main className="about">
      <h2 className="about__me">_about-me</h2>

      <div className="about__mobile-nav">
        {/* professional-info */}
        <div
          onClick={() => handleMenu(0)}
          className={`about__nav-menu ${
            activeMenu === 0 ? "about__nav-menu-active" : ""
          }`}
        >
          <img src={arrow} alt="arrow" className="about__arrow" />
          professional-info
        </div>

        {activeMenu === 0 && (
          <div className="about__menu-item-container">
            {/* <div className="about__menu-item">
              <img
                src={experience}
                alt="pro-icon"
                className="about__item-img"
              />
              experience
            </div> */}
            <div className="about__menu-item">
              <img src={hs} alt="pro-icon" className="about__item-img" />
              hard-skills
            </div>
            <div className="about__menu-item">
              <img src={ss} alt="pro-icon" className="about__item-img" />
              soft-skills
            </div>
            <div className="about__menu-item">
              <img src={ed} alt="pro-icon" className="about__item-img" />
              education{" "}
            </div>
          </div>
        )}

        {/* personal info */}
        <div
          onClick={() => handleMenu(1)}
          className={`about__nav-menu ${
            activeMenu === 1 ? "about__nav-menu-active" : ""
          }`}
        >
          <img src={arrow} alt="arrow" className="about__arrow" />
          personal-info
        </div>

        {activeMenu === 1 && (
          <div className="about__menu-item-container">
            <div className="about__menu-item">
              <img src={hobby} alt="pro-icon" className="about__item-img" />
              hobbies
            </div>
            <div className="about__menu-item">
              <img src={values} alt="pro-icon" className="about__item-img" />
              values
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default About;
