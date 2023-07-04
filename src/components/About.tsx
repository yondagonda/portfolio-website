import React, { useEffect, useRef } from 'react';
import detail from '../assets/detail.png';
import lighthouse from '../assets/lighthouse.png';
import { useInView } from 'react-intersection-observer';
import { motion, spring } from 'framer-motion';
import { useAnimation } from 'framer-motion';

const About = () => {
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

  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });

  const animation3 = useAnimation();
  const animation4 = useAnimation();

  useEffect(() => {
    if (inView3) {
      animation3.start({
        scale: 1,
        transition: {
          scale: { duration: 0.15, type: 'spring' },
        },
      });
    }
    if (!inView3) {
      animation3.start({
        scale: 0,
      });
    }
    if (inView4) {
      animation4.start({
        scale: 1,
        transition: {
          scale: { duration: 0.15, type: 'spring' },
        },
      });
    }
    if (!inView4) {
      animation4.start({
        scale: 0,
      });
    }
  }, [inView3, inView4]);

  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [ref6, inView6] = useInView({ triggerOnce: false });

  const animation5 = useAnimation();
  const animation6 = useAnimation();

  useEffect(() => {
    if (inView5) {
      animation5.start({
        scale: 1,
        transition: {
          scale: { duration: 0.15, type: 'spring' },
        },
      });
    }
    if (!inView5) {
      animation5.start({
        scale: 0,
      });
    }
    if (inView6) {
      animation6.start({
        scale: 1,
        transition: {
          scale: { duration: 0.15, type: 'spring' },
        },
      });
    }
    if (!inView6) {
      animation6.start({
        scale: 0,
      });
    }
  }, [inView5, inView6]);

  return (
    <section
      id="about"
      className="flex flex-col min-h-[105vh] items-center pt-[12vh] 
    bg-gray-100 w-[100vw]"
    >
      <div className="flex flex-col items-center xl:items-start">
        <section className="flex flex-col items-start w-[85%] max-w-[850px] xl:pl-[10vw] 2xl:pl-8">
          <motion.h3
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={animation}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl pb-4 text-gray-700 font-bold"
          >
            About Me
          </motion.h3>
          <motion.h2
            ref={ref2}
            initial={{ y: 100, opacity: 0 }}
            animate={animation2}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl 
            font-bold text-start max-w-[90%]"
          >
            My tech stack and expertise.
          </motion.h2>
        </section>
        <section
          className="lg:grid lg:grid-cols-[57%_43%] gap-4 lg:max-w-[85%] 
           2xl:max-w-[1250px] 
        pt-[3vh] md:pt-[5vh] xl:pt-[7vh] margininlineauto "
        >
          <article
            className="bg-white rounded-2xl outline-[1px] outline outline-gray-200 
            text-xl py-6 px-5 sm:px-8 md:px-10 md:py-10 max-w-[85%] sm:max-w-[580px]
            margininlineauto mb-3 md:mb-5 lg:mb-0 md:max-w-[80%] lg:max-w-full"
          >
            <h4 className="font-bold text-lg sm:text-2xl">
              Problem solver and tech enthusiast at heart
            </h4>
            <div className="text-gray-800">
              <p className="py-5 text-sm sm:text-lg 2xl:text-xl">
                <em>
                  Growing up, I found myself having a strong inclination towards
                  all things related to technology. From Jailbreaking my friends
                  iPods, to figuring out how to bypass my high school's
                  administrator restrictions, these all significantly
                  contributed to the development of my technical problem-solving
                  abilities.
                </em>
              </p>
              <p className="text-sm sm:text-xl 2xl:text-2xl">
                Nowadays, my passion lies in software development. Creating new
                experiences, solving complex problems, and implementing visually
                appealing designs is what I love doing best.
              </p>
            </div>
          </article>
          <div
            className="sm:flex sm:flex-col sm:gap-4 lg:h-fit
          items-start"
          >
            <motion.article
              ref={ref3}
              initial={{ scale: 0 }}
              animate={animation3}
              className="bg-white rounded-2xl outline-[1px] outline outline-gray-200 
              sm:px-8 sm:py-6 px-4 py-4 max-w-[85%] sm:max-w-[580px] margininlineauto h-fit
              lg:py-8"
            >
              <h4 className="font-bold sm:text-xl">Attention to Detail</h4>
              <img
                className="pt-2"
                src={detail}
                alt="developer tools being used on a html element"
              />
            </motion.article>
            <motion.article
              ref={ref4}
              initial={{ scale: 0 }}
              animate={animation4}
              className="bg-white rounded-2xl outline-[1px] outline outline-gray-200 
              sm:px-8 sm:py-6 px-4 py-4 max-w-[85%] margininlineauto h-fit mt-2 sm:mt-0
              sm:max-w-[580px] lg:py-8"
            >
              <div className="flex items-baseline gap-1.5">
                <h4 className="font-bold sm:text-xl">Performance Focused</h4>
                <span className="text-xs sm:text-sm text-gray-800">
                  via Google Lighthouse
                </span>
              </div>
              <img
                className="pt-2"
                src={lighthouse}
                alt="Google lighthouse results of this site"
              />
            </motion.article>
          </div>
        </section>
        <section
          className="gradientbg xl:max-w-[1200px] w-full md:grid md:grid-cols-2 rounded-2xl my-5
        p-3 lg:p-8 max-w-[85%] margininlineauto mb-14 sm:mt-8"
        >
          <div className="text-white p-2 sm:p-10 flex flex-col gap-4">
            <motion.h3
              ref={ref5}
              initial={{ scale: 0 }}
              animate={animation5}
              className="text-xl sm:text-3xl font-bold"
            >
              A little insight into my work
            </motion.h3>
            <motion.p
              ref={ref6}
              initial={{ scale: 0 }}
              animate={animation6}
              className="text-sm sm:text-lg"
            >
              Today I work with TypeScript in React, Next.js as a full stack
              framework, and Tailwind for CSS. As you can probably tell, I also
              enjoy working with motion libraries - e.g. Framer Motion
            </motion.p>
          </div>
          <div>{/* MONITOR THINGY */}</div>
        </section>
      </div>
    </section>
  );
};

export default About;
