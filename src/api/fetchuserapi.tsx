import api from "./api";

export const useFetchUserApi = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    return (error as Error).message;
  }
};
