// useUser.js
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
  return useContext(UserContext); // Return the context value
};
