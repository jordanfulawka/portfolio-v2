'use client';

import { useEffect, useState } from 'react';
import ScrollProgressBar from './ScrollProgressBar';
import { usePerformance } from '@/context/PerformanceProvider';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { performanceMode } = usePerformance();

  useEffect(() => {
    const sections = ['projects', 'experience', 'contact', 'about'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className='fixed top-0 left-0 z-50 right-0 flex items-center justify-between px-5 sm:px-8 py-4 text-sm sm:text-base bg-black/80 backdrop-blur-sm'>
      <div>
        <p className='font-mono font-bold tracking-widest text-white text-sm sm:text-base'>
          Jordan Fulawka
        </p>
      </div>

      <div className='hidden md:block'>
        <ul className='flex items-center gap-6 lg:gap-8'>
          <li
            className={`cursor-pointer transition-transform active:scale-95 ${activeSection === 'projects' ? 'scale-90 text-accent' : ''}`}
          >
            <a onClick={() => scrollTo('projects')} className='font-mono'>
              Projects
            </a>
          </li>
          <li
            className={`cursor-pointer transition-transform active:scale-95 ${activeSection === 'experience' ? 'scale-90 text-accent' : ''}`}
          >
            <a onClick={() => scrollTo('experience')} className='font-mono'>
              Experience
            </a>
          </li>
          <li
            className={`cursor-pointer transition-transform active:scale-95 ${activeSection === 'contact' ? 'scale-90 text-accent' : ''}`}
          >
            <a onClick={() => scrollTo('contact')} className='font-mono'>
              Contact
            </a>
          </li>
          <li className='transition-transform active:scale-95'>
            <a
              href='/resume.pdf'
              download
              className='font-mono text-accent border border-accent px-4 py-1.5 hover:bg-accent hover:text-black transition-colors'
            >
              Resume↗
            </a>
          </li>
        </ul>
      </div>

      <button
        className='md:hidden flex flex-col gap-1.5 p-2'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle menu'
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {menuOpen && (
        <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden'>
          <ul className='flex flex-col font-mono p-5 gap-4'>
            <li>
              <a
                href='#projects'
                className='block py-2'
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className='block py-2'
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='block py-2'
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href='/resume.pdf'
                download
                className='inline-block text-accent border border-accent px-4 py-2 hover:bg-accent hover:text-black transition-colors'
                onClick={() => setMenuOpen(false)}
              >
                Resume↗
              </a>
            </li>
          </ul>
        </div>
      )}
      {!performanceMode && <ScrollProgressBar />}
    </nav>
  );
}
