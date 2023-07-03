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
      className="flex flex-col h-[115vh] items-center outline outline-gray-200 pt-[13vh] 
    bg-gray-100 w-screen "
    >
      <div className="flex flex-col items-start">
        <section className="flex flex-col items-start max-w-[850px] ml-[5vw]">
          <motion.h3
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={animation}
            className="text-3xl pb-4"
          >
            About Me
          </motion.h3>
          <motion.h2
            ref={ref2}
            initial={{ y: 100, opacity: 0 }}
            animate={animation2}
            className="text-8xl font-bold text-start"
          >
            My tech stack and expertise.
          </motion.h2>
        </section>
        <section className="grid grid-cols-[60%_40%] gap-4 max-w-[1250px] pt-[8vh]">
          <article
            className="bg-white px-10 rounded-2xl outline-[1px] outline outline-gray-200 text-xl
          py-12"
          >
            <h4 className="font-bold text-2xl">
              Problem solver and tech enthusiast at heart
            </h4>
            <div className="text-gray-800">
              <p className="py-5 text-xl">
                <em>
                  Growing up, I found myself having a strong inclination towards
                  all things related to technology. From Jailbreaking my friends
                  iPods, to figuring out how to bypass my high school's
                  administrator restrictions, these all significantly
                  contributed to the development of my technical problem-solving
                  abilities.
                </em>
              </p>
              <p>
                Nowadays, my passion lies in software development. Creating new
                experiences, solving complex problems, and implementing visually
                appealing designs is what I love doing best.
              </p>
            </div>
          </article>
          <div className="grid grid-rows-2 gap-4">
            <motion.article
              ref={ref3}
              initial={{ scale: 0 }}
              animate={animation3}
              className="bg-white px-8 rounded-2xl outline-[1px] outline outline-gray-200 
            py-6"
            >
              <h4 className="font-bold text-xl">Attention to Detail</h4>
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
              className="bg-white px-8 rounded-2xl outline-[1px] outline outline-gray-200 
            py-6 "
            >
              <div className="flex items-baseline gap-1.5">
                <h4 className="font-bold text-xl">Performance Focused</h4>
                <span className="text-sm text-gray-800">
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
          className="gradientbg max-w-[1250px] w-full grid grid-cols-2 rounded-2xl my-5
        p-8"
        >
          <div className="text-white p-10 flex flex-col gap-4">
            <motion.h3
              ref={ref5}
              initial={{ scale: 0 }}
              animate={animation5}
              className="text-3xl font-bold"
            >
              A little insight into my work
            </motion.h3>
            <motion.p
              ref={ref6}
              initial={{ scale: 0 }}
              animate={animation6}
              className="text-lg"
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
