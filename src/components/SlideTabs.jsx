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
      className="relative top-4 mx-auto flex w-fit rounded-full border-2 border-black bg-neutral-700 p-1"
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
      className="uppercase  relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-3 md:py-2 md:text-sm"
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
