import React from 'react';
import AboutHero from '../components/AboutHero';
import ProjectCard from '../components/ProjectCard';
import Timeline from '../components/Timeline';
import { Link } from 'react-router-dom';
import resumeData from '../assets/resumeData.json';
import { getStackIcons } from '../utils/getStackIcons';
import getProjectIcon from '../utils/getProjectIcon';

const { experience, projects } = resumeData;

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHero
        title="Hello! I'm Keshava, a developer based in Phoenix"
        paragraph="
        I’m a software developer with a passion for creating innovative solutions. 
        Whether it's tinkering with backend systems, exploring data science projects, or creating full-stack solutions, I get really excited about building things that are both scalable and innovative. 
        I enjoy experimenting with different programming languages and cloud technologies, and I find working on AI and data analysis projects particularly fascinating. On top of that, I’m passionate about cloud infrastructure and how it all comes together to solve complex problems.!."
        imageUrl="/assets/profile.jpeg"
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
            to="/resume"
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
              icon={getProjectIcon(project.id)}
              title={project.title}
              description={project.description.join(' ')} // Combine description array into a single string
              stackIcons={getStackIcons(project.techStack)}
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
