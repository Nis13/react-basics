import axios from "axios";
import { ISignup } from "../hooks/signupmutation";

export const useSignUpApi = async (userData: ISignup) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      userData
    );
    if (response.status !== 201) {
      throw new Error("Network response was not ok");
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(`${error.response.data.message}`);
    }
  }
};
