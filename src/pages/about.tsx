// @ts-ignore
import styles from "../styles/Landing.module.css";
// @ts-ignore
import cl from "../styles/about.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";

export default function About() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const handleLogOut = () => {
    setIsAuth(false);
    localStorage.clear();
  };
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <p>Crypto</p>
              </Link>
            </div>
            <ul className={styles.navItems}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/forecast"
              >
                <button>
                  <li>Forecast</li>
                </button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <button>
                  <li>Login</li>
                </button>
              </Link>
              <button onClick={handleLogOut}>
                <li>Logout(from the app)</li>
              </button>
              <button>
                <Link style={{ textDecoration: "none" }} to="/about">
                  <li>About us</li>
                </Link>
              </button>
              <button>
                <Link style={{ textDecoration: "none" }} to="/partners">
                  <li>Our partners</li>
                </Link>
              </button>
              <button>
                <Link style={{ textDecoration: "none" }} to="/signin">
                  <li>Sign in</li>
                </Link>
              </button>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.App}>
        <div className={cl.About}>
          <h1 className={cl.header}>About us</h1>
          <p className={cl.text}>
            Recognizing the importance of Bitcoin from the onset, and
            understanding that the exchange is the most critical part of the
            cryptocurrency ecosystem, Jesse Powell founded “Crypto” to give
            people the means to quickly and securely invest in the space. Since
            then, the company has grown by leaps and bounds with hundreds of
            employees spanning the globe. We’re a diverse group of thinkers and
            doers that are dedicated to making cryptocurrency available and
            accessible to the world and enabling people from all walks of life
            to invest in their independence.
          </p>
        </div>
      </div>
    </>
  );
}
