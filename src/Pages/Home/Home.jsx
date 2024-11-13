import "./Home.scss";
function Home() {
  return (
    <main className="home">
      <div className="home__head">
        <p className="home__hello">Hello, I am</p>
        <h1 className="home__name">Majedur Rahman</h1>
        <p className="home__designation">{`> Full-stack developer`}</p>
      </div>

      <div className="home__info">
        <p className="home__infoTitle">{`// find my profile on Github:`}</p>
        <p className="home__gitLink">{`const githubLink = https://github.com/mrehere`}</p>
      </div>
    </main>
  );
}

export default Home;
