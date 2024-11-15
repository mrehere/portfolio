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
      {/* ------------ mobile nav ------------ */}
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
              <li
                onClick={() => {
                  navigate("/contact");
                  toggleMenu();
                }}
                className={`nav__list ${
                  path.pathname === "/contact" ? "nav__list-active" : ""
                }`}
              >
                _contact
              </li>
            </ul>
          </div>
        </section>
      )}

      {/* ------------ tablet/desktop nav ------------ */}
      <section className="nav__desktop-nav">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="nav__desktop-name"
        >
          majedur-rahman
        </div>

        <div
          onClick={() => {
            navigate("/");
          }}
          className={`nav__item ${
            path.pathname === "/" ? "nav__item-active" : ""
          }`}
        >
          _hello
        </div>
        <div
          onClick={() => {
            navigate("/about");
          }}
          className={`nav__item ${
            path.pathname === "/about" ? "nav__item-active" : ""
          }`}
        >
          _about-me
        </div>
        <div
          onClick={() => {
            navigate("/projects");
          }}
          className={`nav__item ${
            path.pathname === "/projects" ? "nav__item-active" : ""
          }`}
        >
          _projects
        </div>
        <div className="nav__emptyItem"> </div>
        <div
          onClick={() => {
            navigate("/contact");
          }}
          className={`nav__item ${
            path.pathname === "/contact" ? "nav__item-active" : ""
          }`}
        >
          _contact
        </div>
      </section>
    </main>
  );
}

export default Nav;
