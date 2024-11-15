import "./AboutText.scss";

const AboutText = ({ section }) => {
  const content = {
    "hard-skills": (
      <div className="textContainer" id="hard-skills">
        Paragraph: Hard Skills
      </div>
    ),

    "soft-skills": (
      <div className="textContainer" id="soft-skills">
        Paragraph: Soft Skills
      </div>
    ),

    education: (
      <div className="textContainer" id="education">
        Paragraph: education
      </div>
    ),

    hobbies: (
      <div className="textContainer" id="hobbies">
        Paragraph: hobbies
      </div>
    ),

    values: (
      <div className="textContainer" id="hobbies">
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
