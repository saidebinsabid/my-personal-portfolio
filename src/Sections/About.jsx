import React from "react";
import Lottie from "lottie-react";
import devAnimation from "../assets/Animation.json";

const About = () => {
  return (
    <section id="about" className="text-white py-16 min-h-screen">
      <div className="w-11/12 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-bold font-rajdhani mb-2 text-[#9F9F9F]">|| About Me</h2>
          <p className="text-4xl font-rubik font-bold">
            Passion • Objective • Progress
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-10"  data-aos="fade-down">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-[#9F9F9F] text-base font-rubik leading-relaxed">
              I'm Saide Bin Sabid, an enthusiastic and innovative web developer who is passionate about solving problems and creating a clean user interface. Developing technology to make life simpler, simpler to enjoy, or more meaningful is what defines me.
            </p>

            <p className="text-[#9F9F9F] text-base font-rubik leading-relaxed">
              I enjoy a challenge. I like the process of coming up with simple, elegant solutions, whether it's for a complex layout, difficult API integration, or performance optimization. That is the driving force behind me.
            </p>

            <p className="text-[#9F9F9F] text-base font-rubik leading-relaxed">
              Great software and web applications, in my view, are made up of empathy, acquiring the problems that users face, and providing solutions that are not only useful but also pleasant.
            </p>

            <div>
              <h3 className="text-xl font-semibold font-rajdhani text-[#f9004d] mb-2">
                Things That Encourage Me
              </h3>
              <ul className="list-disc list-inside text-[#9F9F9F] font-rubik">
                <li>Solving real-world problems with code</li>
                <li>Designing clean and simple interfaces.</li>
                <li>Learning new technologies and patterns</li>
                <li>Constructing impactful digital experiences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold font-rajdhani text-[#f9004d] mb-2">
                My Philosophy
              </h3>
              <p className="text-[#9F9F9F] font-rubik">
                “I create modern, human-centered solutions that are impactful and simple for solving real-world issues. These solutions are readable, reusable, and ultimately helpful.”
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-4">
  <div className="bg-[#1e2125] p-6 rounded-xl shadow-md border border-[#2c2f34] hover:border-[#f9004d] transition">
    <h4 className="text-lg font-bold font-rajdhani mb-2">Favorite Tech</h4>
    <p className="text-sm text-[#9F9F9F] font-rubik">React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT</p>
  </div>

  <div className="bg-[#1e2125] p-6 rounded-xl shadow-md border border-[#2c2f34] hover:border-[#f9004d] transition" >
    <h4 className="text-lg font-bold font-rajdhani mb-2">Currently Exploring</h4>
    <p className="text-sm text-[#9F9F9F] font-rubik">Next.js, TypeScript, Framer Motion, Docker, REST APIs</p>
  </div>

  <div className="bg-[#1e2125] p-6 rounded-xl shadow-md border border-[#2c2f34] hover:border-[#f9004d] transition col-span-2">
    <h4 className="text-lg font-bold font-rajdhani mb-2">More About Me</h4>
    <p className="text-sm text-[#9F9F9F] font-rubik">
      Whether it's through creating projects, exploring new frameworks, or involving myself in developer networks, I'm passionate about lifelong learning. I also love design and animation.
    </p>
  </div>

  <div className="w-full flex justify-center items-center col-span-2">
    <Lottie animationData={devAnimation} loop={true} className="w-96 h-80" />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
