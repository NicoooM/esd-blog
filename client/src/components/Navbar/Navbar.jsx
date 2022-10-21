import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
