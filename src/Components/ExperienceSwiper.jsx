import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import '../ExtraStyle/ExperienceSwiper.css'

// Experience data array
const experiences = [
  {
    organization: 'Dreamers Academy',
    title: 'AI & Web Design Coding Instructor',
    duration: 'March 2025 – Present',
    responsibilities: [
      'Teaching AI concepts and web design fundamentals to students aged 11–14.',
      'Guiding learners through JavaScript, API integration, and responsive web design.',
      'Assisting students in creating mini-projects and interactive web pages.',
      'Creating interesting coding knowledge that are targeted to the needs of young learners.',
      'Tracking student progress and providing constructive feedback for improvement.',
    ],
  },
  {
    organization: 'Programming Hero – Complete Web Development Course (Batch 11)',
    title: 'Professional Project-Based Learner',
    duration: 'January 2025 – Present',
    responsibilities: [
      'Developing multiple front-end and full-stack projects using React, Node.js, Express, and MongoDB.',
      'Practicing real-world problem solving through hands-on assignments and collaborative challenges.',
      'Learning best practices in component architecture, clean code, and state management.',
      'Building production-ready UIs and improving debugging and optimization skills.',
    ],
  },
];

const ExperienceSwiper = () => {
  return (
    <section id="experience" className="py-16 text-white">
      <div className="w-11/12 mx-auto text-center mb-12">
        <h2 className="text-[#9F9F9F] text-lg font-rajdhani font-bold">|| Experience</h2>
        <p className="text-4xl font-bold font-rubik">Where I've Worked</p>
      </div>

      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="mySwiper max-w-3xl"
      >
        {experiences.map((exp, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1e2125] w-11/12 mx-auto p-6 rounded-3xl shadow-lg text-left h-full flex flex-col justify-between hover:shadow-[0_0_20px_#f9004d] transition duration-300">
              <div>
                <h3 className="text-xl font-bold font-rajdhani text-[#f9004d]">{exp.organization}</h3>
                <h4 className="text-lg font-semibold font-rubik mt-1">{exp.title}</h4>
                <p className="text-sm text-[#9F9F9F] mb-4 font-rubik">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-[#D1D1D1] font-rubik">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExperienceSwiper;
