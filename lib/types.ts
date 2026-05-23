export type GitHubCommit = {
  date: string;
  languages: Record<string, number>;
  message: string;
  repo: string;
};

export type GitHubActivity = {
  status: string;
  top3: Record<string, string>;
  commit: GitHubCommit;
  cumulative_total: Record<string, string | number>;
  daily_average: Record<string, string | number>;
  totalCommits: number;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
};

export type Job = {
  title: string;
  description: string[];
  date: string;
  company: string;
  location: string;
};
