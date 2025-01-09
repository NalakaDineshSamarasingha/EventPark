import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axiosInstance from "../axiosInstance";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Initialize useNavigate
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Use axiosInstance for making the API request
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      // Store the token in localStorage
      localStorage.setItem("authToken", response.data.token);

      // Check if the user is an admin, then redirect accordingly
      if (response.data.user.role === "admin") {
        navigate("/admin");  // Redirect to the admin page
      } else {
        navigate("/");  // Redirect to the regular home page
      }

      alert("Logged In");

    } catch (err) {
      // If login fails, show an error message
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-24">
      <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center flex flex-col items-center mb-6">
          <h1 className="text-2xl font-bold text-black">
            <img src="../../images/logo.png" width={160} />
          </h1>
          <p className="text-gray-500">Welcome Back</p>
          <p className="text-gray-400 text-sm">
            Glad to see you again! Sign in to your 714Tickets account below
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot password
            </a>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#000066] text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Sign-in */}
        <button className="w-full flex items-center justify-center border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <button
          className="w-full mt-4 text-center text-blue-600 hover:underline text-sm"
        >
          <Link to='/register'> Create an account</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
