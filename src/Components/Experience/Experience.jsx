import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress, FaWordpressSimple } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import bridge from "../../assets/Bridge.jpg"
import serene from "../../assets/serene.png"
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-black font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            {/* <SiRedis color="#FF4438" size={50} /> */}
            <FaWordpressSimple color="#47A248" size={50}/>
          </span>
          <span className="p-3 bg-[#f9f9f9] flex items-center rounded-2xl">
            {/* <SiRedis color="#FF4438" size={50} /> */}
            <FaNodeJs color="#47A248" size={50}/>
          </span>
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            {/* <SiRedis color="#FF4438" size={50} /> */}
            {/* <Fatail color="#47A248" size={50}/> */}
          {/* </span> */} 
        </div>
        <div>
          <div className="flex gap-10 bg-[#f9f9f9] bg-opacity-45 mt-4 rounded-lg p-2 md:p-4 items-center">
            {/* <FaGoogle color="#4285F4" size={50} /> */}
            
            {/* <img className=" w-20 md:w-20 h-10 md:h-20" src={bridge} alt="" /> */}
            <span className="text-black">
              <h2 className="leading-tight">FrontEnd Developer , Bridge HealthCare</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2023 - Feb 2023 
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as UI/UX designer</li>
                <li>- Intern FrontEnd Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-[#f9f9f9] bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            {/* <RiNetflixFill color="#E50914" size={50} /> */}
            <span className="text-black">
              <h2 className="leading-tight">Freelancer, Obleeq Studio</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work on inhancing the loading time and UI of website.</li>
                <li>- Making their client website from scratch using figma for UI </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-[#f9f9f9] bg-opacity-45 mt-4 rounded-lg  p-2 md:p-4 items-center">
            {/* <FaAmazon color="#FF9900" size={50} /> */}
            {/* <img className=" w-20 md:w-20 h-10 md:h-20" src={serene} alt="" /> */}
            <span className="text-black">
              <h2 className="leading-tight">Founder & CEO, Serene</h2>
              <p className="text-sm leading-tight font-thin">
               Jan 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- A Perfume brand</li>
                <li>-a unique fragrance designed to capture tranquility in a bottle </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
