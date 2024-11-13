import "./Nav.scss";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Nav({ isMenuOpen, setIsMenuOpen }) {
  const path = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <main className="nav">
      <section className="nav__mobile-nav">
        <div
          onClick={() => {
            navigate("/");
            setIsMenuOpen(false);
          }}
          className="nav__mobile-name"
        >
          majedur-rahman
        </div>

        <img
          src={isMenuOpen ? closeIcon : hamburgerIcon}
          alt="hamburger-icon"
          className={`nav__hamburger ${
            isMenuOpen ? "nav__close-icon" : "nav__hamburger-icon"
          }`}
          onClick={toggleMenu}
        />

        {/* {isMenuOpen && (
          <img
            src={closeIcon}
            alt="hamburger-icon"
            className="nav__close"
            onClick={toggleMenu}
          />
        )} */}
      </section>

      {isMenuOpen && (
        <section className="nav__menu">
          <div className="nav__menu-content">
            <ul className="nav__listHolder">
              <li
                onClick={() => {
                  navigate("/");
                  toggleMenu();
                }}
                className={`nav__list ${
                  path.pathname === "/" ? "nav__list-active" : ""
                }`}
              >
                _hello
              </li>
              <li
                onClick={() => {
                  navigate("/about");
                  toggleMenu();
                }}
                className={`nav__list ${
                  path.pathname === "/about" ? "nav__list-active" : ""
                }`}
              >
                _about-me
              </li>
              <li
                onClick={() => {
                  navigate("/projects");
                  toggleMenu();
                }}
                className={`nav__list ${
                  path.pathname === "/projects" ? "nav__list-active" : ""
                }`}
              >
                _projects
              </li>
              <li className="nav__list">_contact</li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

export default Nav;
