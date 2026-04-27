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
    <div className='text-white min-h-screen font-mono flex flex-col justify-center gap-8 ml-5'>
      <p className='tracking-wider text-lime-500'>STATUS: AVAILABLE FOR WORK</p>
      <h1 className='text-6xl'>
        {msg.slice(0, index)}
        {index % 2 === 0 ? '_' : ''}
      </h1>
      <p className='max-w-[50%] leading-10 text-slate-300'>
        Full stack developer driven by curiosity and a genuine love for building
        and collaboration. I bring my best to everything I work on, big or
        small. Whatever brings you here, thank you for stopping by.
      </p>
      <div className='flex justify-start gap-8'>
        <a href='#projects'>
          <button className='bg-accent p-4 text-black text-lg cursor-pointer min-w-50 transition-transform active:scale-95'>
            View my work
          </button>
        </a>
        <a href='/resume.pdf' download>
          <button className='border border-accent p-4 text-accent cursor-pointer min-w-50 transition-transform active:scale-95'>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
