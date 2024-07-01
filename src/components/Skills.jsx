import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-24 mx-auto ">
        <h1
          className="text-3xl font-semibold text-white mb-12 w-full text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Skills
        </h1>

        <div className="hidden md:block">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-zinc-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-zinc-800 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-orange-400 rounded-full inline-flex items-center justify-center">
                <FaHtml5 className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2
                  className="font-medium title-font text-white mb-1 text-xl"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  HTML
                </h2>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-zinc-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-zinc-800 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-indigo-600 rounded-full inline-flex items-center justify-center">
                <FaCss3Alt className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2
                  className="font-medium title-font text-white mb-1 text-xl"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  CSS
                </h2>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-zinc-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-zinc-800 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-cyan-400 rounded-full inline-flex items-center justify-center">
                <FaReact className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2
                  className="font-medium title-font text-white mb-1 text-xl"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  REACT
                </h2>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-zinc-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-zinc-800 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-amber-300 rounded-full inline-flex items-center justify-center">
                <IoLogoJavascript className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2
                  className="font-medium title-font text-white mb-1 text-xl"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  JAVASCRIPT
                </h2>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-zinc-800  pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-zinc-800  text-white relative z-10 title-font font-medium text-sm">
              5
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-800  text-cyan-400 rounded-full inline-flex items-center justify-center">
                <RiTailwindCssFill className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2
                  className="font-medium title-font text-white mb-1 text-xl"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  TAILWINDCSS
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* //mobil için*/}
        <div className="block md:hidden">
          <div className="flex flex-col items-center mb-10">
            <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-orange-400 rounded-full inline-flex items-center justify-center">
              <FaHtml5 className="w-12 h-12" />
            </div>
            <div className="mt-6">
              <h2
                className="font-medium title-font text-white mb-1 text-xl text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                HTML
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-indigo-600 rounded-full inline-flex items-center justify-center">
              <FaCss3Alt className="w-12 h-12" />
            </div>
            <div className="mt-6">
              <h2
                className="font-medium title-font text-white mb-1 text-xl text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                CSS
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-cyan-400 rounded-full inline-flex items-center justify-center">
              <FaReact className="w-12 h-12" />
            </div>
            <div className="mt-6">
              <h2
                className="font-medium title-font text-white mb-1 text-xl text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                REACT
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-amber-300 rounded-full inline-flex items-center justify-center">
              <IoLogoJavascript className="w-12 h-12" />
            </div>
            <div className="mt-6">
              <h2
                className="font-medium title-font text-white mb-1 text-xl text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                JAVASCRIPT
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="flex-shrink-0 w-24 h-24 bg-zinc-800 text-cyan-400 rounded-full inline-flex items-center justify-center">
              <RiTailwindCssFill className="w-12 h-12" />
            </div>
            <div className="mt-6">
              <h2
                className="font-medium title-font text-white mb-1 text-xl text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                TAILWINDCSS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
