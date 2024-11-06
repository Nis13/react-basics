import { useContext } from "react";
import { AuthenticateContext } from "../store/authcontext";

export const useAuth = () => useContext(AuthenticateContext);
