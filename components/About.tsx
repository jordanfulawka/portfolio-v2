import Image from 'next/image';
import TransitionWrapper from './TransitionWrapper';

export default function About() {
  return (
    <TransitionWrapper>
      <div
        className={`min-h-[90vh] max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-5 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-20 `}
        id='about'
      >
        <div className='shrink-0 w-full max-w-xs sm:max-w-sm lg:w-72 xl:w-80'>
          <Image
            alt='placeholder picture'
            src='/weave.png'
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
              A recent Computer Science Graduate from the University of Guelph.
              I have a background in full stack development and data, but am
              always excited about working in other fields. Outside of code, I
              love tennis, spending time with friends, and trying new foods.
              I&apos;m currently looking for a full stack or software
              development role that allows me to continue to grow and ship work
              I feel proud of.
            </p>
          </div>
          <div className='font-mono text-xs sm:text-sm grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-8 '>
            <div>
              <h3 className='pb-2 tracking-widest'>Frontend</h3>
              <ul className='list-disc marker:text-accent space-y-1'>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className='pb-2 tracking-widest'>Backend</h3>
              <ul className='list-disc marker:text-accent space-y-1'>
                <li>Node.js/Express.js</li>
                <li>REST APIs</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className='pb-2 tracking-widest'>Databases & Data</h3>
              <ul className='list-disc marker:text-accent space-y-1'>
                <li>MongoDB</li>
                <li>Supabase</li>
                <li>PostgreSQL</li>
                <li>Tableau</li>
              </ul>
            </div>
            <div>
              <h3 className='pb-2 tracking-widest'>Tools</h3>
              <ul className='list-disc marker:text-accent space-y-1'>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
}
