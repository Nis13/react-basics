import { createContext, ReactNode, useEffect, useState } from "react";
import { IAuthenticateContext } from "../interfaces/authenticate.interface";

export const AuthenticateContext = createContext<IAuthenticateContext>({
  isAuthenticated: false,
  accessToken: null,
  setToken: () => {},
  clearToken: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext: React.FC<AuthProviderProps> = ({ children }) => {
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
