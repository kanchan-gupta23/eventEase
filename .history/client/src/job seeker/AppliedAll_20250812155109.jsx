import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

function AppliedAll() {
  const { id } = useParams();
  const { user, UserAuthentication } = useContext(Context);
  const [job, setJobs] = useState([]);
  const appliedJob = async () => {
    const response = await axios.get(
      `http://localhost:2000/user/getAplliedAllJobs/${id}`,
      {
        headers: {
          Authorization: UserAuthentication,
        },
      }
    );
    setJobs(response.data);
  };
  useEffect(() => {
    appliedJob();
  }, []);
  return <div></div>;
}

export default AppliedAll;
