import { projects } from '@/lib/data';
import Project from './Project';

export default function Projects() {
  return (
    <div className='min-h-[90vh] px-5 sm:px-8 flex flex-col' id='projects'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-mono mt-24 md:mt-32 lg:mt-40'>
        Here are some things I&apos;ve been working on lately
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 pb-8'>
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
