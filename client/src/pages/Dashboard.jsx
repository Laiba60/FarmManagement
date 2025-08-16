import React from 'react'
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
  
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h1 className="text-[#0d141c] text-base font-medium leading-normal">FarmTech</h1>
                  <p className="text-[#49739c] text-sm font-normal leading-normal">Admin</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                    <div className="text-[#0d141c]" data-icon="House" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">
                       <Link to="/Agritecdashboard">Dashboard</Link></p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="Robot" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Robots</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="Users" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Engineers</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="Calendar" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Rentals</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#0d141c]" data-icon="Gear" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#0d141c] text-sm font-medium leading-normal">Settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">Dashboard</p></div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Overview</h2>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cedbe8]">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Available Robots</p>
                <p className="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">12</p>
                <p className="text-[#078838] text-base font-medium leading-normal">+10%</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cedbe8]">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Engineers</p>
                <p className="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">5</p>
                <p className="text-[#078838] text-base font-medium leading-normal">+5%</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cedbe8]">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Due Dates</p>
                <p className="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">3</p>
                <p className="text-[#e73908] text-base font-medium leading-normal">-2%</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cedbe8]">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Earnings</p>
                <p className="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">$15,000</p>
                <p className="text-[#078838] text-base font-medium leading-normal">+15%</p>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Robot Health</h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cedbe8] p-6">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Robot Availability</p>
                <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight truncate">12</p>
                <div className="flex gap-1">
                  <p className="text-[#49739c] text-base font-normal leading-normal">This Month</p>
                  <p className="text-[#078838] text-base font-medium leading-normal">+10%</p>
                </div>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-[#49739c] bg-[#e7edf4] border-t-2 w-full" style={{ height: "80%" }}></div>
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Robots</p>
                  <div className="border-[#49739c] bg-[#e7edf4] border-t-2 w-full" style={{ height: "80%" }}></div>
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Engineers</p>
                  <div className="border-[#49739c] bg-[#e7edf4] border-t-2 w-full" style={{ height: "50%" }}></div>
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Due Dates</p>
                  <div className="border-[#49739c] bg-[#e7edf4] border-t-2 w-full" style={{ height: "70%" }}></div>
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Earnings</p>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cedbe8] p-6">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Robot Status</p>
                <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight truncate">5</p>
                <div className="flex gap-1">
                  <p className="text-[#49739c] text-base font-normal leading-normal">This Month</p>
                  <p className="text-[#078838] text-base font-medium leading-normal">+5%</p>
                </div>
                <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Operational</p>
                  <div className="h-full flex-1"><div className="border-[#49739c] bg-[#e7edf4] border-r-2 h-full" style={{ width: "60%" }}></div></div>
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Maintenance</p>
                  <div className="h-full flex-1"><div className="border-[#49739c] bg-[#e7edf4] border-r-2 h-full" style={{ width: "20%" }}></div></div>
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Repair</p>
                  <div className="h-full flex-1"><div className="border-[#49739c] bg-[#e7edf4] border-r-2 h-full" sstyle={{ width: "90%" }}></div></div>
                  <p className="text-[#49739c] text-[13px] font-bold leading-normal tracking-[0.015em]">Idle</p>
                  <div className="h-full flex-1"><div className="border-[#49739c] bg-[#e7edf4] border-r-2 h-full" style={{ width: "60%" }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

  )
}

export default Dashboard