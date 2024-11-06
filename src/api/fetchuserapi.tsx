import axios from "axios";

export const useFetchUserApi = async () => {
  const response = await axios.get(
    `https://671b71a32c842d92c37ff31c.mockapi.io/learnApi/users`
  );
  return response.data;
};
