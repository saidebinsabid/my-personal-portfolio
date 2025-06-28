import React from "react";
import {
  FaTimes,
  FaCheckSquare,
  FaListUl,
  FaBug,
  FaTools,
  FaPuzzlePiece,
} from "react-icons/fa";

const sectionIcons = {
  "Project Layout": <FaListUl className="text-cyan-400" />,
  "Key Features": <FaCheckSquare className="text-green-400" />,
  "Challenges Faced": <FaBug className="text-yellow-500" />,
  "Additional Features": <FaPuzzlePiece className="text-purple-400" />,
  Improvements: <FaTools className="text-orange-300" />,
};

const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4">
      <div className="bg-[#171a1d] rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] relative">
        {/* Sticky Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-600 sticky top-0 z-10 bg-[#171a1d] rounded-t-lg">
          <h2 className="text-2xl text-[#f9004d] font-bold font-rajdhani">
            {project.title} Details
          </h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-500"
          >
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-6 text-white font-rubik">
          {project.projectDetails?.map((section, index) => (
            <div key={index}>
              <h3 className="flex items-center gap-2 text-xl mb-2 font-semibold">
                {sectionIcons[section.title] || null}
                {section.title}
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#ccc]">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckSquare className="mt-1 text-xs text-[#83e9c5]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
