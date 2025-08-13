import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

function Applied() {
  const { id } = useParams();
  const { Authentication } = useContext(Context);
  const appliedUsers = async () => {
    const response = await axios.get(
      `http://localhost:2000/company/companyAppliedJobs/${id}`,
      {
        headers: {
          Authorization: Authentication,
        },
      }
    );
  };
  useEffect(() => {
    appliedUsers();
  }, [id]);
  return <div></div>;
}

export default Applied;
