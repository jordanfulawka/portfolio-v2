import { jobs } from '@/lib/data';
import TransitionWrapper from './TransitionWrapper';

export default function Experience() {
  return (
    <TransitionWrapper>
      <div className='min-h-[90vh] max-w-7xl mx-auto px-5 sm:px-8 font-mono' id='experience'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-mono mt-16 md:mt-20 lg:mt-24 mb-8 md:mb-10 lg:mb-12'>
          Work History
        </h1>
        {jobs.map((job) => {
          return (
            <div
              key={job.title}
              className='flex flex-col md:flex-row mb-6 md:mb-8 lg:mb-10'
            >
              <div className='md:flex-1 px-2 sm:p-5 pb-3 md:pb-5 leading-6 sm:leading-7 text-sm sm:text-base text-slate-400 md:text-foreground'>
                <p>{job.date}</p>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
              <div className='md:flex-3 border-4 border-background border-t-gray-700 md:border-t-background md:border-l-gray-700 p-4 sm:p-5 leading-6 sm:leading-7'>
                <h2 className='text-lg sm:text-xl mb-2'>{job.title}</h2>
                <ul className='list-disc px-4 sm:px-5 marker:text-accent text-sm sm:text-base space-y-1'>
                  {job.description.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </TransitionWrapper>
  );
}
