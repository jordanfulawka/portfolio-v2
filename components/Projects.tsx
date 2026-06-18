import { projects } from '@/lib/data';
import Project from './Project';
import TransitionWrapper from './TransitionWrapper';

export default function Projects() {
  return (
    <TransitionWrapper>
      <div className='min-h-[90vh] max-w-7xl mx-auto px-5 sm:px-8 flex flex-col' id='projects'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-mono mt-16 md:mt-20 lg:mt-24'>
          Here are some things I&apos;ve been working on lately
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6 pb-8 justify-items-center'>
          {projects.map((project) => {
            return <Project key={project.title} project={project} />;
          })}
        </div>
      </div>
    </TransitionWrapper>
  );
}
