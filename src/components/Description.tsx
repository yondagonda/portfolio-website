import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Description = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.05 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section
      className="flex flex-col justify-center h-[60vh]
    overflow-x-hidden dark:bg-[#1d1d1f] duration-200 items-center w-full"
    >
      <motion.div
        className="max-w-[85%] xl:max-w-[1200px]"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={animation}
      >
        <h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient 
        py-3"
        >
          Continuously learning and exploring new technologies to enhance my
          skills and stay ahead in a rapidly evolving industry
        </h2>
      </motion.div>
    </section>
  );
};

export default Description;
