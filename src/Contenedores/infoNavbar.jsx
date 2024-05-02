import { NavBar } from "./navBar";
import icono from "../assets/logo 1.svg";

import React, { useState } from "react";

export default function InfoNavbar({ toggleAbout, toggleRobot }) {
  const [robotExpanded, setRobotExpanded] = useState(false);

  const handleContactClick = (event) => {
    event.preventDefault();
    toggleRobot();
    setRobotExpanded(true);
  };

  return (
    <div className="flex justify-between items-center bg-[#191919] text-[#A7A7A7] w-full pt-[2%] max-sm:bg-[#191919] sm:bg-[#191919] md:bg-[#191919] lg:bg-[#191919] ">
      <img
        className="hover:scale-110 transition duration-200 ease-in-out pl-[10%] w-[228px] h-[58px] max-md:w-[150px] max-md:h-10"
        src={icono}
        alt=""
      />

      <div className="flex w-[98%] gap-[5%] text-[18px] items-center justify-center ">
        <a
          href="#home"
          className="duration-[200ms] ease-in-out bg-gradient-to-r hover:from-pink-600 hover:to-blue-500  hover:scale-110  hover:pb-1  px-3 py-[1px] rounded-md max-md:hidden"
        >
          <NavBar nom={"Home"} />
        </a>

        <a
          onClick={toggleAbout}
          href="#about"
          className="bg-gradient-to-r hover:from-pink-600 hover:to-blue-500  hover:scale-110 duration-[200ms] hover:pb-1 ease-in-out px-3 py-[1px] rounded-md"
        >
          <NavBar nom={"About"} />
        </a>
        <a
          href="#projects"
          className="bg-gradient-to-r hover:from-pink-600 hover:to-blue-500  hover:scale-110 duration-[200ms] hover:pb-1 ease-in-out px-3 py-[1px] rounded-md"
        >
          <NavBar nom={"Projects"} />
        </a>
        <a
          href="#"
          onClick={handleContactClick}
          className="bg-gradient-to-r hover:from-pink-600 hover:to-blue-500  hover:scale-110 duration-[200ms] hover:pb-1 ease-in-out px-3 py-[1px] rounded-md max-sm:hidden"
        >
          <NavBar nom={"Contact"} />
        </a>
      </div>

      <div className="flex gap-[12%] pr-[10%] max-sm:h-[28px] max-sm:pr-[13%] ">
        <a href="https://github.com/ChissgaN" target="_blank">
          <svg
            className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 30 30"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
              fill="#E8489A"
              className="hover:fill-blue-500"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/jairo-noodli-castro-castillo-a9840a2b0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="transform hover:scale-[1.2] transition duration-300 ease-in-out h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clipPath="url(#clip0_8_50)">
              <path
                d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z"
                fill="#2662EA"
                className="hover:fill-blue-500"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_50">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
}
