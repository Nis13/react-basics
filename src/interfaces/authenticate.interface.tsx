export interface IAuthenticateContext {
  isAuthenticated: boolean;
  accessToken: string | null;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
}
