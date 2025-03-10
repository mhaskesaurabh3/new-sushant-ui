import React, { useState } from "react";
import logo from "@/assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import showCustomToast from "../ui/CustomToast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    showCustomToast("Testing", "success");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-12 max-w-[450px] rounded-3xl">
        <img src={logo} alt="" />
        <p className="text-black mt-4 text-3xl font-semibold mb-[12px]">
          Continue to use Sushant patil music
        </p>
        <p className="text-black text-base">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-8">
          <form onSubmit={handleLoginFormSubmit}>
            <input
              type="text"
              className="w-full text-black border font-medium border-[#ced0d4] p-3 rounded-md hover:border-gray-500 focus:border-gray-500 focus:border focus:outline-none "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="w-full mt-6 text-black border font-medium border-[#ced0d4] p-3 rounded-md hover:border-gray-500 focus:border-gray-500 focus:border focus:outline-none "
              placeholder="Password"
            />
            <button
              className="w-full bg-black text-white font-semibold py-3 mt-8 rounded-lg"
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="mt-6">
            <p className="text-sm text-black">
              Not registered yet?
              <span
                className="text-[#1890ff] font-bold cursor-pointer hover:underline"
                onClick={() => navigate("/signin")}
              >
                &nbsp; Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
