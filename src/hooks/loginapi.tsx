import axios from "axios";
import api from "../api/api";

interface ILogin {
  email: string;
  password: string;
}
const LoginApi = async (
  loginData: ILogin,
  setToken: (accessToken: string) => void
) => {
  try {
    const response = await api.post("auth/login", loginData);
    const accessToken = response.data.accessToken;
    if (accessToken) setToken(accessToken);
    return accessToken;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(`${error.response.data.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
  }
};

export default LoginApi;
