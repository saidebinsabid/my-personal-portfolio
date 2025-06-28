// ProjectSection.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaTimes,
  FaListUl,
  FaCheckSquare,
  FaBug,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiJsonwebtokens,
  SiFirebase,
} from "react-icons/si";
import "../ExtraStyle/ProjectSection.css";
import projects from "../ProjectData/projects.json";
import ProjectDetailModal from "./ProjectDetailModal";

const techIcons = {
  React: <FaReact className="text-[#61DBFB]" />,
  NodeJs: <FaNodeJs className="text-green-600" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJsSquare className="text-yellow-400" />,
  Python: <FaPython className="text-blue-400" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  MySQL: <FaDatabase className="text-gray-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  NextJs: <SiNextdotjs className="text-white" />,
  ExpressJs: <SiExpress className="text-gray-200" />,
  JWT: <SiJsonwebtokens className="text-orange-300" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
};

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-[#9F9F9F] text-lg font-rajdhani font-bold">
          || Projects
        </h2>
        <p className="text-4xl font-bold font-rubik">My Project Showcase</p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((proj) => (
          <SwiperSlide
            key={proj.id}
            className="max-w-xs sm:max-w-sm"
          >
            <div className="bg-[#1e2125] rounded overflow-hidden transition duration-300 hover:shadow-[15px_0_15px_-10px_#f9004d,_-15px_0_15px_-10px_#f9004d]">
              <div className="bg-gray-800">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-rajdhani text-[#f9004d]">
                    {proj.title}
                  </h3>
                  <span className="text-sm px-2 py-1 bg-[#2d2f36] text-white rounded-md font-rajdhani capitalize">
                    {proj.category}
                  </span>
                </div>
                <p className="text-sm text-[#d1d1d1] font-rubik">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 font-rubik">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-sm bg-[#2d2f36] px-2 py-1 rounded-md"
                    >
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center gap-3 py-4 font-rajdhani flex-wrap">
                  <a
                    href={proj.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-md font-semibold text-[#f9004d] hover:underline"
                  >
                    <FaExternalLinkAlt /> View Project
                  </a>

                  

                  
                    <a
                    href={proj.githubClientRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-md text-[#9f9f9f] hover:text-white hover:underline mx-auto"
                  >
                    <FaGithub /> Git Client
                  </a>

                  {proj.category === "full-stack" && proj.githubServerRepoLink && (
                    <a
                      href={proj.githubServerRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-md text-[#9f9f9f] hover:text-white hover:underline mx-auto"
                    >
                      <FaGithub /> Git Server
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="flex items-center gap-2 text-md font-semibold hover:text-[#f9004d] hover:underline mx-auto"
                  >
                    <FaListUl /> See Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectSection;
