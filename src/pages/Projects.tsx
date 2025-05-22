// src/pages/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../assets/projectDetails.json';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-2">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="
                group bg-white dark:bg-gray-800 rounded-lg overflow-hidden
                shadow-sm hover:shadow-md transition-shadow duration-300
                border border-gray-100 dark:border-gray-700
                flex flex-col h-full
              "
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 flex-1 mb-4">
                  {project.shortDescription}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    to={`/projects/${project.id}`}
                    className="
                      inline-flex items-center text-blue-600 dark:text-blue-400
                      hover:text-blue-800 dark:hover:text-blue-300 font-medium
                      group-hover:underline transition-colors
                    "
                  >
                    View Project
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
