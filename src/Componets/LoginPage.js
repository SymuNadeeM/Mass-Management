import React from "react";
import img1 from "../../src/assets/dia.jpg";

const LoginPage = () => {
  return (
    <>
      <div>
        <section className="h-screen">
          <div className="h-full bg-slate-300">
            {/* <!-- Left column container with background--> */}
            <div className=" grid md:grid-cols-2 gap-3 justify-center items-center">
              <div className=" flex items-center justify-center">
                <img src={img1} className=" h-screen" alt="Sampleimage" />
              </div>

              <div className=" px-[30px] md:px-1 w-full md:w-2/3">
                <div className=" bg-white py-4 px-4 rounded-md">
                  <form>
                    {/* <!-- Email input --> */}
                    <div className="relative mb-6">
                      <input
                        type="text"
                        className="peer border-b block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                      <label
                        for="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Email address
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="relative mb-6">
                      <input
                        type="password"
                        className="peer border-b block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput22"
                        placeholder="Password"
                      />
                      <label
                        for="exampleFormControlInput22"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >
                        Password
                      </label>
                    </div>

                    {/* <!-- Login button --> */}
                    <div className="text-center lg:text-left">
                      <button
                        type="button"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal  text-gray-900 hover:text-white bg-white hover:bg-gray-400   font-Robbi shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginPage;