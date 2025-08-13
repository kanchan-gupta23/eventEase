import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [company, setCompany] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const Authentication = token;

  const getToken = async (token) => {
    try {
      if (!token) {
        console.log("token not found");
      }
      setToken("bearer" + token);
      await localStorage.setItem("token", "bearer" + token);
    } catch (error) {
      console.log(error);
    }
  };
  const getcompany = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/company/getComp`,
        {
          headers: {
            Authorization: Authentication,
          },
        }
      );
      setCompany(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Context.Provider value={{ getToken, getcompany }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
