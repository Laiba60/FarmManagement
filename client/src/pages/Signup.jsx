import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Picturelogo.png";
import axios from "axios";
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      setLoading(true);

      // Axios POST request
      const res = await axios.post("http://localhost:5000/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "farmer", // default role
      });

      console.log("User registered:", res.data);

      // Redirect to dashboard if success
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Navbar (Only Logo) */}
        <header className="flex items-center border-b border-solid border-b-[#e7edf4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[#0d141c]  bg-green-600">
            <div className="h-12 w-12">
              <img src={Logo} alt="No image" className="h-full w-full object-contain" />
            </div>
            <h2 className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
              AgriBull
            </h2>
          </div>
        </header>

        {/* Signup Form */}
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-20 lg:px-40">
          <div className="flex w-full max-w-[512px] flex-col py-5">
            <h2 className="pb-3 pt-5 text-center text-[22px] sm:text-[26px] md:text-[28px] font-bold leading-tight">
              Sign up for FarmTech
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-2 sm:px-4 py-2 sm:py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="form-input flex h-12 sm:h-14 w-full resize-none rounded-lg bg-[#e7edf4] p-3 sm:p-4 text-sm sm:text-base placeholder:text-[#49739c] focus:outline-none"
                  />
                </label>
              </div>

              {/* Email */}
              <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-2 sm:px-4 py-2 sm:py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-input flex h-12 sm:h-14 w-full resize-none rounded-lg bg-[#e7edf4] p-3 sm:p-4 text-sm sm:text-base placeholder:text-[#49739c] focus:outline-none"
                  />
                </label>
              </div>

              {/* Password */}
              <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-2 sm:px-4 py-2 sm:py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-input flex h-12 sm:h-14 w-full resize-none rounded-lg bg-[#e7edf4] p-3 sm:p-4 text-sm sm:text-base placeholder:text-[#49739c] focus:outline-none"
                  />
                </label>
              </div>

              {/* Confirm Password */}
              <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-2 sm:px-4 py-2 sm:py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="form-input flex h-12 sm:h-14 w-full resize-none rounded-lg bg-[#e7edf4] p-3 sm:p-4 text-sm sm:text-base placeholder:text-[#49739c] focus:outline-none"
                  />
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              {/* Submit Button */}
              <div className="flex px-2 sm:px-4 py-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#0d80f2] px-3 sm:px-4 text-sm font-bold text-white disabled:bg-gray-400"
                >
                  {loading ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </form>

            <p className="px-2 sm:px-4 pt-1 pb-3 text-center text-xs sm:text-sm text-[#49739c] underline">
               <Link to="/login">
    Already have an account? Log in
  </Link>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
