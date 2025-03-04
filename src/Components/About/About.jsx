import React from "react";
import devBackPic from "../../assets/devBackpic.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-black md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-white shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 "
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold ">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-70 md:w-80" src={devBackPic} alt="About img" />

          <ul>
            <div className="flex md:gap-3 gap-2 py-2 md:py-4 px-4 md:px-[9rem]">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Full Stack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I enjoy creating stunning, user-friendly websites that bring ideas to life. My technical skills and attention to detail ensure that every project I work on is not only visually appealing but also functionally robust. Whether it's designing a sleek portfolio site or building a complex e-commerce platform, I thrive on turning digital dreams into reality.
                </p>
              </span>
            </div>
            <div className="flex md:gap-3 gap-2 py-2 md:py-4 px-4 md:px-[9rem]">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Business Owner
                </h1>
                <p className="text-sm md:text-md leading-tight">
                My perfume business is a testament to my entrepreneurial spirit and passion for crafting unique, captivating scents. I take pride in curating a collection that resonates with diverse preferences, offering an olfactory journey like no other.
                </p>
              </span>
            </div>
            <div className="flex md:gap-3 gap-2 py-2 md:py-4 px-4 md:px-[9rem]">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                 Freelancer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a freelancer, I have the flexibility to work on diverse projects and collaborate with a variety of clients. This allows me to continually expand my skill set and adapt to different industry needs.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

