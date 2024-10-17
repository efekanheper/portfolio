import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="fixed top-0 left-0 right-0 mt-5 z-50 mx-auto flex w-fit  rounded-3xl border border-neutral-800 bg-black/20 backdrop-blur-md p-1"
      style={{ transition: "background-color 0.3s ease" }}
    >
      <Tab setPosition={setPosition} onClick={() => handleClick("home")}>
        About
      </Tab>
      <Tab setPosition={setPosition} onClick={() => handleClick("projects")}>
        Projects
      </Tab>
      <Tab setPosition={setPosition} onClick={() => handleClick("skills")}>
        Skills
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="uppercase relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white hover:text-black  md:px-3 md:py-2 md:text-sm"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-zinc-200 md:h-9"
    />
  );
};

export default SlideTabs;
