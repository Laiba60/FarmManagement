import React from "react";
import { Link } from "react-router-dom";

const Agritecdashboard = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="flex h-full min-h-[300px] lg:min-h-[700px] flex-col justify-between bg-slate-50 p-4 border-b lg:border-b-0">
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <div className="flex gap-3 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBubDXRc5dGvENw1Bh-eXC4T4Y741f9lkVY7sUmP3TitxaYOhYSKsn6RKVgipuvBxRZrCuairzIZFyyHJUG5VpZZfOKsx71TxEXfn8UJuO1D6uJqO3XkGbI50t_GVrQrYqWlldPIxnmo1uz4lw61iRDCzzDnp7rnTfCxsZMbnkvfKsfx9y6tOKAaptq9GpsSlEdsliZttg2OuKt8k40hdQ3g-4ZziQWWFwzwpUNAbK6IENhzfiDKBJYlc8km-D_GJsM5QQjdPxRk8z8")',
                  }}
                ></div>
                <a
                  href="/"
                  className="text-[#0d141c] text-base font-medium leading-normal"
                >
                  AgriTech Solutions
                </a>
              </div>

              {/* Menu */}
              <div className="flex flex-col gap-2">
                {/* Active item */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                  <div className="text-[#0d141c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0l80,75.59A16,16,0,0,1,224,115.55Z"></path>
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Dashboard</p>
                </div>

                {/* Other menu items */}
                <div className="flex items-center gap-3 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224l64-16a8,8,0,0,0,8-8V56A8,8,0,0,0,228.92,49.69Z"></path>
                  </svg>
                  <p className="text-sm font-medium">Missions</p>
                </div>

                <div className="flex items-center gap-3 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Z"></path>
                  </svg>
                  <p className="text-sm font-medium">Robots</p>
                </div>

                <div className="flex items-center gap-3 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
                  </svg>
                  <p className="text-sm font-medium">
                    <Link to="/supportchat">Support</Link>
                  </p>
                </div>

                <div className="flex items-center gap-3 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8Z"></path>
                  </svg>
                  <p className="text-sm font-medium">Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-2">
              <p className="text-[28px] lg:text-[32px] font-bold leading-tight">
                Dashboard
              </p>
              <p className="text-[#49739c] text-sm">Welcome back, Farmer McGregor</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {/* Robot Features */}
            <Section
              title="Robot Features"
              features={[
                {
                  subtitle: "Precision Spraying",
                  title: "Advanced Nozzle Control",
                  desc: "Our robots use advanced nozzle control technology to ensure precise and efficient spraying.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSof2Gwo5mDZH1I6Kc5beEw-z85k1FCMNGymFr8kcUzQSZyZy0NoTX2HQquKA3Ob8ih_OTiplee43r9SKbtBhjrCrO1dZCUCMBJxxRBxIQuZqLZVvGhaw4o7olU7HCrfDbUK2MIpAgmb2Ml4QYQVHH97vQN8R_f64mr81t_ji6V8Qhzbq1eKbIxIAscqabWMBQc0dRnt1pA9pD-OTbWrrscDdnk1wzDdyWbREm3xJOVPMgsSVOEgrvxS8z3RZUz3FMa-3YLE5bwlPR",
                },
                {
                  subtitle: "Autonomous Navigation",
                  title: "GPS-Guided Precision",
                  desc: "Equipped with GPS-guided navigation, our robots autonomously navigate fields with accuracy.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy-eqUAHpr4qWimtoaVpMk0mfL1KWxLL0vRiNHsISAzTe2NTgrGS4fSvwS03RL9EkFtmUWny0mOllKZZZ-dt-00zp4D-nr3PkDjdlP8JoCLcOYl33JtMzs6YmRFIAysnOlq_vf3WnocVUkTSAsVGp5MrQuctM2EZTnU0nlC5Pa1dhTlxiaw1e-xlW52s9B_bq617RZ4iaB5Jxy8N90wbF6PryNZ5cmnTH5g-bmzzukxyn6i1FwZFVmZJrmJeY1V4DLR3RgSHR_Hy1p",
                },
                {
                  subtitle: "Real-Time Monitoring",
                  title: "Live Data Insights",
                  desc: "Monitor your robot's progress in real-time with live data insights including battery status.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6RitLCWcXX7jYNXcer_bDvodY-x5sQzEFqbMmWn0d4hs_OhmL19_93KdGSiMKYwGMpVHDozi8XKxq0MdliEOwQzMVXb-11sWVFWPRzF79Dco7so3My84G8N6MMHB7LvbZydKNfXhmuZoN3NxMC6uV8jY-a8a3333zvYsIIEtrz09PtluMRA4a1U0_x4UE8nR6aSkdNIMyXycvs6uUO_wgbRtoQzdGDfGQ2Z7HFW-aDlsspXWFe3SkQEflKlguFf5vH9CHTkjImXA-",
                },
              ]}
            />

            {/* Rental Prices */}
            <Section
              title="Rental Prices"
              features={[
                {
                  title: "Flexible Rental Options",
                  desc: "Choose from hourly, daily, or weekly rental plans with transparent pricing.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQMk0sPLO3IFtWLXgF3Fkh9M3Ewl8dcA_SA-XtQmtioP5fWEfD6fl-MTHwASuhLhlqouuj5WAmLb7o9SwySFiTZdJdqjHaDimaPjvpbzo5dmHFfPPXg5rV6WjliluFbde6c6Exq5O3uiHVBTxgrKMLxWMBdelMyDbLB-sU99NQ0ruOwXdUrwHHprK15ZnGOE6H77crwAXztQDhOIeuyFQei4w1J8sHs0EB5h4I9e3KeEu6-hu6n0EmzC-nzzhlWUeSGjCZq9V3O_83",
                },
              ]}
            />

            {/* Precision Details */}
            <div className="px-4">
              <h2 className="text-[22px] font-bold pb-3">Precision Spraying Details</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[150px] p-6 border rounded-lg">
                  <p className="font-medium">Remaining Spray</p>
                  <p className="text-2xl font-bold">85%</p>
                </div>
                <div className="flex-1 min-w-[150px] p-6 border rounded-lg">
                  <p className="font-medium">Previous Work</p>
                  <p className="text-2xl font-bold">20 acres</p>
                </div>
              </div>
            </div>

            {/* Mission Planning */}
            <Section
              title="Mission Planning"
              features={[
                {
                  title: "Plan Your Next Mission",
                  desc: "Easily plan your next spraying mission with our intuitive mission planning tool.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClOBnLC3IgzPFeh0_qGG37gnOAMzauYEEEXh9ijdhhvSsByLcmH5g87ISsrH4Y46eryaUFyfJ2fDspV7cUi7itAPpyUOibYPwGFEQKN_yZK_2WBh-3I0bEC-APR0WXhO0iZ4g9K0DLhPs9DH7te8iQr9tuCFXNRxGKHKBPVRkPmts4pV7GXTA3k2OwGBN_KD19CYEIFBA55TLvIJPjx88kYYHM3AoyhD9Oto5ukG4h3pi1wN1W0tz4UAc3ZD6EWprLQiJX_0QzuDQM",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, features }) => (
  <div className="px-4">
    <h2 className="text-[22px] font-bold pb-3">{title}</h2>
    <div className="space-y-6">
      {features.map((f, i) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row gap-4 rounded-lg"
        >
          <div className="flex flex-col flex-1 gap-1">
            {f.subtitle && <p className="text-sm text-[#49739c]">{f.subtitle}</p>}
            <p className="text-base font-bold">{f.title}</p>
            <p className="text-sm text-[#49739c]">{f.desc}</p>
          </div>
          <div
            className="w-full lg:w-1/2 bg-center bg-cover rounded-lg aspect-video"
            style={{ backgroundImage: `url("${f.img}")` }}
          ></div>
        </div>
      ))}
    </div>
  </div>
);

export default Agritecdashboard;
