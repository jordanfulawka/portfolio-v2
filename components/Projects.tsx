import { projects } from '@/lib/data';
import Project from './Project';

export default function Projects() {
  return (
    <div className='min-h-screen px-8 flex flex-col' id='work'>
      <h1 className='text-6xl font-mono mt-40'>Selected Works</h1>
      <div className='flex gap-3 py-4 flex-wrap mt-8 justify-evenly'>
        {projects.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
