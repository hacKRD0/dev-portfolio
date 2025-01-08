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
        title="Hello! I am Keshava."
        paragraph="
        Hello! I’m Keshava Ranga Datta Rajavaram, a passionate full-stack developer currently pursuing my Master’s in Computer Science at Arizona State University. I love building applications that seamlessly blend front-end design with robust back-end functionality, and lately, I’ve been diving into leveraging AI to create innovative solutions.
        Throughout my journey, I’ve had the opportunity to intern at companies like Truemates, HERE Technologies, and Qualcomm, where I honed my skills in backend development, data science, and cloud technologies. I enjoy tackling complex challenges, whether it's developing scalable APIs, designing responsive user interfaces, or integrating AI models to enhance user experiences.
        When I’m not coding, I follow the Indian stock market and explore current and historical geopolitics. These interests help me stay curious and continuously learn about the world around me."
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
