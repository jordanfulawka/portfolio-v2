export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
};

export type Job = {
  title: string;
  description: string[];
  date: string;
  company: string;
  location: string;
};
