import React from "react";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-[600px] mt-16" style={{ whiteSpace: "normal" }}>
        <div className="text-center">
          <h1 className="font-semibold text-[42px] text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-500 animate-pulse">
            About Me
          </h1>
          <div className="bg-[#191919] p-4 rounded-lg">
            <p className="text-[#A7A7A7]">
              Hello! I'm Jairo, a software developer with a strong dedication to creating innovative
              technological solutions. I specialize in designing, developing, and maintaining high-quality applications and computer systems.
            </p>
            <p className="mt-4 text-[#A7A7A7]">
              My approach goes beyond just writing code. I strive to understand
              the needs of the end user and translate them into intuitive and
              functional products that enhance their experience. My experience
              spans various technologies and methodologies, allowing me to adapt
              quickly to the challenges presented in the world of development.
            </p>
            <p className="mt-4 text-[#A7A7A7]">
              I value collaboration and teamwork. I enjoy working in
              multidisciplinary environments where I can learn and contribute
              different perspectives. My goal is to continue growing
              professionally and contribute to the success of exciting and
              meaningful projects. I'm always open to new opportunities and
              challenges that allow me to expand my skills and make a difference
              in the world of technology.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="font-semibold text-[42px] text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-blue-500 animate-pulse">
            Education
          </h1>
          <div className="bg-[#191919] p-4 rounded-lg mt-4">
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
              <p className="text-[25px] text-[#666666]">Fullstack Certification</p>
              <span className="flex w-[84px] h-[24px] text-[10px] font-bold rounded-xl bg-green-100 text-green-600 px-2 items-center justify-center mt-2 sm:mt-0">
                Full Time
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
              <div className="flex items-center">
                <span>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.333313 0.5V9.5H4.33331V7.75H5.66665V9.5H9.66665V0.5H0.333313ZM1.66665 1.5H2.99998V2.5H1.66665V1.5ZM4.33331 1.5H5.66665V2.5H4.33331V1.5ZM6.99998 1.5H8.33331V2.5H6.99998V1.5ZM1.66665 3.5H2.99998V4.5H1.66665V3.5ZM4.33331 3.5H5.66665V4.5H4.33331V3.5ZM6.99998 3.5H8.33331V4.5H6.99998V3.5ZM1.66665 5.5H2.99998V6.5H1.66665V5.5ZM4.33331 5.5H5.66665V6.5H4.33331V5.5ZM6.99998 5.5H8.33331V6.5H6.99998V5.5ZM1.66665 7.5H2.99998V8.5H1.66665V7.5ZM6.99998 7.5H8.33331V8.5H6.99998V7.5Z"
                      fill="#A7A7A7"
                    />
                  </svg>
                </span>
                <p className="text-[12px] text-[#A7A7A7] ml-2">Funval Internacional</p>
              </div>
              <span className="text-[12px] text-[#A7A7A7] mt-2 sm:mt-0">Nov 2023 - Mar 2024</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
              <p className="text-[25px] text-[#666666]">English B2-C1</p>
              <span className="flex w-[84px] h-[24px] text-[10px] font-bold rounded-xl bg-green-100 text-green-600 px-2 items-center justify-center mt-2 sm:mt-0">
                Full Time
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-2">
              <div className="flex items-center">
                <span>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.333313 0.5V9.5H4.33331V7.75H5.66665V9.5H9.66665V0.5H0.333313ZM1.66665 1.5H2.99998V2.5H1.66665V1.5ZM4.33331 1.5H5.66665V2.5H4.33331V1.5ZM6.99998 1.5H8.33331V2.5H6.99998V1.5ZM1.66665 3.5H2.99998V4.5H1.66665V3.5ZM4.33331 3.5H5.66665V4.5H4.33331V3.5ZM6.99998 3.5H8.33331V4.5H6.99998V3.5ZM1.66665 5.5H2.99998V6.5H1.66665V5.5ZM4.33331 5.5H5.66665V6.5H4.33331V5.5ZM6.99998 5.5H8.33331V6.5H6.99998V5.5ZM1.66665 7.5H2.99998V8.5H1.66665V7.5ZM6.99998 7.5H8.33331V8.5H6.99998V7.5Z"
                      fill="#A7A7A7"
                    />
                  </svg>
                </span>
                <p className="text-[12px] text-[#A7A7A7] ml-2">E4CC</p>
              </div>
              <span className="text-[12px] text-[#A7A7A7] mt-2 sm:mt-0">Mar 2023 - Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
