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
        paragraph="
        I'm an AI engineer with a Master’s in Computer Science from Arizona State University, passionate about creating scalable, real-world applications. Right now, I’m working at 85Sixty on Brandgravity—a conversational analytics platform designed to make life easier for digital marketing managers. My experience spans HERE Technologies, Qualcomm, FlairX, and Trikona, where I’ve built APIs, boosted system observability, and led performance optimization efforts. I’m deeply focused on AI engineering, leveraging tools like AI SDK, Hugging Face Transformers, LoRA fine-tuning, and Retrieval-Augmented Generation (RAG) to build smart solutions. Some of my favorite projects include Fashion Finder and StockSentimentAI, where I've worked on language models, recommender systems, and end-to-end ML pipelines. On a personal note, I’m proudly maintaining a 600+ day Duolingo streak—slowly but surely learning Japanese!"
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
