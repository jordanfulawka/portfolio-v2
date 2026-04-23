import Image from 'next/image';
import Tag from './Tag';
import { Project as ProjectType } from '@/lib/types';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className=' w-128 aspect-square flex flex-col shrink-0'>
      <div className='relative flex-3'>
        <Image
          src={project.image}
          fill
          className='object-cover'
          alt='simply an image of a yote'
        />
      </div>
      <div className='flex-2 bg-surface font-mono flex flex-col justify-evenly px-5'>
        <h1 className='text-2xl'>{project.title}</h1>
        <p>{project.description}</p>
        <div className='flex gap-5'>
          {project.tags.map((tag: string) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
