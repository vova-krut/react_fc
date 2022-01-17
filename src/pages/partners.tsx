// @ts-ignore
import styles from "../styles/Landing.module.css";
// @ts-ignore
import cl from "../styles/about.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";

export default function Partners() {
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
          <h1 className={cl.headerP}>Our Partners</h1>
          <p className={cl.partners}>
            Coinbase <br />
            <br /> Gemini <br />
            <br /> SoFi Active Investing Crypto
            <br />
            <br /> Webull Crypto <br />
            <br /> Robinhood Crypto <br />
            <br /> TradeStation Crypto
          </p>
        </div>
      </div>
    </>
  );
}
