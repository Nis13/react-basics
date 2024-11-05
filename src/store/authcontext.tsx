import { createContext, useContext, useEffect, useState } from "react";

interface IAuthenticateContext {
  isAuthenticated: boolean;
  accessToken: string | null;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
}
const defaultAuthContext: IAuthenticateContext = {
  isAuthenticated: false,
  accessToken: null,
  setToken: () => {},
  clearToken: () => {},
};

export const AuthenticateContext = createContext<IAuthenticateContext>();

export const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const setToken = (accessToken: string) => {
    sessionStorage.setItem("accessToken", accessToken);
    setIsAuthenticated(true);
    setAccessToken(accessToken);
  };

  const clearToken = () => {
    sessionStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setAccessToken(null);
  };

  return (
    <AuthenticateContext.Provider
      value={{ isAuthenticated, accessToken, setToken, clearToken }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticateContext);
