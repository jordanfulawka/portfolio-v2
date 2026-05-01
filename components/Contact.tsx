'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Toaster, toast } from 'sonner';
import TransitionWrapper from './TransitionWrapper';

export default function Contact() {
  function handleEmailClick() {
    navigator.clipboard.writeText('jordan.fulawka@outlook.com');
    toast.success('Email copied to clipboard');
  }

  return (
    <TransitionWrapper>
      <div
        className='min-h-[70vh] flex px-5 sm:px-10 md:px-20 lg:px-40 py-16 sm:py-20 font-mono'
        id='contact'
      >
        <div className='bg-surface flex-1 flex flex-col md:flex-row'>
          <div className='flex-1 flex items-center p-6 sm:p-8 md:p-10 lg:p-12'>
            <div>
              <h1 className='text-2xl sm:text-3xl'>Let&apos;s Chat!</h1>
              <p className='mt-5 text-sm sm:text-base text-slate-300 leading-7'>
                Feel free to reach out for opportunities, collaborations, or
                just to say hi.
              </p>
            </div>
          </div>
          <div className='flex-1 flex justify-center items-center gap-8 sm:gap-10 py-8 md:py-0'>
            <a href='https://github.com/jordanfulawka' target='_blank'>
              <FaGithub
                className='inline transition-transform hover:scale-125'
                color='#00d4ff'
                size={44}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/jordanfulawka/'
              target='_blank'
            >
              <FaLinkedin
                className='inline transition-transform hover:scale-125'
                color='#00d4ff'
                size={44}
              />
            </a>
            <a>
              <FaEnvelope
                onClick={handleEmailClick}
                className='inline transition-transform hover:scale-125'
                color='#00d4ff'
                size={44}
              />
              <Toaster
                toastOptions={{
                  style: {
                    background: 'green',
                    borderColor: 'white',
                    color: 'white',
                  },
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
}
