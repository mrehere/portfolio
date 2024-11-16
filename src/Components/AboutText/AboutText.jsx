import "./AboutText.scss";

//language
import c from "../../assets/icons/dev/C.svg";
import cplus from "../../assets/icons/dev/C++.svg";
import js from "../../assets/icons/dev/js.svg";
import py from "../../assets/icons/dev/python.svg";
const AboutText = ({ section }) => {
  const content = {
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

        <div className="text__skill-container">
          <p className="text__language-header">languages</p>

          <div className="text__language-container">
            <img src={js} alt="" className="text__language-img" />
            <img src={c} alt="" className="text__language-img" />
            <img src={cplus} alt="" className="text__language-img" />

            <img src={py} alt="" className="text__language-img" />
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
