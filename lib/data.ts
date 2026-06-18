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
    live: 'https://gather-chat.dev',
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
  {
    title: 'Weave',
    description:
      'A real-time collaborative notes app with Google-Docs style multi-user editing (React, Tiptap, Yjs/Hocuspocus) and an interactive graph view for navigating linked documents, backed by Express and PostgreSQL',
    tags: ['Vite', 'Hocuspocus', 'Yjs', 'PostgreSQL', 'React Flow', 'Tiptap'],
    github: 'https://github.com/jordanfulawka/weave',
    live: 'https://weavenotes.dev/',
    image: '/weaveapp.png',
  },
];

export const jobs: Job[] = [
  {
    title: 'Application Developer',
    description: [
      'Shipped production React interfaces on the public-facing BASF AgPro platform, streamlining order management and field reporting workflows for growers and vendors',
      'Built a notification dashboard consolidating time-sensitive, pending alerts into a single interface for three distinct user types: growers, sales reps, and internal staff - surfacing only what each role needed',
      'Developed Node.js/Express APIs backed by stored procedures in Microsoft SQL Server, with input validation, error handling, and route-level business logic for agricultural data workflows',
      'Wrote Mocha test suites covering frontend interface behavior to catch regressions before release',
    ],
    date: 'January 2025 - September 2025',
    company: 'Kenna',
    location: 'Mississauga Office',
  },
  {
    title: 'BI Software Developer',
    description: [
      'Authored and optimized SQL stored procedures powering business-critical reports used by hundreds of BASF representatives across Canada',
      'Built interactive Tableau dashboards that turned complex agricultural KPIs into visualizations business teams could act on directly',
      'Partnered with stakeholders to translate reporting requirements into maintainable data pipelines, iterating on deliverables through feedback cycles',
    ],
    date: 'May 2024 - August 2024',
    company: 'Kenna',
    location: 'Remote',
  },
  {
    title: 'Data Reporter',
    description: [
      'Wrote and maintained SQL scripts to extract and transform operational data for reports reaching 50+ internal and client-facing stakeholders',
      'Performed QA on data extracts using Excel and SQL to validate accuracy before stakeholder distribution',
    ],
    date: 'May 2023 - December 2023',
    company: 'Kenna',
    location: 'Remote',
  },
];
