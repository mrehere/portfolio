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
      <div className="home__gradient1"> </div>
      <div className="home__gradient2"> </div>
      <div className="home__head">
        <p className="home__hello">Hello, I am</p>
        <h1 className="home__name">
          Majedur <span className="home__name home__name-last">Rahman</span>
        </h1>
        <div className="home__designation">
          <span>{text}</span>

          <span className="home__designation home__designation-cursor">|</span>
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
    </main>
  );
}

export default Home;
