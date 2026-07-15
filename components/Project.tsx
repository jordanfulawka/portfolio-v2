import Image from 'next/image';
import Tag from './Tag';
import { Project as ProjectType } from '@/lib/types';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className='w-full max-w-md flex flex-col border border-gray-700 shadow-[0_8px_24px_rgba(125,211,252,0)] hover:border-accent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(125,211,252,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-out rounded-lg overflow-hidden'>
      <div className='bg-[#0a0a0a] flex p-3 gap-2'>
        <div className='w-3 h-3 bg-[#ef4444] rounded-full' />
        <div className='w-3 h-3 bg-[#eab308] rounded-full' />
        <div className='w-3 h-3 bg-[#22c55e] rounded-full' />
      </div>
      <div className='relative h-40 sm:h-48'>
        <Image
          src={project.image}
          fill
          className='object-cover'
          alt='simply an image of a yote'
        />
      </div>
      <div className='flex-1 bg-surface font-mono flex flex-col justify-evenly px-4 sm:px-5 pt-4 pb-4'>
        <div className='flex justify-between pb-4'>
          <h1 className='text-lg sm:text-xl'>{project.title}</h1>
          <div className='flex items-center gap-3 sm:gap-4'>
            <a href={project.github} target='_blank'>
              <FaGithub
                size={22}
                className='inline transition-transform hover:scale-125'
                color='#38bdf8'
              />
            </a>
            {project.live !== '#' ? (
              <a href={project.live} target='_blank'>
                <FiExternalLink
                  size={24}
                  className='inline transition-transform hover:scale-125'
                  color='#38bdf8'
                />
              </a>
            ) : (
              <FiExternalLink
                size={24}
                className='inline cursor-not-allowed'
                color='#6B7280'
              />
            )}
          </div>
        </div>
        <p className='text-sm sm:text-base leading-6 sm:leading-7'>
          {project.description}
        </p>
        <div className='flex gap-2 sm:gap-3 pt-4 flex-wrap'>
          {project.tags.map((tag: string) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
