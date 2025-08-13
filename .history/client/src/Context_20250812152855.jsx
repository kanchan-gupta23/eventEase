import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [jobData, setJobData] = useState([]);
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);

  const [company, setCompany] = useState({});
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken") || ""
  );
  const Authentication = token;
  const UserAuthentication = userToken;

  const getCompToken = async (token) => {
    try {
      if (!token) {
        console.log("token not found");
        return;
      }
      const formatted = `Bearer ${token}`;
      setToken(formatted);
      localStorage.setItem("token", formatted);
    } catch (error) {
      console.log(error);
    }
  };

  const jobById = async (id) => {
    const response = await axios.get(`http://localhost:2000/job/getById/${id}`);
    setJob(response.data.job);
    console.log(response.data.job);
  };

  const getUserToken = async (token) => {
    try {
      if (!token) {
        console.log("token not found");
        return;
      }
      setUserToken(`Bearer ${token}`);
      localStorage.setItem("userToken", `Bearer ${token}`);
    } catch (error) {
      console.log(error);
    }
  };
  const getcompany = async () => {
    try {
      if (!token) {
        console.log("Token not available");
        return;
      }

      const response = await axios.get(
        "http://localhost:2000/company/getComp",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("✅ Company Data Received:", response.data);
      setCompany(response.data);
    } catch (error) {
      if (error.response) {
        console.log(
          "❌ Server Error:",
          error.response.status,
          error.response.data
        );
      } else {
        console.log("❌ Request Error:", error.message);
      }
    }
  };
  const getUser = async () => {
    const response = await axios.get(`http://localhost:2000/user/getUser`, {
      headers: {
        Authorization: userToken,
      },
    });
    setUser(response.data);
  };

  const getAllJob = async () => {
    const response = await axios.get(`http://localhost:2000/job/AllJobs`);
    setJobData(response.data.job);
    console.log(response.data.job);
  };

  useEffect(() => {
    getcompany();
    getUser();
  }, []);

  const applyJob = async (id) => {
    const response = await axios.post(
      `http://localhost:2000/job/applyJob/${id}`,
      { userId: user._id },
      {
        headers: {
          Authorization: UserAuthentication,
        },
      }
    );
  };

  const userApplyJob = async (id) => {
    const response = await axios.post(
      `http://localhost:2000/user/applyJob/${id}`,
      { userId: user._id },
      {
        headers: {
          Authorization: UserAuthentication,
        },
      }
    );
    setLoading(false);
  };

  return (
    <Context.Provider
      value={{
        getCompToken,
        loading,
        setLoading,
        getUserToken,
        applyJob,
        userApplyJob,
        company,
        Authentication,
        UserAuthentication,
        user,
        jobById,
        getAllJob,
        job,
        jobData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
