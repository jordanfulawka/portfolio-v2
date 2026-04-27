import { Job, Project } from './types';

export const projects: Project[] = [
  {
    title: 'FitCheck',
    description:
      'An AI-powered job application tracker that analyzes resume-to-job-description fit. Returns a match score, skill gaps, strengths, and a tailored cover letter draft using the Claude API.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    github: 'https://github.com/jordanfulawka/fitcheck',
    live: 'https://fitcheck-amber.vercel.app/',
    image: '/fitcheck.png',
  },
  {
    title: 'Full Stack Chat Application',
    description:
      'A full-stack real-time chat application featuring user authentication, profile management, and live messaging with image support. A responsive front-end built with React and Zustand, and Node/Express for the backend with Socket.IO for real-time communication',
    tags: ['React', 'Node.js/Express.js', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/jordanfulawka/react-chat-app',
    live: 'https://react-chat-app-exk4.onrender.com/',
    image: '/jchat.png',
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
  // {
  //   title: 'CIPHER_VAULT',
  //   description:
  //     'End-to-end encrypted file storage system with zero-knowledge proof authentication.',
  //   tags: ['TypeScript', 'WebCrypto', 'Go'],
  //   href: '#',
  //   image: '/weave.png',
  // },
  // {
  //   title: 'ECHO_RELAY',
  //   description:
  //     'Low-latency pub/sub message broker handling 1M+ events per second with guaranteed delivery.',
  //   tags: ['Rust', 'gRPC', 'Docker'],
  //   href: '#',
  //   image: '/weave.png',
  // },
];

export const jobs: Job[] = [
  {
    title: 'Application Developer',
    description: [
      'Built responsive, production-grade front-end interfaces in React that improved operational efficiency for farmers and vendors by approximately 20%',
      'Designed and implemented RESTful APIs and server-side logic using Node.js and Express.js to support real-time agricultural workflows',
      'Configured AWS CloudFormation templates to provision and manage ECS infrastructure, enabling consistent deployment across client environments',
    ],
    date: 'January 2025 - September 2025',
    company: 'Kenna',
    location: 'Mississauga Office',
  },
  {
    title: 'BI Software Developer',
    description: [
      'Developed and optimized SQL procedures powering business reports consumed by hundreds of stakeholders and BASF representatives across Canada',
      'Designed and built interactive Tableau dashboards to visualize key performance metrics, enabling data-driven decision-making at scale',
      'Collaborated with business stakeholders to translate reporting requirements into reliable, maintainable data pipelines',
    ],
    date: 'May 2024 - August 2024',
    company: 'Kenna',
    location: 'Remote',
  },
  {
    title: 'Data Reporter',
    description: [
      'Wrote and maintained SQL scripts to extract and surface data for reports distributed to hundreds of internal and client-facing stakeholders',
      'Designed clear, intuitive report layouts that distilled complex datasets into actionable insights for non-technical audiences',
      'Worked directly with stakeholders to gather requirements and iterate on deliverables, ensuring timely and accurate delivery',
    ],
    date: 'May 2023 - December 2023',
    company: 'Kenna',
    location: 'Remote',
  },
];
