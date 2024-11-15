import { useState } from "react";
import "./About.scss";
function About() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenu = (index) => {
    setActiveMenu((prev) => (prev === index ? null : index));
  };
  return (
    <main className="about">
      <h2 className="about__me">_about-me</h2>

      <div className="about__mobile-nav">
        <div
          onClick={() => handleMenu(0)}
          className={`about__nav-menu ${
            activeMenu === 0 ? "about__nav-menu-active" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#D9D9D9"
          >
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
          professional-info
        </div>

        <div
          onClick={() => handleMenu(1)}
          className={`about__nav-menu ${
            activeMenu === 1 ? "about__nav-menu-active" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#D9D9D9"
          >
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
          education-info
        </div>

        <div
          onClick={() => handleMenu(2)}
          className={`about__nav-menu ${
            activeMenu === 2 ? "about__nav-menu-active" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#D9D9D9"
          >
            <path d="M400-280v-400l200 200-200 200Z" />
          </svg>
          hobbies-info
        </div>
      </div>
    </main>
  );
}

export default About;
