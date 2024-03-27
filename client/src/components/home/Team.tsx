import React from "react";
import github from "./../../assets/github.svg";
import map from "./../../assets/map.png";
import linkedin from "./../../assets/linkedin.svg";
const Team = () => {
  return (
    <div className="relative w-full h-[56rem] flex flex-col justify-center items-center mb-[20vh]">
      <img
        src={map}
        className="absolute w-[1170px] mt-[230px] h-[526px] opacity-90 object-contain"
        alt=""
      />
      {/* background background */}
      <div className="absolute left-[5rem] top-[15rem] opacity-70">
        <svg width="1440" height="1185" viewBox="0 0 1440 1185" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_31)">
            <ellipse cx="751.359" cy="592.359" rx="252" ry="618.404" transform="rotate(-114.201 751.359 592.359)" fill="#4298E8" fill-opacity="0.23" />
          </g>
          <defs>
            <filter id="filter0_f_1_31" x="-72.1781" y="0.160828" width="1647.07" height="1184.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_31" />
            </filter>
          </defs>
        </svg>

      </div>
      <div className="z-5 absolute w-[63rem] h-[38rem] flex flex-col justify-center items-center">
        <h1 className="text-primary-white font-plusjakarta font-bold w-[60rem] text-[4rem] text-center titletextbackground mt-1">
          Meet the team
        </h1>
        <div className="flex justify-center flex-wrap items-center w-full h-fit mt-12 gap-x-[15rem] gap-y-[5.5rem]">
          <div className="flex justify-center gap-[1rem] contextboxbackground rounded-[1.5rem] w-[326px] h-[254px] border-[0.06px] border-gray-100 py-[0.8rem] bg-opacity-10 border-opacity-30">
            <div className="flex flex-col justify-center items-start w-fit h-fit rounded-[1.5rem]">
              <div className="overflow-hidden bg-no-repeat bg-cover  bg-white rounded-[1.5rem]">
                <img
                  src="https://avatars.githubusercontent.com/u/92656939?v=4"
                  className=" h-[158px] w-[290px] rounded-[1.5rem]  transition duration-300 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
              <div className="ps-2 pt-1 font-plusjakarta font-bold text-primary-white text-[24px] ">
                Sidhant Tomar
              </div>
              <div className="flex flex-row justify-between gap-x-4 items-center">
                <div className="w-[13rem] ps-4 text-[13px] text-tertiary-white text-left">
                  Cryptographer
                </div>
                <a className="w-[20px] h-[20px] relative" href="https://github.com/Sid-the-Slothh">
                  <img src={github} className="relative" alt="" />
                </a>
                <a className="w-[20px] h-[20px] relative" href="github_url">
                  <img src={linkedin} className="relative" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-[1rem] contextboxbackground rounded-[1.5rem] w-[326px] h-[254px] border-[0.06px] border-gray-100 py-[0.8rem] bg-opacity-10 border-opacity-30">
            <div className="flex flex-col justify-center items-start w-fit h-fit rounded-[1.5rem]">
              <div className="overflow-hidden bg-no-repeat bg-cover bg-gray-900/40 rounded-[1.5rem]">
                <img
                  src="https://avatars.githubusercontent.com/u/98532264?v=4"
                  className="h-[158px] w-[290px] rounded-[1.5rem]  transition duration-300 ease-in-out hover:scale-105 object-cover"
                  alt=""
                />
              </div>
              <div className="ps-2 pt-1 font-plusjakarta font-bold text-primary-white text-[24px] ">
                Harman Singh Malhotra
              </div>
              <div className="flex flex-row justify-between gap-x-4 items-center">
                <div className="w-[13rem] ps-4 text-[13px] text-tertiary-white text-left">
                  Front End Developer
                </div>
                <a className="w-[20px] h-[20px] relative" href="https://github.com/H-SM">
                  <img src={github} className="relative" alt="" />
                </a>
                <a className="w-[20px] h-[20px] relative" href="github_url">
                  <img src={linkedin} className="relative" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-[1rem] contextboxbackground rounded-[1.5rem] w-[326px] h-[254px] border-[0.06px] border-gray-100 py-[0.8rem] bg-opacity-10 border-opacity-30">
            <div className="flex flex-col justify-center items-start w-fit h-fit rounded-[1.5rem]">
              <div className="overflow-hidden bg-no-repeat bg-cover bg-gray-900/40 rounded-[1.5rem]">
                <img
                  src="https://avatars.githubusercontent.com/u/101853380?v=4"
                  className="h-[158px] w-[290px] rounded-[1.5rem]  transition duration-300 ease-in-out hover:scale-105 object-cover"
                  alt=""
                />
              </div>
              <div className="ps-2 pt-1 font-plusjakarta font-bold text-primary-white text-[24px] ">
                Saksham Shahu
              </div>
              <div className="flex flex-row justify-between gap-x-4 items-center">
                <div className="w-[13rem] ps-4 text-[13px] text-tertiary-white text-left ">
                  ML Engineer
                </div>
                <a className="w-[20px] h-[20px] relative" href="https://github.com/sakshamshahu">
                  <img src={github} className="relative" alt="" />
                </a>
                <a className="w-[20px] h-[20px] relative" href="github_url">
                  <img src={linkedin} className="relative" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-[1rem] contextboxbackground rounded-[1.5rem] w-[326px] h-[254px] border-[0.06px] border-gray-100 py-[0.8rem] bg-opacity-10 border-opacity-30">
          <div className="flex flex-col justify-center items-start w-fit h-fit rounded-[1.5rem]">
              <div className="overflow-hidden bg-no-repeat bg-cover bg-gray-900/40 rounded-[1.5rem]">
                <img
                  src="https://avatars.githubusercontent.com/u/97795121?v=4"
                  className="h-[158px] w-[290px] rounded-[1.5rem]  transition duration-300 ease-in-out hover:scale-105 object-cover"
                  alt=""
                />
              </div>
              <div className="ps-2 pt-1 font-plusjakarta font-bold text-primary-white text-[24px] ">
                Vinay Singh Thapa
              </div>
              <div className="flex flex-row justify-between gap-x-4 items-center">
                <div className="w-[13rem] ps-4 text-[13px] text-tertiary-white text-left">
                  Manager
                </div>
                <a className="w-[20px] h-[20px] relative" href="https://github.com/ThapaVinay">
                  <img src={github} className="relative" alt="" />
                </a>
                <a className="w-[20px] h-[20px] relative" href="github_url">
                  <img src={linkedin} className="relative" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
