import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: project1Ref, inView: project1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: project2Ref, inView: project2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: project3Ref, inView: project3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: project4Ref, inView: project4InView } = useInView({
    triggerOnce: true,
  });

  const motionVariants = {
    initial: {
      scale: 0.5,
      y: 50,
      opacity: 0,
    },
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
    },
  };

  const motionTransition = {
    type: "spring",
    mass: 3,
    stiffness: 200,
    damping: 50,
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <h1
          className="text-4xl font-bold text-white mb-12 text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Projects
        </h1>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <motion.div
            ref={project1Ref}
            initial="initial"
            animate={project1InView ? "animate" : "initial"}
            variants={motionVariants}
            transition={motionTransition}
            className="sm:w-1/2 mb-10 px-4"
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-1201 w-502"
                src="https://res.cloudinary.com/dzldxw3q6/image/upload/v1728943834/obes0c3aswh1l0bbi3ab.png"
              />
            </div>
            <h2
              className="title-font font-bold text-2xl  text-white mt-6 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SAAS WEBSITE
            </h2>
            <p
              className="leading-relaxed font-bold text-base text-zinc-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              React TailwindCss Framer
            </p>
            <div className="flex justify-center mt-6">
              <a
                className="whitespace-nowrap rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://finance-saasweb.vercel.app"
                target="_blank"
              >
                Demo
              </a>
              <a
                className="whitespace-nowrap ml-4 rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://github.com/efekanheper/saas-websites"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.div
            ref={project1Ref}
            initial="initial"
            animate={project1InView ? "animate" : "initial"}
            variants={motionVariants}
            transition={motionTransition}
            className="sm:w-1/2 mb-10 px-4"
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-1201 w-502"
                src="https://res.cloudinary.com/dzldxw3q6/image/upload/v1724549250/h4fdzleckavscmoevp9l.png"
              />
            </div>
            <h2
              className="title-font font-bold text-2xl  text-white mt-6 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              GBLACK
            </h2>
            <p
              className="leading-relaxed font-bold text-base text-zinc-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              React TailwindCss Framer
            </p>
            <div className="flex justify-center mt-6">
              <a
                className="whitespace-nowrap rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://goldblack.vercel.app"
                target="_blank"
              >
                Demo
              </a>
              <a
                className="whitespace-nowrap ml-4 rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://github.com/efekanheper/GB-website"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-2 mt-8 text-center">
        <motion.div
            ref={project2Ref}
            initial="initial"
            animate={project2InView ? "animate" : "initial"}
            variants={motionVariants}
            transition={motionTransition}
            className="sm:w-1/2 mb-10 px-4"
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://res.cloudinary.com/doh2ghgs5/image/upload/v1719782944/Ekran_görüntüsü_2024-05-23_021837_pdgj6s.png"
              />
            </div>
            <h2
              className="title-font font-bold text-2xl  text-white mt-6 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              HChat
            </h2>
            <p
              className="leading-relaxed font-bold text-base text-zinc-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              React TailwindCss Ts
            </p>
            <div className="flex justify-center mt-6">
              <a
                className="whitespace-nowrap rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://hchatt.netlify.app"
                target="_blank"
              >
                Demo
              </a>
              <a
                className="whitespace-nowrap ml-4 rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://github.com/efekanheper/Hchat-react"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.div
            ref={project4Ref}
            initial="initial"
            animate={project4InView ? "animate" : "initial"}
            variants={motionVariants}
            transition={motionTransition}
            className="sm:w-1/2 mb-10 px-4"
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-1000 w-200"
                src="https://res.cloudinary.com/doh2ghgs5/image/upload/v1719783263/htattoo.vercel.app__1_p8exl8.png"
              />
            </div>
            <h2
              className="title-font font-bold text-2xl text-white mt-6 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Htattoo
            </h2>
            <p
              className="leading-relaxed font-bold text-base text-zinc-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Html TailwindCss Js
            </p>
            <div className="flex justify-center mt-6">
              <a
                className="whitespace-nowrap rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://htattoo.vercel.app/"
                target="_blank"
              >
                Demo
              </a>
              <a
                className="whitespace-nowrap ml-4 rounded bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
                href="https://github.com/efekanheper/htattoo"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            className="whitespace-nowrap rounded bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
            href="https://github.com/efekanheper?tab=repositories"
            target="_blank"
          >
            For More{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
