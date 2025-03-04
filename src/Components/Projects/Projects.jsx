import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg from "../../assets/serene.png";
import bannerImg2 from "../../assets/Climato.png"
import bannerImg3 from "../../assets/nicco.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-1 md:p-[6rem] text-black ">
      <h1 className="text-2xl md:text-4xl text-black font-bold">Projects</h1>
      <div className=" justify-between py-12 px-8 flex flex-wrap gap-10">
        <ProjectCard
        img= {bannerImg2}
          title="Climato  Website"
          main="Website that tells you the location of the nearest e-waste collection and recycling facility.
         Offers educational resources on the importance of e-waste recycling, tips for reducing electronic waste, and updates on relevant environmental regulations and initiatives."
         demo={<a href="https://e-waste-blond.vercel.app/" target="_blank">Demo</a>}
         code={<a href="https://github.com/Laraibnehal/E-Waste" target="_blank">Source Code</a>}
        />
        <ProjectCard
        img={bannerImg3}
          title="Nicco Cable"
          main="I successfully enhanced an existing website using WordPress by implementing design updates, optimizing functionality, and improving user experience while ensuring consistency, responsiveness, and alignment with the website’s objectives. "
          demo={<a href=" https://niccocable.com/" target="_blank">Demo</a>}
          code={<a>Source Code</a>}
         
        />
        <ProjectCard
        img= {bannerImg}
          title="Serene Perfume"
          main="Developed an intuitive e-commerce website focused on the perfume industry, implementing user authentication features that secured
data for more than 500 registered customers while enhancing overall site security measures."
demo={ <a href="https://serene-website.vercel.app/" target="_blank">Demo</a>}
code={<a href="https://github.com/Laraibnehal/Serene-Website/" target="_blank">Source Code</a>}
        />
      </div>
    </div>
  );
};

export default Projects;
