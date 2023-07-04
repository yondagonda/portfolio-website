import React, { useEffect, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Form = () => {
  const form = useRef<any>();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs
      .sendForm(
        'service_isebdnh',
        'template_8spajtc',
        form.current,
        '9-OjMu3mio6iH06NR'
      )
      .then(
        (result) => {
          setNameInput('');
          setEmailInput('');
          setMessageInput('');
          setShowConfirmation(true);
        },
        (error) => {
          alert(error);
        }
      );
  };

  useEffect(() => {
    if (showConfirmation) {
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  }, [showConfirmation]);

  return (
    <>
      {/* <button onClick={() => setShowConfirmation(true)}>test</button> */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.dialog
            initial={{ x: -350, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                opacity: { duration: 0.6 },
              },
            }}
            exit={{
              x: '-30vw',
              opacity: 0,
              transition: {
                x: {
                  duration: 0.4,
                  delay: 0.1,
                },
                opacity: {
                  duration: 0.15,
                  delay: 0.1,
                },
              },
            }}
            className="fixed top-0 left-0 mt-4 ml-4 rounded-3xl flex gap-2 
      shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-2 px-4 z-[10] bg-blue-600 text-white font-bold"
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
              height={20}
              width={20}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M866.133333 258.133333L362.666667 761.6l-204.8-204.8L98.133333 618.666667 362.666667 881.066667l563.2-563.2z"></path>
              </g>
            </svg>
            <h4>Message Sent</h4>
          </motion.dialog>
        )}
      </AnimatePresence>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 px-5 pt-5 pb-4 bg-white rounded-3xl  items-center
  outline outline-1 outline-gray-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
  margininlineauto sm:w-fit mb-3"
      >
        <div className="flex flex-col xs:flex-row gap-3 w-full">
          <div className="">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              name="from_name"
              placeholder="Your name"
              className="bg-gray-100 outline outline-gray-200 outline-1 rounded-md p-2 
        placeholder:text-gray-600 focus:ring focus:ring-blue-500 duration-150 w-full"
              required
            />
          </div>
          <div className="">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              name="from_email"
              className="bg-gray-100 outline outline-gray-200 outline-1 rounded-md p-2 
        placeholder:text-gray-600 focus:ring focus:ring-blue-500 duration-150 w-full"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="bg-gray-100 outline outline-gray-200 outline-1 rounded-md p-2 
      placeholder:text-gray-600 focus:ring focus:ring-blue-500 duration-150 w-full
      resize-none"
          rows={8}
          placeholder="Your message for me"
          required
        ></textarea>

        <button
          type="submit"
          className="px-8 py-2.5 bg-blue-600 text-white w-fit rounded-xl font-bold
      mt-2 hover:bg-blue-700 duration-150"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
