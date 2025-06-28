import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const educationData = [
  {
    side: "left",
    title: "Bachelor of Computer Science & Engineering",
    institution: "United International University, Dhaka- 1212",
    year: "2020 - 2024",
  },
  {
    side: "right",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Sayed Hatem Ali College, Barisal",
    year: "2018 - 2019",
  },
  {
    side: "left",
    title: "Secondary School Certificate (SSC)",
    institution: "Barisal Zilla School, Barisal",
    year: "2016 - 2017",
  },
];



const Education = () => {
  return (
    <section id="education" className="py-16 text-white">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[#9F9F9F] text-lg font-rajdhani">
            || Education
          </h2>
          <p className="text-4xl font-bold font-rubik">My Academic Journey</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 bg-[#a4a7ad]" />

          <div className="flex flex-col gap-16">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-between w-full"
              >
                {/* Mobile View - All right side */}
                <div
                  className="lg:hidden w-full pl-6 text-left"
                  data-aos="zoom-in"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-xs mr-auto relative transition-shadow duration-300 hover:shadow-[0_0_20px_#f9004d]"
                  >
                    <div className="w-4 h-4 bg-[#f9004d] rounded-full border-4 border-white shadow-md absolute top-5 -left-7.5 lg:-top-2 lg:-left-10" />
                    <h4 className="text-xl font-bold font-rajdhani">
                      {edu.title}
                    </h4>
                    <p className="text-[#9F9F9F] font-rubik">
                      {edu.institution}
                    </p>
                    <span className="text-sm font-rubik">{edu.year}</span>
                  </motion.div>
                </div>

                {/* Large screens - Alternating layout */}
                {edu.side === "left" ? (
                  <div
                    className="hidden lg:flex w-full items-center justify-between"
                    data-aos="zoom-in"
                  >
                    <div className="w-1/2 pr-6 text-right">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1e2125] p-5 rounded-tl-3xl rounded-br-3xl shadow-md max-w-lg ml-auto space-y-4 transition-shadow duration-300 hover:shadow-[0_0_20px_#f9004d]"
                      >
                        <h4 className="text-xl font-bold font-rajdhani">
                          {edu.title}
                        </h4>
                        <p className="text-[#9F9F9F] font-rubik">
                          {edu.institution}
                        </p>
                        <span className="text-sm font-rubik">{edu.year}</span>
                      </motion.div>
                    </div>
                    <div className="w-1/2 relative flex justify-start items-start">
                      <div className="w-4 h-4 bg-[#f9004d] rounded-full border-4 border-white shadow-md absolute -top-10 -left-2" />
                    </div>
                  </div>
                ) : (
                  <div
                    className="hidden lg:flex w-full items-center justify-between"
                    data-aos="zoom-in"
                  >
                    <div className="w-1/2 relative flex justify-end items-start">
                      <div className="w-4 h-4 bg-[#f9004d] rounded-full border-4 border-white shadow-md absolute -top-10 -right-2" />
                    </div>
                    <div className="w-1/2 pl-6 text-left">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1e2125] p-5 rounded-tr-3xl rounded-bl-3xl shadow-md max-w-lg mr-auto space-y-4 transition-shadow duration-300 hover:shadow-[0_0_20px_#f9004d]"
                      >
                        <h4 className="text-xl font-bold font-rajdhani">
                          {edu.title}
                        </h4>
                        <p className="text-[#9F9F9F] font-rubik">
                          {edu.institution}
                        </p>
                        <span className="text-sm font-rubik">{edu.year}</span>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
