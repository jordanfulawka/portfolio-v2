import { projects } from '@/lib/data';
import Project from './Project';

export default function Projects() {
  return (
    <div className='min-h-screen px-8 flex flex-col justify-start'>
      <h1 className='text-6xl font-mono mt-20'>Selected Works</h1>
      <div className='flex gap-5 overflow-x-auto py-4 no-scrollbar mt-8'>
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
