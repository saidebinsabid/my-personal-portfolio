import React from "react";
import MyLogo from "./MyLogo";
import { link } from "motion/react-client";
import { Link } from "react-scroll";
import "../ExtraStyle/Navlink.css";
const Footer = () => {
  const links = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          exact="true"
          spy={true}
          offset={-20}
          activeClass="active-link"
          className="cursor-pointer"
        >
          Home
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
    </>
  );
  return (
    <section className="bg-[#212529] text-white pt-12  font-rajdhani">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-11/12 mx-auto">
        <div className="lg:col-span-4">
          <MyLogo></MyLogo>
          <p className="text-sm text-gray-300">
            Hello, I'm Saide, a web developer that focuses on creating elegant,{" "}
            <br /> responsive, and user-friendly websites. "Excited about
            executing <br /> your ideas!"
          </p>
        </div>
        <div className="lg:col-span-8 space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-1 text-gray-300">
              <h3 className="text-[#f9004d] font-medium">Say hello</h3>
              <p className="tracking-wider">ssaidebin1@gmail.com</p>

              <h3 className="pt-4 text-[#f9004d] font-medium">Call</h3>
              <p className="tracking-wider">+8801876834853</p>
            </div>
            <div className="flex-1 space-y-1 text-gray-300">
              <h3 className="text-[#f9004d] font-medium">Quick Links</h3>
              <ul className="space-y-2 font-rajdhani">{links}</ul>
            </div>
            <div className="flex-1 text-sm space-y-1 text-gray-300">
              <h3 className="text-[#f9004d] font-medium">Social</h3>
              <p className="tracking-wider">
                <a
                  href="https://www.facebook.com/saidebinsabid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
              <p className="tracking-wider">
                <a
                  href="https://www.linkedin.com/in/saide-bin-sabid-85238828b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </p>
              <p className="tracking-wider">
                <a
                  href="https://github.com/saidebinsabid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-sm text-gray-400 mt-8 py-3 bg-[#1e2125]">
        <p>© 2025 Saide. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
