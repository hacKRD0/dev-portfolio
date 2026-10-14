import React from 'react';
import AboutHero from '../components/AboutHero';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import { Link } from 'react-router-dom';
import resumeData from '../assets/resumeData.json';
import { getStackIcons } from '../utils/getStackIcons';
import getProjectIcon from '../utils/getProjectIcon';
import CompetenciesSection from '../components/Competencies';

const { experience, projects } = resumeData;

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <AboutHero
        title="Hello! I am Keshava."
        paragraph="I'm an AI and full-stack engineer with 3+ years building production AI systems, multi-agent applications, analytics platforms, and cloud-native products. I earned a Master's in Computer Science from Arizona State University (4.0 GPA). I currently work as an AI Engineer at DaVita, designing a nephrologist-facing clinical multi-agent chatbot plus the evaluation and observability around it — work that cut evaluation cycles by 90%+ and multi-agent latency by 60%. I'm also Founding Engineer, Platform & AI at Trikona, leading architecture, CI/CD, and a multi-agent career advisor for a construction talent ecosystem. Before that I shipped a production analytics agent platform at 85SIXTY and backend systems at FlairX and Truemates. Recent projects include SREAI, an AI SRE platform for semantic code search and root-cause analysis, and Fashion Finder, a computer-vision pipeline for catalog matching. Off the clock, I'm keeping a 600+ day Duolingo streak while learning Japanese."
        imageUrl="/assets/dp.jpeg"
        linkedInUrl="https://www.linkedin.com/in/keshava-rd/"
        githubUrl="https://github.com/hacKRD0"
        leetcodeUrl="https://leetcode.com/u/dattakeshava/"
      />

      {/* Skills & Competencies Section */}
      <section className="w-full max-w-6xl px-4 py-10">
        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative inline-flex items-center bg-white dark:bg-gray-900 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Skills & Competencies
            </h2>
          </div>
        </div>
        <CompetenciesSection />
      </section>

      {/* Experience Timeline Section */}
      <section className="w-full max-w-6xl px-4 py-10">
        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative inline-flex items-center bg-white dark:bg-gray-900 px-4 gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Work Experience
            </h2>
            <Link
              to="/resume"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-3 py-1 rounded-full border border-blue-100 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              View All <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
        <Timeline experience={experience} />
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-6xl px-4 py-10">
        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative inline-flex items-center bg-white dark:bg-gray-900 px-4 gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Projects
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-3 py-1 rounded-full border border-blue-100 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              View All <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              icon={getProjectIcon(project.id)}
              title={project.title}
              description={project.description.join(' ')} // Combine description array into a single string
              stackIcons={getStackIcons(project.techStack)}
              sourceCodeUrl={project.sourceCodeUrl}
              liveSiteUrl={project.liveSiteUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
