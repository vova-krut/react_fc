// @ts-ignore
import styles from "../styles/Landing.module.css";
// @ts-ignore
import cl from "../styles/about.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";

export default function SignIn() {
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
        <div className={cl.heroForm}>
          <p className={cl.title}>Sign In</p>
          <input className={cl.element} type="text" placeholder="Name" />
          <input
            className={cl.element}
            type="password"
            placeholder="Password"
          />
          <button className={styles.formBtn}>Sign in</button>
        </div>
      </div>
    </>
  );
}
