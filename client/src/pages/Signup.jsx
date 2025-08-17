import React from "react";

const Signup = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        
        {/* Navbar */}
        <header className="flex flex-wrap items-center justify-between border-b border-solid border-b-[#e7edf4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[#0d141c]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
              FarmTech
            </h2>
          </div>
          <div className="flex flex-wrap justify-end gap-4 sm:gap-6 md:gap-8 mt-3 sm:mt-0 flex-1">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-9">
              <a className="text-sm font-medium" href="#">Products</a>
              <a className="text-sm font-medium" href="#">Solutions</a>
              <a className="text-sm font-medium" href="#">Resources</a>
              <a className="text-sm font-medium" href="#">Pricing</a>
            </div>
            <button className="flex h-9 sm:h-10 min-w-[84px] items-center justify-center rounded-lg bg-[#e7edf4] px-3 sm:px-4 text-xs sm:text-sm font-bold text-[#0d141c]">
              Log in
            </button>
          </div>
        </header>

        {/* Signup Form */}
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-20 lg:px-40">
          <div className="flex w-full max-w-[512px] flex-col py-5">
            <h2 className="pb-3 pt-5 text-center text-[22px] sm:text-[26px] md:text-[28px] font-bold leading-tight">
              Sign up for FarmTech
            </h2>

            {["Full name", "Email", "Password", "Confirm password"].map(
              (placeholder, idx) => (
                <div
                  key={idx}
                  className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-2 sm:px-4 py-2 sm:py-3"
                >
                  <label className="flex flex-col min-w-40 flex-1">
                    <input
                      placeholder={placeholder}
                      className="form-input flex h-12 sm:h-14 w-full resize-none rounded-lg bg-[#e7edf4] p-3 sm:p-4 text-sm sm:text-base placeholder:text-[#49739c] focus:outline-none"
                    />
                  </label>
                </div>
              )
            )}

            <div className="flex px-2 sm:px-4 py-3">
              <button className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#0d80f2] px-3 sm:px-4 text-sm font-bold text-white">
                Sign up
              </button>
            </div>

            <p className="px-2 sm:px-4 pt-1 pb-3 text-center text-xs sm:text-sm text-[#49739c] underline">
              Already have an account? Log in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
