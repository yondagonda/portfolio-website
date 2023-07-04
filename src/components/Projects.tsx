import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });

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
      className="flex flex-col items-center h-[100vh] pt-[12vh] border-4"
    >
      <section className="max-w-[950px]">
        <motion.h3
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={animation}
          className="text-3xl pb-4"
        >
          Projects
        </motion.h3>
        <motion.h2
          ref={ref2}
          initial={{ y: 100, opacity: 0 }}
          animate={animation2}
          className="text-8xl font-bold text-start"
        >
          A small preview of my projects.
        </motion.h2>
      </section>
      <section className="pt-[10vh] grid grid-cols-2 grid-rows-2 gap-4">
        <div className="p-4 outline">Project</div>
        <div className="p-4 outline">Project</div>
        <div className="p-4 outline">Project</div>
        <div className="p-4 outline">Project</div>
      </section>
    </section>
  );
};

export default Projects;
