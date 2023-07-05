import React, { useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const enableDarkMode = () => {
    setDarkMode(true);
    document.documentElement.classList.add('dark');
  };

  const enableLightMode = () => {
    setDarkMode(false);
    document.documentElement.classList.remove('dark');
  };

  return (
    <>
      {darkMode ? (
        <button
          className="fixed bottom-5 left-5 text-white py-2 px-2 outline-1 outline rounded-xl outline-gray-700
          flex gap-2 bg-black items-center"
          onClick={enableLightMode}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height={22}
            width={22}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="#ffffff"
                stroke-width="2"
              ></path>{' '}
              <path
                d="M12 5V3"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
              <path
                d="M17 7L19 5"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
              <path
                d="M19 12H21"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
              <path
                d="M17 17L19 19"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
              <path
                d="M12 19V21"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
              <path
                d="M7 17L5 19"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
              <path
                d="M5 12H3"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
              <path
                d="M5 5L7 7"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{' '}
            </g>
          </svg>
          <h4 className="hidden sm:block">Toggle light mode</h4>
        </button>
      ) : (
        <button
          className="fixed bottom-5 left-5 py-2 px-2 rounded-xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
          flex gap-2 items-center"
          onClick={enableDarkMode}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height={22}
            width={22}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="24" height="24" fill="white"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z"
                fill="#323232"
              ></path>
            </g>
          </svg>
          <h4 className="hidden sm:block"> Toggle dark mode</h4>
        </button>
      )}
    </>
  );
}

export default DarkModeToggle;
