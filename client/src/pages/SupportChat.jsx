import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Picturelogo.png";
const SupportChat = () => {
   const navigate = useNavigate();
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[#0d141c]">
           <div className="h-12 w-12">
               <img
                 src={Logo}
                 alt="No image"
                 className="h-full w-full object-contain"
               />
             </div>
            <a href="/" className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">
              AgriBull
            </a>
          </div>
          <div className="flex flex-wrap justify-end flex-1 gap-4 sm:gap-8 mt-3 sm:mt-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-9">
              <a className="text-[#0d141c] text-sm font-medium" href="#">
                Products
              </a>
              <a className="text-[#0d141c] text-sm font-medium" href="#">
                Solutions
              </a>
              <a className="text-[#0d141c] text-sm font-medium" href="#">
                Resources
              </a>
              <a className="text-[#0d141c] text-sm font-medium" href="#">
                Company
              </a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#0d80f2] text-slate-50 text-sm font-bold">
                <span className="truncate">Get Started</span>
              </button>
              <button
                 onClick={() => navigate("/login")} className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold">
                <span className="truncate">Log In</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="px-4 sm:px-6 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] py-5">
            <h2 className="text-[#0d141c] text-[22px] sm:text-[28px] font-bold leading-tight px-2 sm:px-4 text-center pb-3 pt-5">
              How can we help?
            </h2>

            {/* Search */}
            <div className="px-2 sm:px-4 py-3">
              <label className="flex flex-col w-full h-12">
                <div className="flex w-full h-full items-stretch rounded-lg">
                  <div className="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pl-3 sm:pl-4 rounded-l-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for answers"
                    className="flex w-full px-3 sm:px-4 text-base rounded-r-lg border-none bg-[#e7edf4] focus:outline-none placeholder:text-[#49739c]"
                  />
                </div>
              </label>
            </div>

            {/* Popular topics */}
            <h2 className="text-[#0d141c] text-xl sm:text-[22px] font-bold px-2 sm:px-4 pb-3 pt-5">
              Popular topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2 sm:p-4">
              {/* Topic cards */}
              <div className="flex flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                <h2 className="text-base font-bold">Getting started</h2>
                <p className="text-sm text-[#49739c]">
                  Learn how to set up your FarmBot
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                <h2 className="text-base font-bold">Troubleshooting</h2>
                <p className="text-sm text-[#49739c]">
                  Fix common issues with your FarmBot
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                <h2 className="text-base font-bold">Shipping & Delivery</h2>
                <p className="text-sm text-[#49739c]">
                  Track your order and delivery status
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                <h2 className="text-base font-bold">Billing & Payments</h2>
                <p className="text-sm text-[#49739c]">
                  Manage your payment methods and subscriptions
                </p>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-[#0d141c] text-xl sm:text-[22px] font-bold px-2 sm:px-4 pb-3 pt-5">
              Frequently asked questions
            </h2>
            <div className="flex flex-col p-2 sm:p-4">
              <details className="border-t border-[#cedbe8] py-2">
                <summary className="flex justify-between cursor-pointer">
                  <p className="text-sm font-medium text-[#0d141c]">
                    What is FarmBot?
                  </p>
                </summary>
              </details>
              <details className="border-t border-[#cedbe8] py-2">
                <summary className="flex justify-between cursor-pointer">
                  <p className="text-sm font-medium text-[#0d141c]">
                    How does FarmBot work?
                  </p>
                </summary>
              </details>
              <details className="border-t border-[#cedbe8] py-2">
                <summary className="flex justify-between cursor-pointer">
                  <p className="text-sm font-medium text-[#0d141c]">
                    What are the benefits of using FarmBot?
                  </p>
                </summary>
              </details>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center px-2 sm:px-4 py-3">
              <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-[#e7edf4] text-[#0d141c] text-sm font-bold">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;
