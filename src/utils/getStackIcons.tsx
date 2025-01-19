// src/utils/getStackIcons.ts
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
  SiPhp,
  SiHuggingface,
} from 'react-icons/si';

export const getStackIcons = (techStack: string[]): React.ReactNode[] => {
  return techStack.map((tech) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <FaReact key={tech} />;
      case 'node':
      case 'node.js':
      case 'nodejs':
        return <FaNodeJs key={tech} />;
      case 'typescript':
        return <SiTypescript key={tech} />;
      case 'javascript':
        return <SiJavascript key={tech} />;
      case 'python':
        return <FaPython key={tech} />;
      case 'flask':
        return <SiFlask key={tech} />;
      case 'aws':
        return <FaAws key={tech} />;
      case 'gcp':
      case 'google cloud':
        return <SiGooglecloud key={tech} />;
      case 'docker':
        return <FaDocker key={tech} />;
      case 'java':
        return <FaJava key={tech} />;
      case 'git':
        return <FaGitAlt key={tech} />;
      case 'huggingface':
        return <SiHuggingface key={tech} />;
      case 'next.js':
      case 'nextjs':
        return <SiNextdotjs key={tech} />;
      case 'tailwind':
      case 'tailwindcss':
        return <SiTailwindcss key={tech} />;
      case 'postgresql':
        return <SiPostgresql key={tech} />;
      case 'mongodb':
        return <SiMongodb key={tech} />;
      case 'mysql':
        return <SiMysql key={tech} />;
      case 'kafka':
        return <SiApachekafka key={tech} />;
      case 'spring boot':
      case 'springboot':
        return <SiSpringboot key={tech} />;
      case 'php':
        return <SiPhp key={tech} />;
      default:
        return null; // Handle unknown tech stack entries gracefully
    }
  });
};
