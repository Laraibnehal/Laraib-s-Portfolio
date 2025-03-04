import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="md:flex-row flex flex-col justify-around bg-[#badbf7] text-black p-10 md:p-12 items-center"
      
    >
      <div className="p-3 mb-10 md:mb-0">
        <h1 className="text-2xl md:text-6xl  font-bold ">Contact Me</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          laraibmallick7@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          
          <a href="https://www.linkedin.com/in/laraib-nehal/
"  target="_blank"> Linkedln</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Laraibnehal" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
