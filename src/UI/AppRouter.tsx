import React, { useContext, useEffect } from "react";
import { Login } from "../pages/Login";
import { Forecast } from "../pages/Forecast";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, IAuthContext } from "../context";
import { Landing } from "../pages/Landing";
import About from "../pages/about";
import SignIn from "../pages/signin";
import Partners from "../pages/partners";

export const AppRouter: React.FC = () => {
  const { isAuth, setIsAuth } = useContext<IAuthContext>(AuthContext);
  useEffect(() => {
    if (localStorage.getItem("email") === "vova@gmail.com") {
      setIsAuth(true);
    }
  }, []);
  return isAuth ? (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
