import React from "react";
import avatarImg from "../../assets/devpic.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-black flex w-full justify-between items-start p-4 md:p-20 ">
      <div className="md:w-2/4 w-40 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        a versatile website developer, freelancer, and perfume business owner based in Kolkata, India, passionate about blending technology and creativity.
        </p>
       
        <button className="mt-5 md:md-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#badbf7]">
         <a href="#Footer">Contact me</a>
        </button>
      </div>
      <div className="md:w-[50%]  md:h-[50%] w-[70%] h-[70%]">
        <img className=" m-5 md:m-12" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
