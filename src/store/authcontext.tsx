import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthenticateContext = createContext();

export const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setToken(token);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthenticateContext.Provider value={{ isAuthenticated, token }}>
      {children}
    </AuthenticateContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticateContext);
