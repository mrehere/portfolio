import "./Nav.scss";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";

function Nav({ isMenuOpen, setIsMenuOpen }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <main className="nav">
      <section className="nav__mobile-nav">
        <div className="nav__mobile-name">majedur-rahman</div>

        {!isMenuOpen && (
          <img
            src={hamburgerIcon}
            alt="hamburger-icon"
            className="nav__hamburger"
            onClick={toggleMenu}
          />
        )}

        {isMenuOpen && (
          <img
            src={closeIcon}
            alt="hamburger-icon"
            className="nav__close"
            onClick={toggleMenu}
          />
        )}
      </section>

      {isMenuOpen && (
        <section className="nav__menu">
          <div className="nav__menu-content">
            <ul>
              <li>_home</li>
              <li>_about-me</li>
              <li>_projects</li>
              <li>_contact-me</li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

export default Nav;
