import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosInstance";
import Button from "../ui/Button";
import bcrypt from "bcryptjs";
import showCustomToast from "../ui/CustomToast";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };

      // Validate password match
      if (name === "password" || name === "confirmPassword") {
        setPasswordMatch(
          updatedForm.password && updatedForm.confirmPassword
            ? updatedForm.password === updatedForm.confirmPassword
            : null
        );
      }

      return updatedForm;
    });
  };

  const handleUserSubmit = async (e) => {
    console.log("inside handle user sumbit");
    e.preventDefault();

    setLoading(true);

    // Check if passwords match before sending API request
    if (!passwordMatch) {
      setError("Passwords do not match!");
      return;
    }
    try {
      // Hash the password before sending
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(formData.password, salt);
      const response = await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
      });
      console.log({ response });
      setLoading(false);
      showCustomToast("User registered successfully", "success");
      console.log("Registration Success:", response.data);
      navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
      console.log({ err });
      setLoading(false);
      showCustomToast(err, "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-12 max-w-[450px] rounded-3xl shadow-lg">
        <p className="text-black mt-4 text-3xl font-semibold mb-[12px]">
          Welcome! First things first...
        </p>
        <p className="text-gray-600 text-base">
          You can always change them later.
        </p>
        <div className="mt-8">
          <form onSubmit={handleUserSubmit}>
            <input
              type="text"
              name="name"
              className="w-full text-black border font-medium border-[#ced0d4] p-3 rounded-md hover:border-gray-500 focus:border-gray-500 focus:border focus:outline-none"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="w-full mt-6 text-black border font-medium border-[#ced0d4] p-3 rounded-md hover:border-gray-500 focus:border-gray-500 focus:border focus:outline-none"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="w-full mt-6 text-black border font-medium border-[#ced0d4] p-3 rounded-md hover:border-gray-500 focus:border-gray-500 focus:border focus:outline-none"
              placeholder="Set Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              className="w-full mt-6 text-black border font-medium border-[#ced0d4] p-3 rounded-md hover:border-gray-500 focus:border-gray-500 focus:border focus:outline-none"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {passwordMatch !== null && (
              <p
                className={`text-sm mt-2 ${
                  passwordMatch ? "text-green-600" : "text-red-600"
                }`}
              >
                {passwordMatch
                  ? "Passwords match ✅"
                  : "Passwords do not match ❌"}
              </p>
            )}
            <Button
              loading={loading}
              disabled={
                !passwordMatch ||
                !formData.name ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword
              }
              type="submit"
            >
              Log in
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-black text-left">
              Already have an account?
              <span
                className="text-[#1890ff] font-bold cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                &nbsp;Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
