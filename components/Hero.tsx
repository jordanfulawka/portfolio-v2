'use client';

import { useEffect, useState } from 'react';

const msg = "Hi, I'm Jordan.";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 200);

    setTimeout(() => {
      clearInterval(intervalID);
    }, 5000);
  }, []);

  return (
    <div className='text-white min-h-screen font-mono flex flex-col justify-center gap-6 sm:gap-8 px-5 sm:px-10 md:px-16 lg:px-20 pt-20'>
      <p className='tracking-wider text-lime-500 text-xs sm:text-sm md:text-base'>
        STATUS: AVAILABLE FOR WORK
      </p>
      <h1 className='text-4xl sm:text-5xl lg:text-6xl'>
        {msg.slice(0, index)}
        {index % 2 === 0 ? '_' : ''}
      </h1>
      <p className='max-w-full sm:max-w-[80%] md:max-w-[65%] lg:max-w-[50%] leading-8 sm:leading-10 text-slate-300 text-sm sm:text-base'>
        Full stack developer driven by curiosity and a genuine love for building
        and collaboration. I bring my best to everything I work on, big or
        small. Whatever brings you here, thank you for stopping by.
      </p>
      <div className='flex flex-col sm:flex-row justify-start gap-4 sm:gap-8'>
        <a
          onClick={() =>
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <button className='bg-accent p-4 text-black text-base sm:text-lg cursor-pointer w-full sm:w-auto sm:min-w-50 transition-transform active:scale-95'>
            View my work
          </button>
        </a>
        <a href='/resume.pdf' download>
          <button className='border border-accent p-4 text-accent cursor-pointer w-full sm:w-auto sm:min-w-50 transition-transform active:scale-95'>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
