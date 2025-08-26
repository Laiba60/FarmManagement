import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Logo from "../assets/images/Picturelogo.png";

const Login = () => {
  const navigate = useNavigate();

  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError(''); // reset error
    if (!username || !password) {
      setError('Please enter username and password');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/auth/login', {
        username,
        password
      });

      // Save token to localStorage (optional)
      localStorage.setItem('token', res.data.token);

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error('Login error:', err.response?.data || err);
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-slate-50">
      <div className="flex flex-col flex-1">

        {/* Header (Only Logo) */}
        <header className="flex items-center border-b border-solid border-b-[#e7edf4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[#0d141c] bg-green-600">
            <div className="h-12 w-12">
              <img src={Logo} alt="No image" className="h-full w-full object-contain" />
            </div>
            <a href="/" className="text-[#0d141c] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
              AgriBull
            </a>
          </div>
        </header>

        {/* Login Form Center */}
        <div className="flex flex-1 items-center justify-center px-3 sm:px-6">
          <div className="flex flex-col w-full max-w-[512px]">

            {/* Title */}
            <h2 className="text-[#0d141c] text-[22px] sm:text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Log in to your account
            </h2>

            {/* Error message */}
            {error && (
              <p className="text-red-600 text-center px-4 py-2">{error}</p>
            )}

            {/* Username */}
            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] h-12 sm:h-14 placeholder:text-[#49739c] p-3 sm:p-4 text-sm sm:text-base"
                />
              </label>
            </div>

            {/* Password */}
            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] h-12 sm:h-14 placeholder:text-[#49739c] p-3 sm:p-4 text-sm sm:text-base"
                />
              </label>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-12 sm:min-h-14 justify-between">
              <p className="text-[#0d141c] text-sm sm:text-base font-normal flex-1 truncate">Remember me</p>
              <div className="shrink-0">
                <input
                  type="checkbox"
                  className="h-4 w-4 sm:h-5 sm:w-5 rounded border-[#cedbe8] border-2 bg-transparent text-[#0d80f2] checked:bg-[#0d80f2] checked:border-[#0d80f2] focus:ring-0 focus:outline-none"
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="flex px-4 py-3">
              <button
                onClick={handleLogin}
                className="flex h-10 flex-1 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-4 text-sm sm:text-base font-bold text-slate-50">
                Log In
              </button>
            </div>

            {/* Forgot Password */}
            <p className="text-[#49739c] text-xs sm:text-sm text-center underline px-4 pt-1 pb-3">
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
