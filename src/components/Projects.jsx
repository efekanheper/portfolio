import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, imgSrc, technologies, demoLink, githubLink }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const motionVariants = {
    initial: { scale: 0.5, y: 50, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
  };

  const motionTransition = {
    type: "spring",
    mass: 3,
    stiffness: 200,
    damping: 50,
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={motionVariants}
      transition={motionTransition}
      className="sm:w-1/2 mb-10 px-4"
    >
      <div className="rounded-lg overflow-hidden h-auto w-full aspect-[16/9]">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={imgSrc}
        />
      </div>
      <h2 className="title-font font-bold text-2xl text-white mt-6 mb-3">
        {title}
      </h2>
      <p className="leading-relaxed font-bold text-base text-zinc-400">
        {technologies}
      </p>
      <div className="flex justify-center mt-6 space-x-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-900 px-3 py-2 mt-4 text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
        >
          <FaExternalLinkAlt /> Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap rounded-full  bg-zinc-900 px-3 py-2 mt-4  text-sm font-medium  text-white transition-colors hover:bg-zinc-300 hover:text-black"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Rent A Car template",
      imgSrc:
        "https://res.cloudinary.com/dzldxw3q6/image/upload/v1737592650/carrent-gilt.vercel.app__jsen9q.png",
      technologies: "NextJs TypeScript TailwindCss CursorAi Gsap Framer",
      demoLink: "https://carrent-gilt.vercel.app",
      githubLink:
        "https://github.com/efekanheper/rent-a-car-template---lalacars",
    },
    {
      title: "GBlack",
      imgSrc:
        "https://res.cloudinary.com/dzldxw3q6/image/upload/v1724549250/h4fdzleckavscmoevp9l.png",
      technologies: "React TailwindCss Framer",
      demoLink: "https://goldblack.vercel.app",
      githubLink: "https://github.com/efekanheper/GB-website",
    },
    {
      title: "HChat",
      imgSrc:
        "https://res.cloudinary.com/doh2ghgs5/image/upload/v1719782944/Ekran_görüntüsü_2024-05-23_021837_pdgj6s.png",
      technologies: "React TailwindCss Ts",
      demoLink: "https://hchatt.netlify.app",
      githubLink: "https://github.com/efekanheper/Hchat-react",
    },
    {
      title: "Saas Website",
      imgSrc:
        "https://res.cloudinary.com/dzldxw3q6/image/upload/v1729175555/gmvqqpotic9hyufcaqdw.png",
      technologies: "React TailwindCss Framer",
      demoLink: "https://finance-saasweb.vercel.app",
      githubLink: "https://github.com/efekanheper/saas-websites",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h1>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/efekanheper?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-900 font-semibold text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition"
          >
            <FaGithub /> More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
