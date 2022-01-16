import React from "react";
// @ts-ignore
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";

export const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link to="/">
                <a>Crypto</a>
              </Link>
            </div>
            <ul className={styles.navItems}>
              <button onClick={() => localStorage.clear()}>
                <li>Logout(from the app)</li>
              </button>
              <button>
                <Link to="/modal/about">
                  <a>
                    <li>About us</li>
                  </a>
                </Link>
              </button>
              <button>
                <Link to="/modal/partners">
                  <a>
                    <li>Our partners</li>
                  </a>
                </Link>
              </button>
              <button>
                <Link to="/modal/signin">
                  <a>
                    <li>Sign in</li>
                  </a>
                </Link>
              </button>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.rect}>
            <img
              className={styles.rectImg}
              draggable="false"
              src="/rect.svg"
              width={640}
              height={425}
            />
            <h1 className={styles.rectH}>
              Buy Crypto in <span>Minutes</span>
            </h1>
            <p className={styles.rectp}>
              Enjoy the world’s largest <br /> cryptocurrency exchange at your
              <br />
              fingertips.
            </p>
          </div>
          <div className={styles.heroForm}>
            <p className={styles.title}>Join our community now!</p>
            <input className={styles.element} type="text" placeholder="Name" />
            <input className={styles.element} type="text" placeholder="Email" />
            <input
              className={styles.element}
              type="text"
              placeholder="Telephone"
            />
            <button className={styles.formBtn}>Register</button>
          </div>
        </header>
        <div>
          <p className={styles.crypto}>Cryptocurrencies we are working with</p>
          <div className={styles.cryptoImgs}>
            <img
              draggable="false"
              src="../public/btc.svg"
              width={87}
              height={87}
            />
            <img
              draggable="false"
              src="/eth.svg"
              width={53.75}
              height={87.95}
            />
            <img draggable="false" src="/ltc.svg" width={87} height={87} />
            <img draggable="false" src="/crdn.svg" width={87} height={87} />
          </div>
        </div>
      </div>
    </>
  );
};
