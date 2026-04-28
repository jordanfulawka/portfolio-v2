import { jobs } from '@/lib/data';

export default function Experience() {
  return (
    <div className='min-h-[90vh] px-5 sm:px-8 font-mono' id='experience'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-mono mt-24 md:mt-32 lg:mt-40 mb-10 md:mb-16 lg:mb-20'>
        Work History
      </h1>
      {jobs.map((job) => {
        return (
          <div key={job.title} className='flex flex-col md:flex-row mb-8 md:mb-12 lg:mb-15'>
            <div className='md:flex-1 px-2 sm:p-5 pb-3 md:pb-5 leading-7 sm:leading-8 text-sm sm:text-base text-slate-400 md:text-foreground'>
              <p>{job.date}</p>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
            <div className='md:flex-3 border-4 border-background border-t-gray-700 md:border-t-background md:border-l-gray-700 p-4 sm:p-5 leading-7 sm:leading-8'>
              <h2 className='text-xl sm:text-2xl mb-2'>{job.title}</h2>
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
  );
}
