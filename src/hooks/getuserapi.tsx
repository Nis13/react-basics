import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async () => {
  const response = await axios.get(
    `https://671b71a32c842d92c37ff31c.mockapi.io/learnApi/users`
  );
  console.log("from axios", response);
  return response.data;
};
const GetUserApi = () => {
  const { isLoading, data, error } = useQuery("user", fetchUser);
  console.log(data);

  return { isLoading, data, error };
};

export default GetUserApi;
