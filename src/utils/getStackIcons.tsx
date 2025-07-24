// src/utils/getStackIcons.tsx
import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaJava,
  FaPython,
  FaEye,
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
  SiPandas,
  SiPytorch,
  SiOpenai,
  SiFirebase,
  SiClerk,
  SiCplusplus,
  SiSequelize,
  SiGithubactions,
  SiPostman,
  SiMaildotru,
  SiMeta
} from 'react-icons/si';
import { PiGearFine } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

export const getStackIcons = (techStack: string[]): React.ReactNode[] => {
  return techStack.map((tech) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <FaReact key={tech} title={tech} />;
      case 'node':
      case 'node.js':
      case 'nodejs':
        return <FaNodeJs key={tech} title={tech} />;
      case 'typescript':
        return <SiTypescript key={tech} title={tech} />;
      case 'javascript':
        return <SiJavascript key={tech} title={tech} />;
      case 'python':
        return <FaPython key={tech} title={tech} />;
      case 'pandas':
        return <SiPandas key={tech} title={tech} />;
      case 'pytorch':
      case 'py torch':
        return <SiPytorch key={tech} title={tech} />;
      case 'flask':
        return <SiFlask key={tech} title={tech} />;
      case 'aws':
        return <FaAws key={tech} title={tech} />;
      case 'gcp':
      case 'google cloud':
        return <SiGooglecloud key={tech} title={tech} />;
      case 'docker':
        return <FaDocker key={tech} title={tech} />;
      case 'java':
        return <FaJava key={tech} title={tech} />;
      case 'git':
        return <FaGitAlt key={tech} title={tech} />;
      case 'huggingface':
        return <SiHuggingface key={tech} title={tech} />;
      case 'next.js':
      case 'nextjs':
        return <SiNextdotjs key={tech} title={tech} />;
      case 'tailwind':
      case 'tailwindcss':
        return <SiTailwindcss key={tech} title={tech} />;
      case 'postgresql':
        return <SiPostgresql key={tech} title={tech} />;
      case 'mongodb':
        return <SiMongodb key={tech} title={tech} />;
      case 'mysql':
        return <SiMysql key={tech} title={tech} />;
      case 'kafka':
        return <SiApachekafka key={tech} title={tech} />;
      case 'spring boot':
      case 'springboot':
        return <SiSpringboot key={tech} title={tech} />;
      case 'php':
        return <SiPhp key={tech} title={tech} />;
      case 'cloudflare':
        return <SiCloudflare key={tech} title={tech} />;
      case 'cloudflare-workers':
        return <SiCloudflareworkers key={tech} title={tech} />;
      case 'cloudflare-pages':
        return <SiCloudflarepages key={tech} title={tech} />;
      // Computer Vision Models
      case 'yolo':
      case 'yolov5':
      case 'yolov6':
      case 'yolov7':
      case 'yolov8':
        return <FaEye key={tech} title={tech} />;
      case 'clip':
        return <SiOpenai key={tech} title={tech} />;
      // Go and related
      case 'go':
      case 'golang':
        return <SiGo key={tech} title={tech} />;
      case 'express':
      case 'express.js':
      case 'expressjs':
        return <SiExpress key={tech} title={tech} />;
      case 'gin':
        return <SiGin key={tech} title={tech} />;
      // State management
      case 'redux':
      case 'redux toolkit':
      case 'rtk':
      case 'rtk query':
        return <SiRedux key={tech} title={tech} />;
      case 'mailjet':
        return <SiMaildotru key={tech} title={tech} />;
      case 'linkedin oauth':
        return <FaLinkedin key={tech} title={tech} />;
      // Build tools
      case 'vite':
        return <SiVite key={tech} title={tech} />;
      case 'sequelize':
      case 'sequelize orm':
        return <SiSequelize key={tech} title={tech} />;
      // Authentication services
      case 'firebase':
        return <SiFirebase key={tech} title={tech} />;
      case 'clerk':
        return <SiClerk key={tech} title={tech} />;
      case 'ec2':
        return <FaServer key={tech} title={tech} />;
      // Programming Languages
      case 'c':
      case 'c++':
      case 'c/c++':
        return <SiCplusplus key={tech} title={tech} />;
      // Web Technologies
      case 'html':
      case 'html5':
      case 'html/css':
        return <FaHtml5 key={tech} title={tech} />;
      case 'css':
      case 'css3':
        return <FaCss3Alt key={tech} title={tech} />;
      // Tools
      case 'github actions':
        return <SiGithubactions key={tech} title={tech} />;
      case 'jira':
        return <FaJira key={tech} title={tech} />;
      case 'postman':
        return <SiPostman key={tech} title={tech} />;
      case 'vscode':
      case 'visual studio code':
        return <VscVscode key={tech} title={tech} />;
      // Default fallback
      case 'meta':
      case 'faiss':
        return <SiMeta key={tech} title={tech} />;
      case 'finetune':
      case 'lora':
        return <PiGearFine key={tech} title={tech} />;
      default:
        console.warn(`No icon found for technology: ${tech}`);
        return <FaCode key={tech} title={tech} />;
    }
  });
};
