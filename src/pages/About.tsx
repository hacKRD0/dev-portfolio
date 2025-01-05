import React from 'react';
import AboutHero from '../components/AboutHero';
import profilepic from '../assets/profile.jpeg';
import { FaGithub } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import { Link } from 'react-router-dom';
import resumeData from '../data/ResumeData';

const { experience, projects } = resumeData;

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHero
        title="Hello! I'm Keshava, a developer based in Phoenix"
        paragraph="I’m a passionate software engineer with a focus on building meaningful digital experiences.
                   My journey started with a keen interest in how websites worked under the hood, and
                   it quickly led me to explore full-stack development. Over the years, I've honed my
                   skills in JavaScript, React, and Node.js while always being eager to learn the next
                   cutting-edge technology."
        imageUrl={profilepic}
        linkedInUrl="https://www.linkedin.com/in/keshava-rd/"
        githubUrl="https://github.com/hacKRD0"
      />

      {/* Experience Timeline Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Work Experience
        </h2>
        <Timeline experience={experience} />

        {/* "View Details" link -> /experience */}
        <div className="mt-2 text-left">
          <Link
            to="/experience"
            className="text-gray-800 dark:text-gray-100 hover:underline"
          >
            View details
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              icon={<FaGithub />}
              title={project.title}
              description={project.description.join(' ')} // Combine description array into a single string
              stackIcons={project.stackIcons}
              sourceCodeUrl={project.sourceCodeUrl}
              liveSiteUrl={project.liveSiteUrl}
            />
          ))}
        </div>

        {/* "View Details" link -> /projects */}
        <div className="mt-4 text-left">
          <Link
            to="/projects"
            className="text-gray-800 dark:text-gray-100 hover:underline"
          >
            View details
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
