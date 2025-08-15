import React from 'react'

const Agritecdashboard = () => {
  return (

    <div class="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style='font-family: Inter, "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <div class="gap-1 px-6 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-80">
            <div class="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
              <div class="flex flex-col gap-4">
                <div class="flex gap-3">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBubDXRc5dGvENw1Bh-eXC4T4Y741f9lkVY7sUmP3TitxaYOhYSKsn6RKVgipuvBxRZrCuairzIZFyyHJUG5VpZZfOKsx71TxEXfn8UJuO1D6uJqO3XkGbI50t_GVrQrYqWlldPIxnmo1uz4lw61iRDCzzDnp7rnTfCxsZMbnkvfKsfx9y6tOKAaptq9GpsSlEdsliZttg2OuKt8k40hdQ3g-4ZziQWWFwzwpUNAbK6IENhzfiDKBJYlc8km-D_GJsM5QQjdPxRk8z8");'
                  ></div>
                  <h1 class="text-[#0d141c] text-base font-medium leading-normal">AgriTech Solutions</h1>
                </div>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                    <div class="text-[#0d141c]" data-icon="House" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#0d141c] text-sm font-medium leading-normal">Dashboard</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#0d141c]" data-icon="MapTrifold" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#0d141c] text-sm font-medium leading-normal">Missions</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#0d141c]" data-icon="Robot" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#0d141c] text-sm font-medium leading-normal">Robots</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#0d141c]" data-icon="Question" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#0d141c] text-sm font-medium leading-normal">Support</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#0d141c]" data-icon="User" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#0d141c] text-sm font-medium leading-normal">Account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">Dashboard</p>
                <p class="text-[#49739c] text-sm font-normal leading-normal">Welcome back, Farmer McGregor</p>
              </div>
            </div>
            <h2 class="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Robot Features</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#49739c] text-sm font-normal leading-normal">Precision Spraying</p>
                  <p class="text-[#0d141c] text-base font-bold leading-tight">Advanced Nozzle Control</p>
                  <p class="text-[#49739c] text-sm font-normal leading-normal">
                    Our robots use advanced nozzle control technology to ensure precise and efficient spraying, minimizing waste and maximizing coverage.
                  </p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSof2Gwo5mDZH1I6Kc5beEw-z85k1FCMNGymFr8kcUzQSZyZy0NoTX2HQquKA3Ob8ih_OTiplee43r9SKbtBhjrCrO1dZCUCMBJxxRBxIQuZqLZVvGhaw4o7olU7HCrfDbUK2MIpAgmb2Ml4QYQVHH97vQN8R_f64mr81t_ji6V8Qhzbq1eKbIxIAscqabWMBQc0dRnt1pA9pD-OTbWrrscDdnk1wzDdyWbREm3xJOVPMgsSVOEgrvxS8z3RZUz3FMa-3YLE5bwlPR");'
                ></div>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#49739c] text-sm font-normal leading-normal">Autonomous Navigation</p>
                  <p class="text-[#0d141c] text-base font-bold leading-tight">GPS-Guided Precision</p>
                  <p class="text-[#49739c] text-sm font-normal leading-normal">
                    Equipped with GPS-guided navigation, our robots autonomously navigate fields with centimeter-level accuracy, ensuring thorough coverage and reducing human
                    error.
                  </p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAy-eqUAHpr4qWimtoaVpMk0mfL1KWxLL0vRiNHsISAzTe2NTgrGS4fSvwS03RL9EkFtmUWny0mOllKZZZ-dt-00zp4D-nr3PkDjdlP8JoCLcOYl33JtMzs6YmRFIAysnOlq_vf3WnocVUkTSAsVGp5MrQuctM2EZTnU0nlC5Pa1dhTlxiaw1e-xlW52s9B_bq617RZ4iaB5Jxy8N90wbF6PryNZ5cmnTH5g-bmzzukxyn6i1FwZFVmZJrmJeY1V4DLR3RgSHR_Hy1p");'
                ></div>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#49739c] text-sm font-normal leading-normal">Real-Time Monitoring</p>
                  <p class="text-[#0d141c] text-base font-bold leading-tight">Live Data Insights</p>
                  <p class="text-[#49739c] text-sm font-normal leading-normal">
                    Monitor your robot's progress in real-time with live data insights, including spray coverage, battery status, and any potential issues, all accessible from your
                    dashboard.
                  </p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6RitLCWcXX7jYNXcer_bDvodY-x5sQzEFqbMmWn0d4hs_OhmL19_93KdGSiMKYwGMpVHDozi8XKxq0MdliEOwQzMVXb-11sWVFWPRzF79Dco7so3My84G8N6MMHB7LvbZydKNfXhmuZoN3NxMC6uV8jY-a8a3333zvYsIIEtrz09PtluMRA4a1U0_x4UE8nR6aSkdNIMyXycvs6uUO_wgbRtoQzdGDfGQ2Z7HFW-aDlsspXWFe3SkQEflKlguFf5vH9CHTkjImXA-");'
                ></div>
              </div>
            </div>
            <h2 class="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Rental Prices</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#0d141c] text-base font-bold leading-tight">Flexible Rental Options</p>
                  <p class="text-[#49739c] text-sm font-normal leading-normal">
                    Choose from hourly, daily, or weekly rental plans to suit your specific needs and budget. Our transparent pricing ensures no hidden fees.
                  </p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQMk0sPLO3IFtWLXgF3Fkh9M3Ewl8dcA_SA-XtQmtioP5fWEfD6fl-MTHwASuhLhlqouuj5WAmLb7o9SwySFiTZdJdqjHaDimaPjvpbzo5dmHFfPPXg5rV6WjliluFbde6c6Exq5O3uiHVBTxgrKMLxWMBdelMyDbLB-sU99NQ0ruOwXdUrwHHprK15ZnGOE6H77crwAXztQDhOIeuyFQei4w1J8sHs0EB5h4I9e3KeEu6-hu6n0EmzC-nzzhlWUeSGjCZq9V3O_83");'
                ></div>
              </div>
            </div>
            <h2 class="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Precision Spraying Details</h2>
            <div class="flex flex-wrap gap-4 p-4">
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cedbe8]">
                <p class="text-[#0d141c] text-base font-medium leading-normal">Remaining Spray</p>
                <p class="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">85%</p>
              </div>
              <div class="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cedbe8]">
                <p class="text-[#0d141c] text-base font-medium leading-normal">Previous Work</p>
                <p class="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">20 acres</p>
              </div>
            </div>
            <h2 class="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Mission Planning</h2>
            <div class="p-4">
              <div class="flex items-stretch justify-between gap-4 rounded-lg">
                <div class="flex flex-col gap-1 flex-[2_2_0px]">
                  <p class="text-[#0d141c] text-base font-bold leading-tight">Plan Your Next Mission</p>
                  <p class="text-[#49739c] text-sm font-normal leading-normal">
                    Easily plan your next spraying mission with our intuitive mission planning tool. Define your field boundaries, set spray parameters, and schedule your robot's
                    operation.
                  </p>
                </div>
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuClOBnLC3IgzPFeh0_qGG37gnOAMzauYEEEXh9ijdhhvSsByLcmH5g87ISsrH4Y46eryaUFyfJ2fDspV7cUi7itAPpyUOibYPwGFEQKN_yZK_2WBh-3I0bEC-APR0WXhO0iZ4g9K0DLhPs9DH7te8iQr9tuCFXNRxGKHKBPVRkPmts4pV7GXTA3k2OwGBN_KD19CYEIFBA55TLvIJPjx88kYYHM3AoyhD9Oto5ukG4h3pi1wN1W0tz4UAc3ZD6EWprLQiJX_0QzuDQM");'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

  )
}

export default Agritecdashboard