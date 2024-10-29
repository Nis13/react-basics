import axios from "axios";
interface IUserData {
  name: string;
  address: string;
  contact: number;
  email: string;
}

export const PostUser = async (userData: IUserData) => {
  try {
    const response = await axios.post(
      "https://671b71a32c842d92c37ff31c.mockapi.io/learnApi/users",
      userData
    );
    return response.status === 201 ? "Login successful!" : "Login failed.";
  } catch (error) {
    console.log(error);
    return "An error occurred.";
  }
};
