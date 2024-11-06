import { IUserData } from "../interfaces/user.interface";
import api from "../api/api";

export const PostUser = async (userData: IUserData) => {
  try {
    const response = await api.post("auth/signup", userData);
    return response.status === 201
      ? "Registraion successful!"
      : "Registration failed.";
  } catch (error) {
    return `An error occurred ${error}`;
  }
};
