import axios from "axios";
import { useEffect, useState } from "react";

const GetUserApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://671b71a32c842d92c37ff31c.mockapi.io/learnApi/users`
        );
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(() => error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { isLoading, data, error };
};

export default GetUserApi;
