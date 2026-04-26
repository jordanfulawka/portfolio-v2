import { jobs } from '@/lib/data';

export default function Experience() {
  return (
    <div className='min-h-[90vh] px-8 font-mono'>
      <h1 className='text-6xl font-mono mt-40 mb-20'>Work History</h1>
      {jobs.map((job) => {
        return (
          <div key={job.title} className='flex mb-15'>
            <div className='flex-1 p-5 leading-8'>
              <p>{job.date}</p>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
            <div className='flex-3 border-4 border-background border-l-gray-700 p-5 leading-8'>
              <h2 className='text-2xl'>{job.title}</h2>
              <ul
                className='list-disc px-5 marker:text-accent
              +'
              >
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
