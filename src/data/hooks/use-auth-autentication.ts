import { useContext } from "react";
import AuthContext from "../context/auth-context";

const useAuthAutentication = () => useContext(AuthContext);

export default useAuthAutentication;
