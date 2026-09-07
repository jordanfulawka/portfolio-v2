import { GitHubActivity } from '@/lib/types';

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'today';
  if (days === 1) return '1 day ago';
  return `${days} days ago`;
}

function GitHubStatus({ activity }: { activity: GitHubActivity }) {
  return (
    <div className='flex flex-col sm:flex-row min-w-0'>
      {/* sm:w-fit max-w-full sm:max-w-md */}
      <div className='border border-gray-700 bg-surface px-4 py-3 text-xs sm:text-sm w-fit min-w-0 rounded-l-xl max-w-150'>
        <p className='text-muted tracking-widest text-xs mb-2'>LATEST COMMIT</p>
        <p className='font-mono'>
          <span className='text-accent'>{activity.commit.repo}</span>
          <span className='text-muted'> · {timeAgo(activity.commit.date)}</span>
          <span> · {activity.commit.message}</span>
        </p>
        <p className='text-slate-400 mt-1 pl-4 truncate'></p>
      </div>
      <div className='border border-gray-700 bg-surface px-4 py-3 text-xs sm:text-sm w-full sm:w-fit max-w-full sm:max-w-md min-w-0'>
        <p className='text-muted tracking-widest text-xs mb-2'>THIS WEEK</p>
        <p className='font-mono'>
          <span className='text-foreground'>
            {` ${activity.cumulative_total.text}`}
          </span>
        </p>
      </div>
      <div className='border border-gray-700 bg-surface px-4 py-3 text-xs sm:text-sm w-full sm:w-fit max-w-full sm:max-w-md min-w-0 rounded-r-xl'>
        <p className='text-muted tracking-widest text-xs mb-2'>DAILY AVG</p>
        <p className='font-mono'>
          <span className='text-foreground'>
            {` ${activity.daily_average.text}`}
          </span>
        </p>
      </div>
    </div>
  );
}

export default GitHubStatus;
