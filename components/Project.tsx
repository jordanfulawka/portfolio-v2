import Image from 'next/image';
import Tag from './Tag';
import { Project as ProjectType } from '@/lib/types';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className='w-xl flex flex-col shrink-0'>
      <div className='relative h-85'>
        <Image
          src={project.image}
          fill
          // className='object-cover'
          alt='simply an image of a yote'
        />
      </div>
      <div className='flex-1 bg-surface font-mono flex flex-col justify-evenly px-5 pt-5 pb-5'>
        <div className='flex justify-between pb-5'>
          <h1 className='text-2xl'>{project.title}</h1>
          <div className='flex items-center gap-5'>
            <a href={project.github} target='_blank'>
              <FaGithub
                size={30}
                className='inline transition-transform hover:scale-125'
                color='#00d4ff'
              />
            </a>
            {project.live !== '#' ? (
              <a href={project.live} target='_blank'>
                <FiExternalLink
                  size={32}
                  className='inline transition-transform hover:scale-125'
                  color='#00d4ff'
                />
              </a>
            ) : (
              <FiExternalLink
                size={32}
                className='inline cursor-not-allowed'
                color='#6B7280'
              />
            )}
          </div>
        </div>
        <p>{project.description}</p>
        <div className='flex gap-5 pt-5 flex-wrap'>
          {project.tags.map((tag: string) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
