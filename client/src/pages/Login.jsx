import React from 'react';

const Login = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{
        '--checkbox-tick-svg':
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(248,250,252)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')",
        fontFamily: 'Inter, "Noto Sans", sans-serif'
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d141c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">FarmBot</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Products</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Solutions</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Resources</a>
              <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Company</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0d80f2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Get Started</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Log In</span>
              </button>
            </div>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-lg min-h-[218px]"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZ6LhUbIANkEupg5eUquiD4g6B6Bqcp7Q0C90Xj9hp2IzcRvUsHgOJRdYQ811HU-ETVt68Lzf1vcoai_PmigV3IkCaTlyJxECszEDUr5H5spf9cF_SjyEPV-oUcosM9fvMylH7DZFkfC7iIGQ5UwuDXBhlornn7O6V5BMj4BUnwlABWFzQyCdVpf8h1rL_3a_Am7COBz_e_E_Ii9zI1HoagEPkfu180-8xeVP1-p55VVfa9ZpP3RBza4qwAsZJG2u7KLVyGUZ5c4p3")'
                  }}
                ></div>
              </div>
            </div>

            <h2 className="text-[#0d141c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Log in to your account
            </h2>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Username"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] h-14 placeholder:text-[#49739c] p-4 text-base"
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] h-14 placeholder:text-[#49739c] p-4 text-base"
                />
              </label>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
              <p className="text-[#0d141c] text-base font-normal flex-1 truncate">Remember me</p>
              <div className="shrink-0">
                <div className="flex size-7 items-center justify-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-[#cedbe8] border-2 bg-transparent text-[#0d80f2] checked:bg-[#0d80f2] checked:border-[#0d80f2] focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex px-4 py-3">
              <button className="flex h-10 flex-1 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700
px-4 text-sm font-bold text-slate-50">
                Log In
              </button>
            </div>

            <p className="text-[#49739c] text-sm text-center underline px-4 pt-1 pb-3">
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
