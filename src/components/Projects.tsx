import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import project1 from '../assets/projectImages/project1.JPG';
import project2 from '../assets/projectImages/project2.JPG';
import project3 from '../assets/projectImages/project3.jpg';
import project4 from '../assets/projectImages/project4.JPG';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          y: { type: 'spring', mass: 0.5, damping: 8, stiffness: 200 },
        },
        y: 0,
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 50,
      });
    }
    if (inView2) {
      animation2.start({
        opacity: 1,
        transition: {
          y: { type: 'spring', mass: 0.5, damping: 8, stiffness: 200 },
        },
        y: 0,
      });
    }
    if (!inView2) {
      animation2.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView, inView2]);

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center min-h-[110vh] pt-[11vh] w-[100vw]  dark:bg-[#1d1d1f] duration-150"
    >
      <section className="w-[85%] max-w-[850px] text-start 2xl:mr-32">
        <motion.h3
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={animation}
          className="text-lg xs:text-xl sm:text-2xl md:text-3xl pb-4 text-gray-700 font-bold
          dark:text-gray-300"
        >
          Projects
        </motion.h3>
        <motion.h2
          ref={ref2}
          initial={{ y: 100, opacity: 0 }}
          animate={animation2}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl 
          font-bold text-start max-w-[90%] dark:text-white"
        >
          A small preview of my projects.
        </motion.h2>
      </section>

      <section
        className="pt-[1vh] sm:pt-[4vh] lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-7 max-w-[80%] 
      relative flex flex-col gap-0 md:max-w-[610px] lg:max-w-[85%] lg:gap-10 lg:max-w-[1200px] 
      2xl:max-w-[1300px]"
      >
        <motion.a
          href="https://twitter-clone-o5prpumh2-yondagonda.vercel.app/"
          target="_blank"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-xl group flex flex-col items-center"
        >
          <motion.div
            className="py-2 px-3 bg-black/80 w-fit text-white rounded-2xl opacity-0 group-hover:opacity-100
          mb-2 transition-opacity duration-[400ms] text-sm lg:text-base"
          >
            Full-Stack Twitter Clone
          </motion.div>
          <img
            src={project1}
            className="rounded-xl outline outline-[0.5px]
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            alt="twitter clone homepage"
          />
        </motion.a>

        <motion.a
          href="https://yondagonda.github.io/ecommerce-store/"
          target="_blank"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-xl group flex flex-col items-center"
        >
          <motion.div
            className="py-2 px-3 bg-black/80 w-fit text-white rounded-2xl opacity-0 group-hover:opacity-100
          mb-2 transition-opacity duration-[400ms] text-sm lg:text-base"
          >
            E-Commerce Game Store
          </motion.div>
          <img
            src={project2}
            className="rounded-xl outline outline-[0.5px]
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            alt="twitter clone homepage"
          />
        </motion.a>

        <motion.a
          href="https://yondagonda.github.io/Project-CV-Application/"
          target="_blank"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-xl group flex flex-col items-center text-sm mt-12 lg:mt-0"
        >
          <img
            src={project3}
            className="rounded-xl outline outline-[0.5px]
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            alt="twitter clone homepage"
          />
          <motion.div
            className="py-2 px-3 bg-black/80 w-fit text-white rounded-2xl opacity-0 group-hover:opacity-100
          mt-2 transition-opacity duration-[400ms] text-sm lg:text-base"
          >
            CV Builder
          </motion.div>
        </motion.a>

        <motion.a
          href="https://yondagonda.github.io/portfolio-website/"
          target="_blank"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-xl group flex flex-col items-center text-sm mt-1 lg:mt-0"
        >
          <img
            src={project4}
            className="rounded-xl outline outline-[0.5px]
            shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            alt="twitter clone homepage"
          />
          <motion.div
            className="py-2 px-3 bg-black/80 w-fit text-white rounded-2xl opacity-0 group-hover:opacity-100
          mt-2 transition-opacity duration-[400ms] text-sm lg:text-base"
          >
            Portfolio Site (you're here right now)
          </motion.div>
        </motion.a>
      </section>

      <motion.a
        href="https://github.com/yondagonda?tab=repositories"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="text-blue-600 text-lg sm:text-xl cursor-pointer pt-10 pb-[5vh]"
      >
        Show more
      </motion.a>
    </section>
  );
};

export default Projects;
