import React from "react";

import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import MyLogo from "./MyLogo";
import { Link } from "react-scroll";
import "../ExtraStyle/Navlink.css";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-110}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth
          duration={500}
          spy
          exact="true"
          offset={-100}
          activeClass="active-link"
          className="cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#212529] shadow-sm sticky top-0 z-50">
      <div className="w-11/12 mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Brand */}
          <MyLogo></MyLogo>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6 text-white text-md font-rajdhani">
              {links}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-5">
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

          {/* Mobile Menu */}
          <div className="lg:hidden dropdown dropdown-end sticky top-0 z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h12m-12 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 text-gray-700 z-50"
            >
              {links}
              <div className="flex justify-start gap-4 mt-4 pl-2">
                <RiFacebookCircleLine size={20} />
                <FaLinkedinIn size={20} />
                <FaGithub size={20} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
