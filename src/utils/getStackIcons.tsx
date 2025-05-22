// src/utils/getStackIcons.tsx
import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaJava,
  FaPython,
  FaGitAlt,
  FaLinkedin,
  FaServer,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJira,
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
  SiCloudflare,
  SiCloudflareworkers,
  SiCloudflarepages,
  SiGo,
  SiExpress,
  SiGin,
  SiRedux,
  SiVite,
  SiFirebase,
  SiClerk,
  SiCplusplus,
  SiSequelize,
  SiGithubactions,
  SiPostman,
  SiMaildotru
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

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
      case 'cloudflare':
        return <SiCloudflare key={tech} />;
      case 'cloudflare-workers':
        return <SiCloudflareworkers key={tech} />;
      case 'cloudflare-pages':
        return <SiCloudflarepages key={tech} />;
      // Go and related
      case 'go':
      case 'golang':
        return <SiGo key={tech} />;
      case 'express':
      case 'express.js':
      case 'expressjs':
        return <SiExpress key={tech} />;
      case 'gin':
        return <SiGin key={tech} />;
      // State management
      case 'redux':
      case 'redux toolkit':
      case 'rtk':
      case 'rtk query':
        return <SiRedux key={tech} />;
      case 'mailjet':
        return <SiMaildotru key={tech} />;
      case 'linkedin oauth':
        return <FaLinkedin key={tech} />;
      // Build tools
      case 'vite':
        return <SiVite key={tech} />;
      case 'sequelize':
      case 'sequelize orm':
        return <SiSequelize key={tech} />;
      // Authentication services
      case 'firebase':
        return <SiFirebase key={tech} />;
      case 'clerk':
        return <SiClerk key={tech} />;
      case 'ec2':
        return <FaServer key={tech} />;
      // Programming Languages
      case 'c':
      case 'c++':
      case 'c/c++':
        return <SiCplusplus key={tech} />;
      // Web Technologies
      case 'html':
      case 'html5':
      case 'html/css':
        return <FaHtml5 key={tech} />;
      case 'css':
      case 'css3':
        return <FaCss3Alt key={tech} />;
      // Tools
      case 'github actions':
        return <SiGithubactions key={tech} />;
      case 'jira':
        return <FaJira key={tech} />;
      case 'postman':
        return <SiPostman key={tech} />;
      case 'vscode':
      case 'visual studio code':
        return <VscVscode key={tech} />;
      // Default fallback
      default:
        console.warn(`No icon found for technology: ${tech}`);
        return <FaCode key={tech} title={tech} />;
    }
  });
};
