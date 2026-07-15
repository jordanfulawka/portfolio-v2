'use client';

import { FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { Toaster, toast } from 'sonner';
import TransitionWrapper from './TransitionWrapper';

export default function Contact() {
  function handleEmailClick() {
    navigator.clipboard.writeText('jordan.fulawka@outlook.com');
    toast.success('Email copied to clipboard', {
      duration: 2000,
      icon: <span className='text-lime-500'>❯</span>,
    });
  }

  return (
    <TransitionWrapper>
      <div
        className='min-h-[50vh] max-w-5xl mx-auto flex px-5 sm:px-10 md:px-20 lg:px-32 py-12 sm:py-16 font-mono  '
        id='contact'
      >
        <div className='bg-surface flex-1 flex flex-col border border-[#27272a] rounded-lg overflow-hidden'>
          <div className='bg-[#0a0a0a] flex p-3 gap-2'>
            <div className='w-3 h-3 bg-[#ef4444] rounded-full' />
            <div className='w-3 h-3 bg-[#eab308] rounded-full' />
            <div className='w-3 h-3 bg-[#22c55e] rounded-full' />
            <p className='text-xs font-mono text-gray-600 pl-3'>~/contact</p>
          </div>
          <div className='flex-1 flex flex-col p-10 gap-3'>
            <p>
              <span className='text-lime-500'>❯</span>
              <span className='text-accent'> contact </span>
              <span className='lowercase'>--list</span>
            </p>
            <p className='text-2xl'>Let&apos;s Chat!</p>
            <p className='text-sm text-gray-500'>
              Feel free to reach out for opportunities, collaborations, or just
              to say hi
            </p>
            <ul className='divide-y divide-[#27272a]'>
              <li className='py-3 first:pt-0'>
                <a
                  className='flex items-center gap-3'
                  href='https://github.com/jordanfulawka'
                  target='_blank'
                >
                  <FiGithub />
                  <span>github.com/jordanfulawka</span>
                </a>
              </li>
              <li className='py-3'>
                <a
                  className='flex items-center gap-3'
                  href='https://www.linkedin.com/in/jordanfulawka/'
                  target='_blank'
                >
                  <FaLinkedinIn />
                  <span>linkedin.com/in/jordanfulawka</span>
                </a>
              </li>
              <li className='py-3 last:pb-0'>
                <a
                  className='flex items-center gap-3 justify-between cursor-pointer'
                  onClick={handleEmailClick}
                >
                  <div className='flex items-center gap-3'>
                    <MdAlternateEmail />

                    <span>jordan.fulawka@outlook.com</span>
                    <Toaster
                      position='bottom-right'
                      toastOptions={{
                        unstyled: true,
                        classNames: {
                          toast:
                            'toast-terminal flex items-center gap-3 rounded-lg border border-[#27272a] bg-[#0a0a0a] px-4 py-3 font-mono text-sm text-white shadow-lg shadow-black/40',
                          icon: 'text-accent',
                        },
                      }}
                    />
                  </div>
                  <p className='text-xs text-gray-500'>click to copy</p>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className='flex-1 flex flex-col md:flex-row'>
            <div className='flex-1 flex items-center p-6 sm:p-8 md:p-10 lg:p-12'>
              <div>
                <h1 className='text-xl sm:text-2xl'>Let&apos;s Chat!</h1>
                <p className='mt-4 text-sm sm:text-base text-slate-300 leading-6'>
                  Feel free to reach out for opportunities, collaborations, or
                  just to say hi.
                </p>
              </div>
            </div>
            <div className='flex-1 flex justify-center items-center gap-6 sm:gap-8 py-8 md:py-0'>
              <a href='https://github.com/jordanfulawka' target='_blank'>
                <FaGithub
                  className='inline transition-transform hover:scale-125'
                  color='#38bdf8'
                  size={36}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/jordanfulawka/'
                target='_blank'
              >
                <FaLinkedin
                  className='inline transition-transform hover:scale-125'
                  color='#38bdf8'
                  size={36}
                />
              </a>
              <a>
                <FaEnvelope
                  onClick={handleEmailClick}
                  className='inline transition-transform hover:scale-125'
                  color='#38bdf8'
                  size={36}
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
          </div> */}
        </div>
      </div>
    </TransitionWrapper>
  );
}
