'use client';

import Image from 'next/image';
import Tag from './Tag';
import { Project as ProjectType } from '@/lib/types';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { useRef } from 'react';
import { usePerformance } from '@/context/PerformanceProvider';

export default function Project({ project }: { project: ProjectType }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { performanceMode } = usePerformance();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (performanceMode) return;
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((centerX - x) / centerX) * 8;
    const shadowX = rotateY * 1.5;
    const shadowY = -rotateX * 1.5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(255,255,255,0.30), 0 20px 40px rgba(0,0,0,0.5)`;
  };

  const handleMouseLeave = () => {
    if (performanceMode) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.transition =
      'transform 0.4s ease-out, box-shadow 0.4s ease-out, border-color 0s';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.boxShadow = '0 0 20px rgba(255,255,255,0.30)';
  };

  const handleMouseEnter = () => {
    if (performanceMode) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className='w-full max-w-lg flex flex-col'
      style={{
        transformStyle: 'preserve-3d',
        transition: 'none',
        boxShadow: '0 0 20px rgba(255,255,255,0.30)',
      }}
    >
      <div className='relative h-52 sm:h-60'>
        <Image
          src={project.image}
          fill
          className='object-cover'
          alt='simply an image of a yote'
        />
      </div>
      <div className='flex-1 bg-surface font-mono flex flex-col justify-evenly px-4 sm:px-5 pt-5 pb-5'>
        <div className='flex justify-between pb-5'>
          <h1 className='text-xl sm:text-2xl'>{project.title}</h1>
          <div className='flex items-center gap-4 sm:gap-5'>
            <a href={project.github} target='_blank'>
              <FaGithub
                size={26}
                className='inline transition-transform hover:scale-125'
                color='#00d4ff'
              />
            </a>
            {project.live !== '#' ? (
              <a href={project.live} target='_blank'>
                <FiExternalLink
                  size={28}
                  className='inline transition-transform hover:scale-125'
                  color='#00d4ff'
                />
              </a>
            ) : (
              <FiExternalLink
                size={28}
                className='inline cursor-not-allowed'
                color='#6B7280'
              />
            )}
          </div>
        </div>
        <p className='text-sm sm:text-base leading-6 sm:leading-7'>
          {project.description}
        </p>
        <div className='flex gap-2 sm:gap-3 pt-5 flex-wrap'>
          {project.tags.map((tag: string) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
