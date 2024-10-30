import axios from "axios";

interface ISignup {
  name: string;
  email: string;
  password: string;
}
export const SignupApi = async (userData: ISignup) => {
  try {
    console.log(userData);
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      userData
    );
    // console.log(response);
    return response.status === 201
      ? "Registraion successful!"
      : "Registration failed.";
  } catch (error) {
    return `An error occurred ${error}`;
  }
};
