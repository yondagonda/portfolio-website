import React from 'react';
import { motion, spring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import CopyEmailButton from './Buttons/CopyEmailButton';
import Form from './Form/Form';

const Contact = () => {
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
        x: 0,
        opacity: 1,
        transition: {
          x: { type: 'spring', mass: 0.4, damping: 8, stiffness: 70 },
          opacity: { duration: 0.3 },
          delay: 0.15,
        },
      });
    }
    if (!inView3) {
      animation3.start({
        x: 200,
        opacity: 0,
      });
    }
    if (inView4) {
      animation4.start({
        x: 0,
        opacity: 1,
        transition: {
          x: { type: 'spring', mass: 0.4, damping: 8, stiffness: 70 },
          opacity: { duration: 0.3 },
          delay: 0.15,
        },
      });
    }
    if (!inView4) {
      animation4.start({
        x: -200,
        opacity: 0,
      });
    }
  }, [inView3, inView4]);

  return (
    <section
      id="contact"
      className="flex flex-col items-center min-h-[75vh] pt-[12vh] bg-gray-100 w-[100vw] dark:bg-black duration-200"
    >
      <section className="max-w-[800px]">
        <motion.h3
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={animation}
          className="text-lg xs:text-xl sm:text-2xl md:text-3xl pb-2 text-gray-700 font-bold 
          text-center dark:text-gray-300 duration-200"
        >
          Contact
        </motion.h3>
        <motion.h2
          ref={ref2}
          initial={{ y: 100, opacity: 0 }}
          animate={animation2}
          className="text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl 
          font-bold max-w-[90%] py-2 margininlineauto dark:text-white duration-200"
        >
          Reach out to me any way you want.
        </motion.h2>
      </section>

      <div
        className=" py-4 xs:py-8 sm:py-12 text-xs xs:text-sm sm:text-base text-center max-w-[85%]
      dark:text-gray-300 duration-200"
      >
        <p>
          Fill in the form on the left with your details and I will get back to
          you as soon as I can.
        </p>
        <p>
          Alternatively, you can contact me through any of my socials listed on
          the right.
        </p>
      </div>

      <section
        className="flex flex-col sm:flex-row sm:gap-3 w-[87%] max-w-[950px] mb-[10vh]
      items-center sm:items-start md:gap-4"
      >
        <motion.div
          ref={ref4}
          initial={{ x: -200, opacity: 0 }}
          animate={animation4}
          className="w-full sm:w-fit "
        >
          <Form />
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ x: 200, opacity: 0 }}
          animate={animation3}
          className="p-4 bg-white rounded-3xl outline outline-1 outline-gray-300 
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col gap-2 h-fit max-w-[310px]
         lg:w-full min-w-[250px] sm:min-w-[200px] dark:bg-[#1d1d1f] duration-200 dark:outline-gray-900"
        >
          <a
            href="https://www.linkedin.com/in/johny-ha-63a596189/"
            target="_blank"
            className="flex py-3 px-8 rounded-2xl gap-4 bg-gray-200 cursor-pointer hover:bg-gray-300 duration-200"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height={21}
              width={21}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>linkedin [#161]</title> <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-180.000000, -7479.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                        id="linkedin-[#161]"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h4 className="text-lg font-bold">LinkedIn</h4>
          </a>
          <a
            href="https://github.com/yondagonda"
            target="_blank"
            className="flex py-3 px-8 rounded-2xl gap-4 bg-gray-200 cursor-pointer hover:bg-gray-300 duration-200"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height={23}
              width={23}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title> <desc>Created with Sketch.</desc>
                <defs> </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h4 className="text-lg font-bold">GitHub</h4>
          </a>
          <a
            href="mailto:yonniedooo@gmail.com"
            className="flex py-3 px-8 rounded-2xl gap-4 bg-gray-200 cursor-pointer items-center hover:bg-gray-300 duration-200"
            rel="noreferrer"
          >
            <svg
              fill="#000000"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              height={21}
              width={21}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
            <h4 className="text-lg font-bold">Email</h4>
          </a>
          <CopyEmailButton />
        </motion.div>
      </section>
    </section>
  );
};

export default Contact;
