import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaJava,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiGooglecloud,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiApachekafka,
  SiSpringboot,
} from 'react-icons/si';

const resumeData = {
  education: [
    {
      id: 'edu-1',
      institution: 'Arizona State University',
      degree: 'M.Sc Computer Science',
      dateRange: 'Aug 2023 - Present',
      gpa: '4.00/4.00',
      description: ['Overall GPA: 4.00/4.00'],
    },
    {
      id: 'edu-2',
      institution: 'Birla Institute of Technology and Science, Pilani, India',
      degree: 'B.E Electronics and Instrumentation',
      dateRange: 'Aug 2019 - Jun 2023',
      gpa: '8.35/10',
      description: ['Overall GPA: 8.35/10'],
    },
  ],
  experience: [
    {
      id: 'exp-1',
      designation: 'Software Engineer Intern',
      company: 'Truemates',
      dateRange: 'Jun 2024 - Present',
      description: [
        'Engineered and deployed backend modules using Express.js, scaling server-side applications to handle 10,000 users and reducing response time by 40%.',
        'Managed deployment processes for two services on Google App Engine with Unix sockets, using CI/CD pipelines on GitHub to automate staging and production deployments.',
        'Orchestrated PostgreSQL database migrations, achieving 100% data integrity and reducing downtime by 40%.',
        'Implemented webhooks to handle subscription renewals for App Store and Google Play subscriptions, eliminating reliance on third-party tools and reducing 100% transaction fees.',
      ],
    },
    {
      id: 'exp-2',
      designation: 'Data Science Intern',
      company: 'HERE Technologies',
      dateRange: 'Jan 2023 - Jun 2023',
      description: [
        'Analyzed data to pinpoint significant EV behavior locations from 3+ vast location datasets.',
        'Conducted data quality assurance and corrected inconsistencies, improving data accuracy by 25%.',
        'Launched AWS RDS Postgres instances, conducted query performance analysis and optimization, improving response time by 35%.',
        'Simulated a comprehensive 6-month EV charging station dataset, showcasing data versatility and scalability.',
      ],
    },
    {
      id: 'exp-3',
      designation: 'Interim Engineering Intern',
      company: 'Qualcomm',
      dateRange: 'May 2022 - Jul 2022',
      description: [
        'Engineered an automated chipset design tracing and validation system, reducing manual validation time by 50%.',
        'Introduced a source-to-target path-tracing algorithm with pin path validation at every step, increasing error detection rate by 40%.',
        'Crafted a GUI interface enabling rapid identification of errors and discrepancies, improving debugging speed by 35%.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Facely',
      dateRange: 'Mar 2024 - May 2024',
      description: [
        'Built a face recognition Flask app on AWS infrastructure, employing EC2 instances for the web tier to handle incoming requests and a scalable app tier to process them efficiently.',
        'Leveraged S3 buckets to store input and output data and SQS for communication between the web and app tiers, implementing scaling logic to manage concurrent requests effectively.',
        'Incorporated robust error-handling mechanisms to prevent duplicate request processing.',
      ],
      stackIcons: [
        <SiFlask key="flask" />,
        <FaPython key="python" />,
        <FaAws key="aws" />,
      ],
      sourceCodeUrl: 'https://github.com',
      liveSiteUrl: '',
    },
    {
      id: 'proj-2',
      title: 'Video-Recog',
      dateRange: 'May 2024 - Aug 2024',
      description: [
        'Developed a Next.js application enabling users to upload video files for facial recognition.',
        'Designed a serverless architecture utilizing AWS S3, Lambda, and custom face recognition models.',
        'Implemented Lambda function triggers to process videos, extract frames, and perform facial analysis.',
      ],
      stackIcons: [
        <SiNextdotjs key="nextjs" />,
        <FaAws key="aws" />,
        <FaGitAlt key="git" />,
        <FaPython key="python" />,
      ],
      sourceCodeUrl: 'https://github.com',
      liveSiteUrl: '',
    },
    {
      id: 'proj-3',
      title: 'Smart Building Monitoring',
      dateRange: 'Oct 2023 - Dec 2023',
      description: [
        'Designed and implemented a distributed database with advanced fragmentation and replication strategies.',
        'Achieved a 35% improvement in query processing speed through optimized design.',
        'Integrated distributed transactions using Python, PostgreSQL, and MongoDB tools.',
      ],
      stackIcons: [
        <FaPython key="python" />,
        <SiPostgresql key="postgresql" />,
        <SiMongodb key="mongodb" />,
      ],
      sourceCodeUrl: 'https://github.com',
      liveSiteUrl: '',
    },
    {
      id: 'proj-4',
      title: 'MovieBooker',
      dateRange: 'Dec 2024 - Feb 2024',
      description: [
        'Developed a Spring Boot backend for a movie booking system using a microservices architecture.',
        'Employed MySQL for data storage and Kafka for inter-service communication.',
        'Utilized Docker for containerization and AWS for deployment.',
      ],
      stackIcons: [
        <SiSpringboot key="springboot" />,
        <SiMysql key="mysql" />,
        <SiApachekafka key="kafka" />,
        <FaDocker key="docker" />,
        <FaAws key="aws" />,
      ],
      sourceCodeUrl: 'https://github.com',
      liveSiteUrl: '',
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      dateIssued: 'Aug 2024',
      credentialUrl:
        'https://www.credly.com/badges/60af99bd-d35a-4df0-859f-a0e25c81499d/linked_in_profile',
    },
  ],
};

export default resumeData;
