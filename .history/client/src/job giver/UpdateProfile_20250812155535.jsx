import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigation, useParams } from "react-router-dom";
import { Context } from "../Context";

function updateProfile() {
  // const navigate = useNavigation();
  const { id } = useParams();
  const { getCompToken, company, Authentication } = useContext(Context);
  const [value, setValue] = useState({
    companyName: "",
    email: "",
    password: "",
    website: "",
    phone: "",
    about: "",
  });

  const changeHandler = (e) => {
    const { name, value: inputValue } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const HandleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:2000/company/updateProfile/${id}`,
      value,
      {
        headers: {
          Authorization: Authentication,
        },
      }
    );
    setValue(response.data.company);
    // navigate("/landing");
  };

  useEffect(() => {
    setValue({
      companyName: company.companyName,
      email: company.email,
      password: company.password,
      website: company.website,
      phone: company.phone,
      about: company.about,
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f172a] px-4">
      <form
        onSubmit={HandleUpdate}
        className="bg-[#1e293b] p-10 rounded-3xl shadow-2xl w-full max-w-xl border border-[#334155] transition-transform transform hover:scale-[1.01] duration-300"
      >
        <h2 className="text-4xl font-bold text-center text-[#38bdf8] mb-8 font-serif">
          Join Try Catchers 🎉
        </h2>

        {/* Avatar Upload */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="w-24 h-24 border-4 border-[#38bdf8] rounded-full overflow-hidden mx-auto relative group">
            {value.preview ? (
              <img
                src={value.preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <FaCircleUser className="text-[#94a3b8] w-full h-full p-2" />
            )}
            <label
              htmlFor="img"
              className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition"
            >
              <FaCameraRetro className="text-xl" />
            </label>
            <input
              type="file"
              name="file"
              id="img"
              onChange={changeHandler}
              className="hidden"
            />
          </div>
        </div>

        {/* Form Fields */}
        {[
          {
            label: "Company Name",
            type: "text",
            name: "companyName",
            placeholder: "Enter your company name",
          },
          {
            label: "Company Email",
            type: "email",
            name: "email",
            placeholder: "Enter your company email",
          },
          {
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "Create a password",
          },
          {
            label: "company website",
            type: "url",
            name: "website",
            placeholder: "Create a company website",
          },
          {
            label: "Phone",
            type: "text",
            name: "phone",
            placeholder: "Phone number",
          },
          {
            label: "About",
            type: "text",
            name: "about",
            placeholder: "About Your Company",
          },
        ].map(({ label, type, name, placeholder }) => (
          <div key={name} className="mb-5">
            <label className="block text-sm font-semibold text-[#cbd5e1] mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={value[name]}
              onChange={changeHandler}
              placeholder={placeholder}
              className="w-full p-3 bg-[#0f172a] text-white border border-[#334155] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#38bdf8] text-[#0f172a] font-bold rounded-full hover:bg-[#0ea5e9] hover:shadow-lg transition duration-300"
        >
          Sign Up & Explore
        </button>
      </form>
    </div>
  );
}

export default updateProfile;
