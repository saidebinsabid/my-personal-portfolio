import React, { useEffect } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiC,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiFigma,
  SiBootstrap,
  SiDocker,
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "motion/react";
import surgeIcon from "../assets/surgelogo.png";
import Aos from "aos";
const Skills = () => {
  
  const skills = [
    {
      title: "Languages",
      tech: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        { name: "C", icon: <SiC className="text-blue-400" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-300" /> },
      ],
    },
    {
      title: "Frontend",
      tech: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-600" />,
        },
        {
          name: "DaisyUI",
          icon: <span className="text-white text-xl font-bold">🌼</span>,
        },
        {
          name: "Material UI",
          icon: <span className="text-sky-400 text-lg font-bold">MUI</span>,
        },
      ],
    },
    {
      title: "Backend",
      tech: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-orange-300" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      tech: [
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Netlify", icon: <SiNetlify className="text-blue-300" /> },
        {
          name: "Surge",
          icon: (
            <img
              src={surgeIcon}
              alt="Surge"
              className="w-6 h-6 object-contain"
            />
          ),
        },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      ],
    },
  ];
  return (
    <section id="skills" className="text-white py-16 overflow-x-hidden">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold font-rajdhani mb-2 text-[#9F9F9F]">
            || Skill I have
          </h2>
          <p className="text-4xl font-rubik font-bold">My Tech Stack</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 lg:divide-y-0 lg:divide-x divide-[#a4a7ad]">
          {/* Left Column */}
          <div className="flex flex-col gap-4 lg:gap-12">
            {/* Languages */}
            <div
              className="p-6 flex flex-col items-center bg-[#1e2125] rounded-tl-3xl rounded-br-3xl"
            data-aos="flip-up" 
            >
              <h4 className="text-xl font-bold font-rajdhani text-white mb-4">
                Languages
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
                {skills[0].tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition"
                    whileHover={{ scale: 1.08, opacity: 1 }}
                    initial={{ opacity: 0.8 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  >
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div
              className="p-6 flex flex-col items-center bg-[#1e2125] rounded-tl-3xl rounded-br-3xl"
              data-aos="flip-up"
            >
              <h4 className="text-xl font-bold font-rajdhani text-white mb-4">
                Tools & Platforms
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
                {skills[3].tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition"
                    whileHover={{ scale: 1.08, opacity: 1 }}
                    initial={{ opacity: 0.8 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  >
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 lg:gap-12">
            {/* Frontend */}
            <div
              className="p-6 flex flex-col items-center bg-[#1e2125] rounded-tl-3xl rounded-br-3xl"
              data-aos="flip-up"
            >
              <h4 className="text-xl font-bold font-rajdhani text-white mb-4">
                Frontend
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
                {skills[1].tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition"
                    whileHover={{ scale: 1.08, opacity: 1 }}
                    initial={{ opacity: 0.8 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  >
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div
              className="p-6 flex flex-col items-center bg-[#1e2125] rounded-tl-3xl rounded-br-3xl"
              data-aos="flip-up"
            >
              <h4 className="text-xl font-bold font-rajdhani text-white mb-4">
                Backend
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
                {skills[2].tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-[#2c2f34] p-3 rounded-lg shadow text-center w-full hover:bg-[#3a3d42] transition"
                    whileHover={{ scale: 1.08, opacity: 1 }}
                    initial={{ opacity: 0.8 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  >
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <span className="text-sm text-[#9F9F9F] font-medium font-rubik">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
