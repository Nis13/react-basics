import axios from "axios";

interface ISignup {
  name: string;
  email: string;
  password: string;
}
export const SignupApi = async (userData: ISignup) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      userData
    );
    return response.status === 201
      ? "Registraion successful!"
      : "Registration failed.";
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return `${error.response.data.message}`;
    } else {
      return `An unexpected error occurred: ${error}`;
    }
  }
};
