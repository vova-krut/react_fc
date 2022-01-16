import React, { useState } from "react";
import { AuthContext } from "./context";
import "./styles/App.css";
import { AppRouter } from "./UI/AppRouter";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
