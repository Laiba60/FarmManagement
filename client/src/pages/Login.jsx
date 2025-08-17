import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-slate-50">
      <div className="flex flex-col flex-1">
        
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between border-b border-solid border-b-[#e7edf4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[#0d141c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <a href="/" className="text-[#0d141c] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">FarmBot</a>
          </div>
          
          {/* Right Menu */}
          <div className="flex flex-wrap justify-end gap-4 sm:gap-6 md:gap-8 mt-3 sm:mt-0 flex-1">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-9">
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Products</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Solutions</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Resources</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Company</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-4 bg-[#0d80f2] text-slate-50 text-xs sm:text-sm font-bold">
                <span className="truncate">Get Started</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-9 sm:h-10 px-3 sm:px-4 bg-[#e7edf4] text-[#0d141c] text-xs sm:text-sm font-bold">
                <span className="truncate">Log In</span>
              </button>
            </div>
          </div>
        </header>

        {/* Login Form Center */}
        <div className="flex flex-1 items-center justify-center py-5 px-3 sm:px-6">
          <div className="flex flex-col w-full max-w-[512px] py-5">

            {/* Image */}
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-lg min-h-[180px] sm:min-h-[218px]"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZ6LhUbIANkEupg5eUquiD4g6B6Bqcp7Q0C90Xj9hp2IzcRvUsHgOJRdYQ811HU-ETVt68Lzf1vcoai_PmigV3IkCaTlyJxECszEDUr5H5spf9cF_SjyEPV-oUcosM9fvMylH7DZFkfC7iIGQ5UwuDXBhlornn7O6V5BMj4BUnwlABWFzQyCdVpf8h1rL_3a_Am7COBz_e_E_Ii9zI1HoagEPkfu180-8xeVP1-p55VVfa9ZpP3RBza4qwAsZJG2u7KLVyGUZ5c4p3")'
                  }}
                ></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[#0d141c] text-[22px] sm:text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Log in to your account
            </h2>

            {/* Username */}
            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Username"
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
                  className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] h-12 sm:h-14 placeholder:text-[#49739c] p-3 sm:p-4 text-sm sm:text-base"
                />
              </label>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-12 sm:min-h-14 justify-between">
              <p className="text-[#0d141c] text-sm sm:text-base font-normal flex-1 truncate">Remember me</p>
              <div className="shrink-0">
                <div className="flex size-6 sm:size-7 items-center justify-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 sm:h-5 sm:w-5 rounded border-[#cedbe8] border-2 bg-transparent text-[#0d80f2] checked:bg-[#0d80f2] checked:border-[#0d80f2] focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Button */}
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
