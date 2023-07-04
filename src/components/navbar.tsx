import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const handleNavButtonClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{
        scale: 1,
        transition: {
          scale: { type: 'spring', mass: 0.5, damping: 8, stiffness: 200 },
          duration: 0.15,
          opacity: { duration: 0.4 },
        },
        opacity: 1,
      }}
      className="flex fixed justify-center flex gap-6 py-2 px-4 rounded-full top-6 
      backdrop-blur-[10px] z-[10] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#ffffff90] 
      items-center"
    >
      <button
        onClick={() => handleNavButtonClick('start')}
        className="bg-blue-600 text-white font-bold py-1 px-3 rounded-full text-[18px]
        hover:bg-blue-700 duration-150"
      >
        J
      </button>
      <motion.button
        onClick={() => handleNavButtonClick('about')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600"
      >
        About Me
      </motion.button>
      <motion.button
        onClick={() => handleNavButtonClick('portfolio')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600"
      >
        Portfolio
      </motion.button>
      <motion.button
        onClick={() => handleNavButtonClick('skills')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600"
      >
        Skills
      </motion.button>
      <motion.button
        onClick={() => handleNavButtonClick('resume')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600"
      >
        Resume
      </motion.button>
      <button
        onClick={() => handleNavButtonClick('contact')}
        className="bg-blue-600 text-white font-bold py-2 px-5 rounded-3xl
        hover:bg-blue-700 duration-150"
      >
        Contact
      </button>
    </motion.nav>
  );
};

export default Navbar;
