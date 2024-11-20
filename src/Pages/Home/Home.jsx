import { useState, useEffect } from "react";
import "./Home.scss";

function Home() {
  const sentence = `> ${" "}Full-stack developer`;
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
            Majedur <span className="home__name home__name-last">Rahman</span>
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
        <p className="home__bio-header"> _from-circuitBoard-to-code</p>
        <p className="home__bio">
          My journey into tech began in an unexpected place—during my
          undergraduate studies in <strong>Electrical Engineering</strong> ⚡️.
          It was in a C programming course 💻 that I first realized the immense
          potential of technology to make a positive impact on the world.
          Although I later pursued a Master’s in Energy Systems 🌱, I spent much
          of that time working in the <strong>service industry</strong> 🍽️,
          gaining valuable skills in customer service, communication, and
          enhanced my problem-solving—skills that helped shape my approach to
          tech. It was a period of balancing both worlds, and I kept my passion
          for technology alive, waiting for the right moment to transition into
          the field I truly loved.
          <br />
          <br />
          That moment came when I joined{" "}
          <strong>BrainStation’s Software Engineering bootcamp</strong> 🚀,
          diving headfirst into full-stack development. With hands-on experience
          in React, Express, and MySQL, I worked on both individual and
          collaborative projects, embracing industry best practices. This
          journey has been incredibly rewarding, and I’m excited to keep growing
          in this dynamic field. 🎉
          <br />
          <br />
          Want to see what I’ve been working on? Check out my portfolio website!
          🌟 And if you're as passionate about tech as I am, let’s connect—I’d
          love to chat! 😄
        </p>
      </div>
    </main>
  );
}

export default Home;
