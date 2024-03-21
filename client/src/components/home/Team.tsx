import React from "react";
import github from "./../../assets/github.svg";
import map from "./../../assets/map.png";
import linkedin from "./../../assets/linkedin.svg";

const Team = () => {
  return (
    <div className="relative w-[83rem] h-[56rem] flex flex-col justify-center items-center">
      <img
        src={map}
        className="absolute w-[1170px] mt-[230px] h-[526px] opacity-90 object-contain"
        alt=""
      />
      <div className="z-5 absolute w-[63rem] h-[38rem] flex flex-col justify-center items-center">
        <h1 className="text-primary-white font-plusjakarta font-bold w-[60rem] text-[4rem] text-center titletextbackground mt-1">
          Meet the team
        </h1>
        <div className="flex justify-center flex-wrap items-center w-full h-fit mt-12 gap-x-[15rem] gap-y-[5.5rem]">
          <div className="flex justify-center gap-[1rem] contextboxbackground rounded-[1.5rem] w-[326px] h-[254px] border-[0.06px] border-gray-100 py-[0.8rem] bg-opacity-10 border-opacity-30">
            <div className="flex flex-col justify-center items-start">
              <img
                src={"https://avatars.githubusercontent.com/u/92656939?v=4"}
                className=" h-[158px] w-[290px] rounded-[1.5rem] object-cover"
                alt=""
              />
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
            <div className="flex flex-col justify-center items-start">
              <img
                src={"https://avatars.githubusercontent.com/u/98532264?v=4"}
                className=" h-[158px] w-[290px] rounded-[1.5rem] object-cover"
                alt=""
              />
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
            <div className="flex flex-col justify-center items-start">
              <img
                src={"https://avatars.githubusercontent.com/u/101853380?v=4"}
                className=" h-[158px] w-[290px] rounded-[1.5rem] object-cover"
                alt=""
              />
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
            <div className="flex flex-col justify-center items-start">
              <img
                src={"https://avatars.githubusercontent.com/u/97795121?v=4"}
                className=" h-[158px] w-[290px] rounded-[1.5rem] object-cover"
                alt=""
              />
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
