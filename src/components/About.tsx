import React from 'react';

const About = () => {
  return (
    <div
      className="flex flex-col h-[100vh] items-center outline outline-gray-200 pt-[15vh] 
    bg-gray-100 w-screen "
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start max-w-[850px]">
          <div className="text-3xl">About Me</div>
          <header className="text-8xl font-bold text-start">
            My tech stack and expertise.
          </header>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-[1250px] pt-[8vh]">
          <div className="bg-white p-8 rounded-2xl outline-[1px] outline outline-gray-200 text-xl">
            <header className="font-bold">
              Problem solver and tech enthusiast at heart
            </header>
            Growing up, I found myself having a strong inclination towards all
            things related to technology. From Jailbreaking my friend's iPods,
            to figuring out how to bypass my high school's administrator
            restrictions, these early on all significantly contributed to the
            development of my problem-solving abilities.
          </div>
          <div>boxes</div>
        </div>
      </div>
    </div>
  );
};

export default About;
