import Image from 'next/image';

export default function About() {
  return (
    <div className='min-h-screen flex items-center gap-5 p-10'>
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a
          </p>
        </div>
        <div className='font-mono text-xl flex gap-10 justify-around'>
          <div>
            <h3 className='pb-2 tracking-widest'>Languages</h3>
            <ul className='list-disc marker:text-accent '>
              <li>JavaScript/TypeScript</li>
              <li>C</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h3 className='pb-2 tracking-widest'>Web Development</h3>
            <ul className='list-disc marker:text-accent'>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>NodeJS/ExpressJS</li>
            </ul>
          </div>
          <div>
            <h3 className='pb-2 tracking-widest'>Tools & Technologies</h3>
            <ul className='list-disc marker:text-accent'>
              <li>Git</li>
              <li>Linux</li>
              <li>AWS [Lambda, ECS, CloudFormation]</li>
              <li>Docker</li>
            </ul>
          </div>
          {/* <div>
            <h3 className='pb-2 tracking-widest'>Languages</h3>
            <ul className='list-disc marker:text-accent'>
              <li>JavaScript/TypeScript</li>
              <li>Java</li>
              <li>C</li>
              <li>SQL</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
