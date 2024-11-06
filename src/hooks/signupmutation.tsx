import { useState } from "react";
import { useMutation } from "react-query";
import { useSignUpApi } from "../api/signupapi";
export interface ISignup {
  name: string;
  email: string;
  password: string;
}

export const useSignupMutation = () => {
  const [response, setResponse] = useState<string | null>(null);
  const { isLoading, isSuccess, isError, mutateAsync, error } = useMutation(
    useSignUpApi,
    {
      onSuccess: () => setResponse("User Added Successfully"),
      onError: (error) => setResponse(error.message),
    }
  );
  return { response, isLoading, isSuccess, isError, error, mutateAsync };
};
