import axios from "axios";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`);
        setData(response.data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, []);

  return { isLoading, data, error };
};
