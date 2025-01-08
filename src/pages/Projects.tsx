// src/pages/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../assets/projectDetails.json';

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
