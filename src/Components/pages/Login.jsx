import React, { useState } from "react";
import logo from "@/assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import showCustomToast from "../ui/CustomToast";
import bcrypt from "bcryptjs";
import Button from "../ui/Button";
import api from "../utils/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (email == "") {
      showCustomToast("Please enter email");
      return;
    }
    if (password === "") {
      showCustomToast("Please enter password");
      return;
    }
    setLoading(true);
    try {
      const response = await api
        .post("/auth/login", {
          email,
          password,
        })
        .then(async (res) => {
          console.log({ res });
          const getUserDetails = await api.get("/user");
          if (getUserDetails) {
            console.log({ getUserDetails });
            navigate("/");
            setLoading(false);
            showCustomToast("Login successful!", "success");
          }
        });
    } catch (error) {
      showCustomToast(error, "error");
      setLoading(false);
    }
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="w-full bg-black text-white font-semibold py-3 mt-8 rounded-lg"
              type="submit"
              disabled={email === "" || password === ""}
            >
              Log in
            </Button>
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
