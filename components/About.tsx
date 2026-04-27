import Image from 'next/image';

export default function About() {
  return (
    <div className='min-h-screen flex items-center gap-8 p-30'>
      <div className='shrink-0'>
        <Image
          alt='placeholder picture'
          src='/weave.png'
          className='aspect-square object-cover w-lg'
          width={500}
          height={500}
        />
      </div>
      <div className='h-128 flex flex-col justify-between'>
        <div>
          <h1 className='text-6xl mb-5 font-mono'>A little bit about me</h1>
          <p className='text-xl font-mono text-slate-300'>
            A recent Computer Science Graduate from the University of Guelph. I
            have a background in full stack development and data, but am always
            excited about working in other fields. Outside of code, I love
            tennis, spending time with friends, and trying new foods. I&apos;m
            currently looking for a full stack or software development role that
            allows me to continue to grow and ship work I feel proud of.
          </p>
        </div>
        <div className='font-mono text-xl flex gap-10 justify-around'>
          <div>
            <h3 className='pb-2 tracking-widest'>Frontend</h3>
            <ul className='list-disc marker:text-accent '>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className='pb-2 tracking-widest'>Backend</h3>
            <ul className='list-disc marker:text-accent'>
              <li>Node.js/Express.js</li>
              <li>REST APIs</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h3 className='pb-2 tracking-widest'>Databases & Data</h3>
            <ul className='list-disc marker:text-accent'>
              <li>MongoDB</li>
              <li>Supabase</li>
              <li>PostgreSQL</li>
              <li>Tableau</li>
            </ul>
          </div>
          <div>
            <h3 className='pb-2 tracking-widest'>Tools</h3>
            <ul className='list-disc marker:text-accent'>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
