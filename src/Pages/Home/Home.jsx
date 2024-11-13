import "./Home.scss";
function Home() {
  return (
    <main className="home">
      <div className="home__gradient1"> </div>
      <div className="home__gradient2"> </div>
      <div className="home__head">
        <p className="home__hello">Hello, I am</p>
        <h1 className="home__name">Majedur Rahman</h1>
        <p className="home__designation">{`> Full-stack developer`}</p>
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
