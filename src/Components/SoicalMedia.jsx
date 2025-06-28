import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const SoicalMedia = () => {
  return (
    <div className="mx-auto mt-6">
      <h2 className="text-xl text-center text-[#f9004d] font-semibold font-rajdhani">
        Find Me Online:
      </h2>
      <div className="flex justify-center md:justify-start gap-4 my-4 md:my-0">
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
    </div>
  );
};

export default SoicalMedia;
