import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
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
      className="flex fixed justify-center flex gap-5  p-4 rounded-full top-6 
      backdrop-blur-[10px] z-[10] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#ffffff90]"
    >
      <button>Home</button>
      {/* use an anchor tag for these instead? */}
      <h3>About Me</h3>
      <button>Portfolio</button>
      <button>Skills</button>
      <button>Resume</button>
      <button>Contact</button>
    </motion.nav>
  );
};

export default Navbar;
