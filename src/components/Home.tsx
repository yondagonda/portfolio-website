import React from 'react';
import profilepic from '../assets/profile.JPG';
import { motion, spring } from 'framer-motion';
import { stagger } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const childVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.15,
        y: { type: 'spring', mass: 0.3, damping: 10, stiffness: 150 },
        opacity: { duration: 0.4 },
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center h-[100vh] pt-[28vh] outline outline-gray-200"
    >
      <motion.div variants={childVariants}>
        <img
          src={profilepic}
          className="h-60 w-60 object-cover rounded-full ring-4 ring-blue-600"
          alt="profile shot"
        />
      </motion.div>
      <motion.h3 variants={childVariants} className="text-2xl py-4">
        Johny Ha
      </motion.h3>
      <motion.h1
        variants={childVariants}
        className="text-6xl font-bold text-center pt-2"
      >
        Software Engineer
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="max-w-[450px] text-center py-6"
      >
        Passionate about problem solving, I thrive on the thrill of unraveling
        intricate puzzles and persisting until I discover the most effective
        solutions.
      </motion.p>

      <motion.button
        className="py-3 px-5 border bg-blue-600 text-white font-bold rounded-full"
        variants={childVariants}
      >
        Find out more
      </motion.button>
    </motion.header>
  );
};

export default Home;
