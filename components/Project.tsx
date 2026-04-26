import Image from 'next/image';
import Tag from './Tag';
import { Project as ProjectType } from '@/lib/types';
import { FaGithub, FaGithubAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className='w-lg aspect-square flex flex-col shrink-0'>
      <div className='relative flex-3'>
        <Image
          src={project.image}
          fill
          // className='object-cover'
          alt='simply an image of a yote'
        />
      </div>
      <div className='flex-2 bg-surface font-mono flex flex-col justify-evenly px-5'>
        <div className='flex justify-between'>
          <h1 className='text-2xl'>{project.title}</h1>
          <div className='flex items-center gap-5'>
            <FaGithub size={30} />
            <FiExternalLink size={32} />
          </div>
        </div>
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
