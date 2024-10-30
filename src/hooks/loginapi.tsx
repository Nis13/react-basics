import axios from "axios";

interface ILogin {
  email: string;
  password: string;
}
const LoginApi = async (loginData: ILogin) => {
  try {
    console.log("loggining in");
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      loginData
    );
    const accessToken = response.data.accessToken;
    return accessToken ? "Login Successful" : "Login Failed";
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return `${error.response.data.message}`;
    } else {
      console.error("Error:", error);
      return "An unexpected error occurred";
    }
  }
};

export default LoginApi;
