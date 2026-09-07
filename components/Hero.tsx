'use client';

import { GitHubActivity } from '@/lib/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GitHubStatus from './GitHubStatus';

const msg = "Hi, I'm Jordan.";

export default function Hero({ activity }: { activity: GitHubActivity }) {
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
    // min-h-[90vh] max-w-7xl
    <div className='text-white min-h-[90vh] mx-auto font-sans flex flex-col justify-center gap-5 sm:gap-6 px-5 sm:px-10 md:px-16 lg:px-50 pt-20 min-w-0'>
      <div className='flex'>
        <div className='flex-4 flex flex-col justify-center gap-8'>
          <p className='tracking-wider text-lime-500 text-xs sm:text-sm'>
            • AVAILABLE FOR WORK
          </p>
          <h1 className='max-w-full sm:max-w-[70%] md:max-w-[55%] lg:max-w-[65%] text-3xl sm:text-4xl lg:text-7xl'>
            I build full-stack products end to end.
          </h1>
          <p className='max-w-full sm:max-w-[80%] md:max-w-[65%] lg:max-w-[50%] leading-6 sm:leading-7 text-slate-300 text-sm sm:text-base'>
            Full stack developer driven by curiosity and a genuine love for
            building and collaboration. I bring my best to everything I work on,
            big or small. Whatever brings you here, thank you for stopping by.
          </p>
          <div className='flex flex-col sm:flex-row justify-start gap-3 sm:gap-6'>
            <a
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <button className='bg-accent px-5 py-3 text-black text-sm sm:text-base cursor-pointer w-full sm:w-auto sm:min-w-44 transition-transform active:scale-95 rounded-sm hover:bg-[#A5E1FD]'>
                View my work
              </button>
            </a>
            <a href='/resume.pdf' download>
              <button className='border px-5 py-3 text-sm sm:text-base cursor-pointer w-full sm:w-auto sm:min-w-44 transition-transform active:scale-95 rounded-sm hover:border-accent hover:text-accent'>
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-90 shrink-0'>
          <div className='relative w-full aspect-4/5'>
            <Image
              alt='placeholder picture'
              src='/self_pic.jpg'
              fill
              className='object-cover rounded-xl'
              sizes='300px'
            />
          </div>

          <table className='mt-5 font-mono text-sm'>
            <tbody>
              <tr>
                <td className='text-[#8A9099]'>Location</td>
                <td className='text-right text-[#ECEEF1] '>Toronto, ON</td>
              </tr>
              <tr>
                <td className='text-[#8A9099]'>Focus</td>
                <td className='text-right'>React • Node • Spring Boot</td>
              </tr>
              {/* <tr>
                <td className='text-[#8A9099]'>Location</td>
                <td className='text-right'>Toronto, ON</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <GitHubStatus activity={activity} />
    </div>
  );
}
