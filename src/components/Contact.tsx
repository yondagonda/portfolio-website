import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import firebaseicon from '../assets/firebase.png';

const Contact = () => {
  return (
    <section className="flex flex-col items-center h-[80vh] pt-[12vh] border-4 bg-gray-100 w-full">
      <section className="max-w-[950px]">
        <h3 className="text-3xl pb-4 text-center">Contact</h3>
        <h2 className="text-7xl font-bold text-center">
          Reach out to me any way you want.
        </h2>
      </section>
    </section>
  );
};

export default Contact;
