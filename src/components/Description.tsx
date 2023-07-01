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
    <div className="flex flex-col justify-center h-[70vh] max-w-[1200px] outline outline-gray-200">
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={animation}>
        <header className="text-6xl font-bold text-center">
          Continuously learning and exploring new technologies, and best
          practices to enhance my skills and stay ahead in a rapidly evolving
          industry
        </header>
      </motion.div>
    </div>
  );
};

export default Description;
