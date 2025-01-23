import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="w-12 h-12 text-yellow-500" />,
  },
  { name: "React", icon: <FaReact className="w-12 h-12 text-blue-400" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="w-12 h-12 text-teal-400" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-white" /> },
];

const Skills = () => {
  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1
          className="text-3xl font-semibold text-white mb-12 w-full text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Skills
        </h1>
        <div className="flex flex-wrap -m-4 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="flex items-center justify-center flex-col  rounded-lg p-6 h-full">
                <div className="mb-4">{skill.icon}</div>
                <h2
                  className="text-xl font-medium text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {skill.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
