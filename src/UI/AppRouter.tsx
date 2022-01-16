import React, { useContext, useEffect } from "react";
import { Login } from "../pages/Login";
import { Landing } from "../pages/Landing";
import { Forecast } from "../pages/Forecast";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, IAuthContext } from "../context";

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
      <Route path="/forecast" element={<Forecast />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
