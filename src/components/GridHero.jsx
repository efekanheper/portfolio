import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

import { SlSocialLinkedin } from "react-icons/sl";
import { TbFileCv } from "react-icons/tb";

export const GridHero = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-24 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
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
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://res.cloudinary.com/doh2ghgs5/image/upload/v1719621489/y24odjjokwouu9slkvjh.jpg"
      alt="avatar"
      className="mb-4 size-24 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Efekan.{" "}
      <span className="text-zinc-400">I'm Jr.Frontend Developer.</span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-neutral-900 md:col-span-3"
    >
      <a
        href="https://github.com/efekanheper"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/efekanheper/"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SlSocialLinkedin />
      </a>
    </Block>

    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="https://drive.google.com/file/d/1LqHw3WK3bytwYgci15uJTcoJxS1sEyMT/view"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <TbFileCv />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-neutral-900 md:col-span-3"
    >
      <a
        href="https://x.com/efekannh"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaSquareXTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      I'm continuously improving myself in frontend development,{" "}
      <span className="text-zinc-400">
        enjoying keeping up with new trends and integrating them into my
        projects. My goal is to contribute to both my skills and the development
        of the teams I work with by providing innovative solutions in each
        project.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">İzmir</p>
  </Block>
);

const EmailListBlock = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = document.getElementById("email").textContent;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <Block className="col-span-12 flex items-center gap-2 md:col-span-9">
      <p className=" text-xl" id="email">
        efekanheper@icloud.com
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
        <button
          type="button"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-900 px-3 py-2  text-sm font-medium text-white transition-colors hover:bg-zinc-300 hover:text-black"
          onClick={handleCopy}
        >
          <FiMail />
          Copy
        </button>
      </form>
      {copied && (
        <div className="fixed font-medium bottom-4 left-1/2 transform -translate-x-1/2 bg-stone-100 neutral-200 text-black px-4 py-2 rounded-lg shadow-lg">
          Copied to clipboard!
        </div>
      )}
    </Block>
  );
};
