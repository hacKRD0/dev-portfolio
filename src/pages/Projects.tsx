// src/pages/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/types';
import samplepic from '../assets/profile.jpeg';
import samplepic2 from '../assets/profile2.jpeg';

// Example dummy data:
export const projectsData: Project[] = [
  {
    id: 'shopify-plugin',
    title: 'Shopify Plugin',
    shortDescription:
      'An advanced plugin for Shopify that streamlines checkout experiences.',
    images: [samplepic, samplepic2, samplepic, samplepic2],
    paragraphs: [
      'Implemented a robust Shopify plugin for merchants, focusing on performance...',
      'Improved the merchant onboarding flow, reducing churn by 40%...',
    ],
    techStack: ['React', 'Shopify API', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/shopify-plugin',
    liveSiteUrl: 'https://yourshopifyplugin.com',
  },
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    shortDescription: 'My personal website showcasing projects and blog posts.',
    images: [],
    paragraphs: [
      'Designed and developed a responsive personal website...',
      'Learned advanced CSS techniques, SEO optimization...',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/portfolio-site',
    liveSiteUrl: 'https://username.github.io/portfolio-site',
  },
  // ... more projects
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        <ul className="space-y-4">
          {projectsData.map((project) => (
            <li
              key={project.id}
              className="
                p-4 bg-white dark:bg-gray-800 rounded-md shadow-md border 
                border-gray-200 dark:border-gray-700
                hover:shadow-lg transition-shadow
              "
            >
              {/* Title + short description */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                {/* Link to details page */}
                <Link
                  to={`/projects/${project.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  View Details
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {project.shortDescription}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
