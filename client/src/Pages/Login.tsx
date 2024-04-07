import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import rect from "./../assets/_Rect_.png";
import rect2 from "./../assets/_Rect_2.png";
import { UserContext } from "../context/userContext";
import { BsGithub , BsGoogle } from 'react-icons/bs';
import NavbarSec from "../components/global/NavbarSec";

const Login = () => {

  const context = useContext(UserContext);
  const { userInfo, setUserInfo, RegisterUser, signInUser, forgotPassword, UserDetailsFirebase, signInUserGoogle, signInUserGitHub, getuserinfo } = context!;
  
  const [credentails, setCredentails] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  const [signup, setSignup] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  useEffect(() => {
    console.log(userInfo);
  },[userInfo]);
  console.log(UserDetailsFirebase);
  // const context = useContext(userContext);
  // const { login, signin } = context;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let json;

    if (signup) {
      if (credentails.password !== credentails.cpassword) {
        return;
      }
      if ( (credentails.cpassword && credentails.name && credentails.email && credentails.password) && (credentails.cpassword !== credentails.password)) {
        return;
      }

      RegisterUser(credentails.email, credentails.name, credentails.password)

      // json = await ((signin({
      //   name: credentails.name,
      //   email: credentails.email,
      //   password: credentails.password,
      // })));
      // if (json.success) {
      //   //save the auth_token and redirect
      //   localStorage.removeItem("token");
      //   localStorage.setItem("token", json.jwt_token);
      //   navigate("/");
      // } else {

      // }
    } else {
      // If signup is false, call the login context
      signInUser(credentails.email, credentails.password);
      console.log("hi");
      
      // json = await login({
      //   email: credentails.email,
      //   password: credentails.password,
      // });
      // if (json.success) {
      //   localStorage.setItem("token", json.auth_token);
      //   navigate("/");
      // } else {
      // }
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <div className="relative overflow-x-hidden w-full h-[100vh] flex flex-col justify-start items-center">
      <NavbarSec />
      {/* TODO: add state to show elements */}
      <div className="absolute left-[-23vh] top-[10%] w-[17rem] h-[30rem] transform -rotate-98.5 flex-shrink-0 sphere1 opacity-30"></div>
      <div className="absolute right-[-23vh] bottom-[10%] w-[17rem] h-[30rem] transform -rotate-98.5 flex-shrink-0 sphere1 opacity-30"></div>

      <section className="mt-[3rem]">
        <div className="relative flex flex-col items-center justify-center px-6 py-8 h-[45rem] lg:py-0">
          <div className="absolute z-0 opacity-70 w-[11rem] h-fit top-[6rem] left-[-5rem] animate-bounce-slow translate-y-5">
            <img src={rect} alt="recthere" />
          </div>
          <div className="absolute z-0 opacity-70 w-[11rem] h-fit bottom-[1rem] right-[-6rem] animate-bounce-slow-late">
            <img src={rect2} className="" alt="recthere" />
          </div>
          <div className="flex items-center mb-6">
            <div className="font-redhat font-black text-[7vh] textbackground">
              AIEDS
            </div>
          </div>
          <div className="z-10 w-[35rem] rounded-[1rem] border border-textbox-border border-1 border-opacity-20 backdrop-blur-md bg-transparent">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-primary-white font-natosans md:text-2xl ">
                {signup ? "Create a new account" : "Sign in to your account"}
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                {signup && (
                  <div>
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-primary-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border border-textbox-border border-1 bg-tertiary-background outline-none sm:text-sm rounded-lg text-primary-white focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="h-sm"
                      onChange={onChange}
                      minLength={3}
                      required
                    />
                  </div>
                )}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-primary-white "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-textbox-border border-1 bg-tertiary-background outline-none sm:text-sm rounded-lg text-primary-white focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="email@gmail.com"
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
                <div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-primary-white"
                    >
                      Password
                    </label>
                    <input
                      type={showpassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder={showpassword ? "password" : "••••••••"}
                      className="border border-textbox-border border-1 bg-tertiary-background outline-none sm:text-sm rounded-lg text-primary-white focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      onChange={onChange}
                      minLength={3}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-[55%] text-[#fff] focus:outline-none"
                      onClick={() => setShowpassword(!showpassword)}
                    >
                      {showpassword ? (
                        <svg
                          className="w-6 h-6 text-primary-white/70"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-primary-white/70"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 14"
                        >
                          <g
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                          </g>
                        </svg>
                      )}
                    </button>
                  </div>
                  {!signup ? (
                    <a
                      href="/forgot-password"
                      className="text-sm text-end text-primary-white font-natosans font-medium hover:underline"
                    >
                      Forgot password?
                    </a>
                  ) : (
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 mt-4 text-sm font-medium text-primary-white"
                      >
                        Refill password
                      </label>
                      <input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        placeholder="••••••••"
                        className="border border-textbox-border border-1 bg-tertiary-background outline-none sm:text-sm rounded-lg text-primary-white focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        onChange={onChange}
                        minLength={3}
                        required
                      />
                    </div>
                  )}
                </div>
                <div className="my-6 mx-2">
                  <div className="relative">
                    {/* 50 */}
                    <div className="absolute inset-0 flex justify-between items-center">
                      <div className="w-[45%] border-t border-gray-300/30" />
                      <div className="w-[45%] border-t border-gray-300/30" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-transparent px-2 text-primary-white">
                        OR
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button type='button' onClick={signInUserGoogle} className='inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-gray-500 shadow-sm ring-1 ring-primary-white ring-opacity-10 hover:bg-white/10  transition ease-in-out'>
                      <BsGoogle />
                    </button>
                    <button type='button' onClick={signInUserGitHub} className='inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-gray-500 shadow-sm ring-1 ring-primary-white ring-opacity-10 hover:bg-white/10 transition ease-in-out'>
                      <BsGithub />
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-textbox-background hover:bg-textbox-background-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  {signup ? "Sign up" : "Log in"}
                </button>
                <div className="text-sm font-light flex flex-row items-center justify-center gap-1 text-primary-white font-natosans">
                  <p>
                    {signup
                      ? "Already have an account? "
                      : "Don't have an account yet? "}
                  </p>
                  <p
                    onClick={() => setSignup(!signup)}
                    className="font-medium text-primary-600 hover:underline hover:cursor-pointer select-none"
                  >
                    {signup ? "Log in" : "Sign up"}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
