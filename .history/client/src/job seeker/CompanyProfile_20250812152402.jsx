import React, { useContext, useEffect, useState } from "react";
import Reviews from "../job giver/Reviews";
import Profile from "../job giver/Profile";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

function CompanyProfile() {
  const { id } = useParams();
  const [comp, setComp] = useState([]);
  const getCompany = async () => {
    const response = await axios.get(
      `http://localhost:2000/company/getCompById/${id}`
    );

    setComp(response.data.exists);
  };
  useEffect(() => {
    getCompany();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden">
      <div className="w-full md:w-1/2 p-4">
        <div className="h-full bg-gradient-to-br from-[#1e293b] to-[#3b4a5a] rounded-xl shadow-lg p-4">
          <Profile comp={comp} id={id} />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 overflow-y-auto">
        <div className="h-full bg-gradient-to-tr from-[#0f172a] to-[#1e293b] rounded-xl shadow-lg p-4">
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
