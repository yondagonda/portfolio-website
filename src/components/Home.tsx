import React from 'react';
import profilepic from '../assets/profile.JPG';
import { motion } from 'framer-motion';

const Home = () => {
  const handleNavButtonClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <motion.section
      id="start"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center h-[98vh] pt-[28vh] w-[100vw]"
    >
      <motion.div variants={childVariants}>
        <img
          src={profilepic}
          className="h-44 w-44 xs:h-60 xs:w-60 object-cover rounded-full ring-4 ring-blue-600"
          alt="profile shot"
        />
      </motion.div>
      <motion.h3
        variants={childVariants}
        className="text-xl xs:text-2xl py-4 text-gray-700"
      >
        Johny Ha
      </motion.h3>
      <motion.h1
        variants={childVariants}
        className="text-2xl xs:text-4xl sm:text-6xl font-bold text-center pt-2"
      >
        Software Engineer
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="sm:max-w-[450px] max-w-[75vw] text-xs xs:text-base text-center py-6 
        text-gray-700"
      >
        Passionate about problem solving, I thrive on the thrill of unraveling
        intricate puzzles and persisting until I discover the most effective
        solutions.
      </motion.p>

      <motion.button
        onClick={() => handleNavButtonClick('about')}
        className="xs:py-3 xs:px-5 border bg-blue-600 text-white font-bold rounded-full flex gap-2
        items-center group py-2 px-3 text-sm xs:text-base"
        variants={childVariants}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          height={20}
          width={20}
          className="group-hover:translate-y-[2px] duration-300 fill-white"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
            ></path>
          </g>
        </svg>
        Find out more
      </motion.button>
    </motion.section>
  );
};

export default Home;
