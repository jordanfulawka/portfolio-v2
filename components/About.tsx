import Image from 'next/image';
import TransitionWrapper from './TransitionWrapper';
import TechBadge from './TechBadge';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiLinux,
  SiSocketdotio,
  SiGithubactions,
  SiRedis,
  SiJest,
  SiMocha,
} from 'react-icons/si';
import { MdKeyboardCommandKey } from 'react-icons/md';
import { FaJava } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import { IoIosCloud } from 'react-icons/io';
import { PiFileSql } from 'react-icons/pi';

export default function About() {
  return (
    <TransitionWrapper>
      <div
        className={`min-h-[90vh] max-w-7xl mx-auto flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-20`}
        id='about'
      >
        <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10'>
          <div className='shrink-0 w-full max-w-xs sm:max-w-sm lg:w-72 xl:w-80'>
            <Image
              alt='placeholder picture'
              src='/self_pic.jpg'
              className='aspect-square object-cover w-full'
              width={300}
              height={300}
            />
          </div>
          <div className='flex flex-col gap-8 w-full lg:gap-0 lg:h-96 lg:justify-around'>
            <div>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 font-mono'>
                A little bit about me
              </h1>
              <p className='text-sm sm:text-base lg:text-base xl:text-lg font-mono text-slate-300 leading-6 sm:leading-7'>
                A recent Computer Science Graduate from the University of
                Guelph. I have a background in full stack development and data,
                but am always excited about working in other fields. Outside of
                code, I love tennis, spending time with friends, and trying new
                foods. I&apos;m currently looking for a full stack or software
                development role that allows me to continue to grow and ship
                work I feel proud of.
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 font-mono gap-10'>
          <div className='flex flex-col gap-3'>
            <span className='text-accent uppercase tracking-widest'>
              Frontend
            </span>
            <div className='flex gap-3 flex-wrap'>
              <TechBadge
                name='React'
                icon={<SiReact size={32} color='#61DAFB' />}
              />
              <TechBadge name='Next.js' icon={<SiNextdotjs size={32} />} />
              <TechBadge
                name='Tailwind'
                icon={<SiTailwindcss size={32} color='#38bdf8' />}
              />
              <TechBadge
                name='TypeScript'
                icon={<SiTypescript size={32} color='#3178C6' />}
              />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-accent uppercase tracking-widest'>
              Backend
            </span>
            <div className='flex gap-3 flex-wrap'>
              <TechBadge
                name='Node / Express'
                icon={<SiNodedotjs size={32} color='#5FA04E' />}
              />
              <TechBadge
                name='REST APIs'
                icon={<MdKeyboardCommandKey size={32} color='#7dd3fc' />}
              />
              <TechBadge
                name='Python'
                icon={<SiPython size={32} color='#3776AB' />}
              />
              <TechBadge name='Socket.IO' icon={<SiSocketdotio size={32} />} />
              <TechBadge name='Java' icon={<FaJava size={32} />} />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-accent uppercase tracking-widest'>
              Databases
            </span>
            <div className='flex gap-3 flex-wrap'>
              <TechBadge
                name='MongoDB'
                icon={<SiMongodb size={32} color='#47A248' />}
              />
              <TechBadge
                name='Supabase'
                icon={<SiSupabase size={32} color='#3ECF8E' />}
              />
              <TechBadge
                name='PostgreSQL'
                icon={<SiPostgresql size={32} color='#4169E1' />}
              />
              <TechBadge
                name='Microsoft SQL Server'
                icon={<PiFileSql size={32} color='#CC2927' />}
              />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-accent uppercase tracking-widest'>
              Data & Analytics
            </span>
            <div className='flex gap-3 flex-wrap'>
              <TechBadge
                name='Tableau'
                icon={<IoLogoTableau size={32} color='7dd3fc' />}
              />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-accent uppercase tracking-widest'>
              Tools & Infrastructure
            </span>
            <div className='flex gap-3 flex-wrap'>
              <TechBadge
                name='Git'
                icon={<SiGit size={32} color='#F05032' />}
              />
              <TechBadge
                name='Docker'
                icon={<SiDocker size={32} color='#2496ED' />}
              />
              <TechBadge
                name='AWS'
                icon={<IoIosCloud size={32} color='#7dd3fc' />}
              />
              <TechBadge
                name='Linux'
                icon={<SiLinux size={32} color='#FCC624' />}
              />
              <TechBadge
                name='GitHub Actions (CI/CD)'
                icon={<SiGithubactions size={32} color='#2088FF' />}
              />
              <TechBadge
                name='Redis'
                icon={<SiRedis size={32} color='#DC382D' />}
              />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-accent uppercase tracking-widest'>
              Testing
            </span>
            <div className='flex gap-3 flex-wrap'>
              <TechBadge
                name='Jest'
                icon={<SiJest size={32} color='#C21325' />}
              />
              <TechBadge
                name='Mocha'
                icon={<SiMocha size={32} color='#8D6748' />}
              />
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
}
