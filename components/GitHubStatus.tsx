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
    <div className='flex flex-col sm:flex-row gap-3 min-w-0'>
      <div className='border border-gray-700 bg-surface px-4 py-3 text-xs sm:text-sm w-full sm:w-fit max-w-full sm:max-w-md min-w-0'>
        <p className='text-muted tracking-widest text-xs mb-2'>LATEST COMMIT</p>
        <p>
          <span className='text-lime-500'>❯ </span>
          <span className='text-accent'>jordanfulawka/</span>
          <span className='text-foreground'>{activity.commit.repo}</span>
          <span className='text-muted'> · {timeAgo(activity.commit.date)}</span>
        </p>
        <p className='text-slate-400 mt-1 pl-4 truncate'>
          {activity.commit.message}
        </p>
      </div>
      <div className='border border-gray-700 bg-surface px-4 py-3 text-xs sm:text-sm w-full sm:w-fit max-w-full sm:max-w-md min-w-0'>
        <p className='text-muted tracking-widest text-xs mb-2'>
          CODING ACTIVITY
        </p>
        <p>
          <span className='text-lime-500'>❯ </span>
          <span className='text-muted'>this week</span>
          <span className='text-foreground'>
            {` ${activity.cumulative_total.text}`}
          </span>
        </p>
        <p className='mt-1'>
          <span className='text-lime-500'>❯ </span>
          <span className='text-muted'>daily avg</span>
          <span className='text-foreground'>
            {` ${activity.daily_average.text}`}
          </span>
        </p>
      </div>
    </div>
  );
}

export default GitHubStatus;
