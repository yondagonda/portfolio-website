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
      className="flex fixed justify-center flex gap-2 xs:gap-4 sm:px-2
       sm:gap-6 sm:px-4 md:gap-8 rounded-full top-6 
      backdrop-blur-[10px] z-[100] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#ffffff] 
      items-center py-1 px-2 sm:py-1.5"
    >
      <button
        onClick={() => handleNavButtonClick('start')}
        className="bg-blue-600 text-white font-bold py-1 xs:px-3 rounded-full xs:text-[18px]
        hover:bg-blue-700 duration-150 text-sm px-2.5 xs:py-1.5"
      >
        J
      </button>
      <motion.button
        onClick={() => handleNavButtonClick('about')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600 text-[12px] xs:text-sm sm:text-base"
      >
        About
      </motion.button>
      <motion.button
        onClick={() => handleNavButtonClick('portfolio')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600 text-[12px] xs:text-sm sm:text-base"
      >
        Portfolio
      </motion.button>
      <motion.button
        onClick={() => handleNavButtonClick('skills')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600 text-[12px] xs:text-sm sm:text-base"
      >
        Skills
      </motion.button>
      <motion.button
        onClick={() => handleNavButtonClick('resume')}
        whileHover={{ scale: 1.08 }}
        className="hover:text-blue-600 text-[12px] xs:text-sm sm:text-base"
      >
        Resume
      </motion.button>
      <button
        onClick={() => handleNavButtonClick('contact')}
        className="bg-blue-600 text-white font-bold xs:px-5 rounded-3xl
        hover:bg-blue-700 duration-150 text-[12px] xs:text-sm sm:text-base px-2 py-1.5"
      >
        Contact
      </button>
    </motion.nav>
  );
};

export default Navbar;
