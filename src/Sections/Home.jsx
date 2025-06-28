import React from "react";
import myImage from "../assets/profile_image.png";
import bannerImage from "../assets/bg.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react"

const Home = () => {
  return (
    <section id="home" className="py-16 min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center font-medium">
        <h1 className="text-white text-3xl md:text-5xl font-rubik text-center mb-4">
          Hi, I am Saide Bin Sabid
        </h1>

        <TypeAnimation
          sequence={[
            "a Web Developer",
            3000,
            "a Problem Solver",
            3000,
            "a Frontend Developer",
            3000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-[#f9004d] text-2xl md:text-4xl font-rubik text-center"
        />
      </div>

      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-2 justify-center items-center">
        {/* Center Image */}
        <div
          className="w-full md:w-1/3 bg-no-repeat bg-contain bg-center flex justify-center md:order-2 order-1"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <img
            src={myImage}
            alt="Saide_Image"
            className="max-w-[90%] h-auto mx-auto my-auto"
          />
        </div>

        {/* Right Content (Bio & Contact) */}
        <div className="w-full md:w-1/3 text-white space-y-4 text-center md:text-right md:order-3 order-2">
          <h2 className="text-2xl font-semibold font-rajdhani">Biography :</h2>
          <p className="text-base text-[#9F9F9F] font-rubik">
            As a professional in the MERN stack and a web developer, I prioritize creating
            user-friendly interfaces and scalable full-stack web applications.
            Focused on frontend excellence, translating concepts into clean,
            functional, and user-centric digital experiences.
          </p>
          <h2 className="text-2xl font-semibold font-rajdhani">Contact :</h2>
          <p className="text-base text-[#9F9F9F] font-rubik">
            Dhaka, Bangladesh — Available for remote & onsite opportunities
          </p>
          <p className="text-base text-[#9F9F9F] font-rubik">
            ssaidebin1@gmail.com
          </p>
          <p className="text-base text-[#9F9F9F] font-rubik">+8801876834853</p>
        </div>

        {/* Left Content (Social Media) */}
        <div className="w-full md:w-1/3 text-white mx-auto space-y-4 text-center md:text-left md:order-1 order-3">
          <h2 className="text-xl font-semibold font-rajdhani">
            Find Me Online :
          </h2>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {/* Social Icons */}
            <div className="bg-gray-900 hover:bg-[#f9004d] p-2 rounded-full transition-colors duration-300">
              <a
                href="https://www.facebook.com/saidebinsabid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookCircleLine size={22} color="white" />
              </a>
            </div>
            <div className="bg-gray-900 hover:bg-[#f9004d] p-2 rounded-full transition-colors duration-300">
              <a
                href="https://www.linkedin.com/in/saide-bin-sabid-85238828b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} color="white" />
              </a>
            </div>
            <div className="bg-gray-900 hover:bg-[#f9004d] p-2 rounded-full transition-colors duration-300">
              <a
                href="https://github.com/saidebinsabid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} color="white" />
              </a>
            </div>
          </div>
          <div className="pt-4">
            <motion.a
            whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
              href="/Saide_Bin_Sabid.pdf"
              download
              className="inline-block mb-4 border-2 border-[#f9004d] hover:bg-[#d80043] hover:text-white text-[#9F9F9F] font-semibold font-rajdhani px-4 py-2 rounded-4xl transition duration-300"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
