import axios from "axios";
import { IUserData } from "../interfaces/user.interface";

export const PostUser = async (userData: IUserData) => {
  try {
    const response = await axios.post(
      "https://671b71a32c842d92c37ff31c.mockapi.io/learnApi/users",
      userData
    );
    return response.status === 201
      ? "Registraion successful!"
      : "Registration failed.";
  } catch (error) {
    return `An error occurred ${error}`;
  }
};
