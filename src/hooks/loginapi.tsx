import axios from "axios";

interface ILogin {
  email: string;
  password: string;
}
const LoginApi = async (loginData: ILogin) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      loginData
    );
    const accessToken = response.data.accessToken;
    return accessToken;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return `${error.response.data.message}`;
    } else {
      return `An unexpected error occurred: ${error}`;
    }
  }
};

export default LoginApi;
