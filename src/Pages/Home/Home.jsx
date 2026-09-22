import { useState, useEffect } from "react";
import "./Home.scss";

function Home() {
  const sentence = `> ${" "}Insurance Technologist`;
  const [text, setText] = useState("");
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const intervalid = setInterval(() => {
      if (index < sentence.length - 1) {
        setText((prev) => prev + sentence[index]);
        index++;
      } else {
        clearInterval(intervalid);
      }
    }, typingSpeed);
    return () => clearInterval(intervalid);
  }, []);
  return (
    <main className="home">
      <div className="home__block-1">
        <div className="home__gradient1"> </div>
        <div className="home__gradient2"> </div>
        <div className="home__head">
          <p className="home__hello">Hello, I am</p>
          <h1 className="home__name">
            Majedur{" "}
            <span className="home__name home__name-last">Rahman</span>
          </h1>
          <div className="home__designation">
            <span>{text}</span>

            <span className="home__designation home__designation-cursor">
              |
            </span>
          </div>
        </div>

        <div className="home__info">
          <p className="home__infoTitle">{`/ / find my profile on Github:`}</p>
          <p className="home__gitLink">
            <span className="home__gitLink home__gitLink-const">const</span>

            <span className="home__gitLink home__gitLink-variable">
              {" "}
              githubLink{" "}
            </span>
            <span className="code-operator"> = </span>
            <a
              href="https://github.com/mrehere"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="home__gitLink home__gitLink-link">
                "https://github.com/mrehere"
              </span>
            </a>
          </p>
        </div>
      </div>

      <div className="home__block-2">
        <p className="home__bio-header"> _engineering-software-and-beyond</p>
        <p className="home__bio">
           My interest in technology began during my undergraduate studies in{" "}
  <strong>Electrical & Electronic Engineering</strong> ⚡️, where I was
  introduced to programming through C and developed an interest in using
  technology to solve practical problems.
  <br />
  <br />
  I later pursued a <strong>Master's in Energy Systems Engineering</strong> 🌱,
  where I developed a systems-oriented approach to analyzing complex problems
  and understanding how different components interact.
  <br />
  <br />
  My interest in software continued alongside my academic and professional
  experiences, eventually leading me to complete{" "}
  <strong>BrainStation's Software Engineering program</strong> 💻. There, I
  gained hands-on experience building full-stack applications using JavaScript,
  React, Node.js, Express.js, and MySQL.
  <br />
  <br />
  Today, I work in <strong>Group Benefits operations at belairdirect</strong>,
  where I apply analytical problem-solving, systems knowledge, and operational
  experience to support members, processes, and internal teams.
  <br />
  <br />
  I'm particularly interested in the intersection of{" "}
  <strong>technology, systems, process improvement, and practical
  problem-solving</strong>.
        </p>
      </div>
    </main>
  );
}

export default Home;
