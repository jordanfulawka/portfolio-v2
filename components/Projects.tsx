import { projects } from '@/lib/data';
import Project from './Project';

export default function Projects() {
  return (
    <div className='min-h-[90vh] px-8 flex flex-col' id='projects'>
      <h1 className='text-4xl font-mono mt-40'>
        Here are some things I&apos;ve been working on lately
      </h1>
      <div className='flex gap-3 py-4 flex-wrap mt-8 justify-evenly'>
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
