import { Job, Project } from './types';

export const projects: Project[] = [
  {
    title: 'FitCheck',
    description:
      'An AI-powered job application tracker that analyzes resume-to-job-description fit. Returns a match score, skill gaps, strengths, and a tailored cover letter draft using the Claude API.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB'],
    github: 'https://github.com/jordanfulawka/fitcheck-v2',
    live: 'https://fitcheck-v2.vercel.app',
    image: '/fitcheck-v2.png',
  },
  {
    title: 'Gather',
    description:
      'A real-time group chat app scaled to a distributed architecture with two independent Node.js/Socket.io servers, backed by nginx and Redis.',
    tags: [
      'Node.js/Express.js',
      'Socket.io',
      'PostgreSQL',
      'Redis',
      'nginx',
      'Docker',
    ],
    github: 'https://github.com/jordanfulawka/gather-distributed',
    live: 'http://198.211.110.134/',
    image: '/gather.png',
  },
  {
    title: 'C- Compiler',
    description:
      'Built a full compiler for C-, a simplified C dialect, covering the complete compilation pipeline from lexical analysis to assembly code generation',
    tags: ['Java  ', 'JFlex', 'Linux'],
    github: 'https://github.com/jordanfulawka/cm-compiler',
    live: '#',
    image: '/compiler.png',
  },
];

export const jobs: Job[] = [
  {
    title: 'Application Developer',
    description: [
      'Built and shipped production React interfaces streamlining order management and field reporting workflows for farmers and vendors across client environment',
      'Designed RESTful APIs and Express.js middleware to support real-time agricultural data flows, including input validation, error handling, and route-level business logic',
      'Built a notification dashboard surfacing actionable items, consolidating time-sensitive workflow alerts into a single interface across client environment',
    ],
    date: 'January 2025 - September 2025',
    company: 'Kenna',
    location: 'Mississauga Office',
  },
  {
    title: 'BI Software Developer',
    description: [
      'Authored and optimized SQL stored procedures powering business-critical reports consumed by hundreds of stakeholders and BASF representatives across Canada',
      'Designed interactive Tableau dashboards translating complex agricultural KPIs into clear, actionable visualizations',
      'Partnered with business stakeholders to translate reporting requirements into maintainable data pipelines, iterating on deliverables through feedback cycles',
    ],
    date: 'May 2024 - August 2024',
    company: 'Kenna',
    location: 'Remote',
  },
  {
    title: 'Data Reporter',
    description: [
      'Wrote and maintained SQL scripts to extract and transform operational data for reports reaching 50+ internal and client-facing stakeholders',
      'Designed intuitive report layouts that translated complex datasets into clear, actionable insights for non-technical decision-makers',
      'Performed QA on data extracts using Excel and SQL to validate accuracy before stakeholder distribution',
    ],
    date: 'May 2023 - December 2023',
    company: 'Kenna',
    location: 'Remote',
  },
];
