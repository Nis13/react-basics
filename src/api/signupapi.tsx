import axios from "axios";
import { ISignup } from "../hooks/signupmutation";
import api from "./api";

export const useSignUpApi = async (userData: ISignup) => {
  try {
    const response = await api.post("auth/signup", userData);
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
