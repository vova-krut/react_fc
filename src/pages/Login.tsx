import React, { useContext, useState } from "react";
// @ts-ignore
import styles from "../styles/Login.module.css";
import { AuthContext } from "../context";

export const Login: React.FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e: React.FormEvent) => {
    if (email === "vova@gmail.com" && password === "1234") {
      setIsAuth(true);
      localStorage.setItem("email", "vova@gmail.com");
      localStorage.setItem("password", "1234");
    } else {
      setIsAuth(false);
    }
  };

  return (
    <div>
      <form action="submit" className={styles.uiForm} onSubmit={handleSubmit}>
        <h3>Войти на сайт</h3>
        <div className={styles.formRow}>
          <input
            type="text"
            id="email"
            required
            autoComplete="off"
            value={email}
            onChange={({ target }) => setemail(target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles.formRow}>
          <input
            type="password"
            id="password"
            required
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <label htmlFor="password">Пароль</label>
        </div>
        <div>
          <button type="submit">Войти</button>
        </div>
      </form>
    </div>
  );
};
