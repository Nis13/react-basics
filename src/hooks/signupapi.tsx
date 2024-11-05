import axios from "axios";
interface ISignup {
  name: string;
  email: string;
  password: string;
}
export const SignUpApi = async (userData: ISignup) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      userData
    );
    if (response.status !== 201) {
      throw new Error("Network response was not ok");
    }
    console.log(response.status);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(`${error.response.data.message}`);
    }
  }
};

export const handleResponse = ({
  values: userData,
  isLoading,
  isError,
  isSuccess,
  mutate,
}) => {
  mutate(userData);
  if (isLoading) return "Loading....";
  if (isError) return "Error Ocuured";
  if (isSuccess) return "User added Successfully";
  else {
    return "User couldnot be addded";
  }
};
