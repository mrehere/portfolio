import "./Nav.scss";
import hamburgerIcon from "../../assets/icons/hamburger.svg";

function Nav() {
  return (
    <main className="nav">
      <section className="nav__mobile-nav">
        <div className="nav__mobile-name">majedur-rahman</div>

        <img
          src={hamburgerIcon}
          alt="hamburger-icon"
          className="nav__hamburger"
        />
      </section>
    </main>
  );
}

export default Nav;
