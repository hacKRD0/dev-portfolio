// src/components/ExperienceBlock.tsx

import React from 'react';
import { ExperienceItem } from '../types/types';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExperienceBlockProps {
  experience: ExperienceItem;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ experience }) => {
  return (
    <div className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
      {/* Header Section */}
      <div className="p-5 pb-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              {experience.designation}
            </h3>
            <div className="flex items-center mt-1">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 17h.01M16 13h.01M12 13h.01M8 13h.01M7 8h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2z" 
                />
              </svg>
              <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                {experience.company}
              </p>
            </div>
          </div>
          
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-full h-fit">
            {experience.dateRange}
          </span>
        </div>
      </div>

      {/* Description */}
      {experience.description && experience.description.length > 0 && (
        <div className="px-5 pb-4">
          <ul className="space-y-2">
            {experience.description.map((item, index) => (
              <li 
                key={index}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Project Link */}
      {experience.projectLink && (
        <div className="px-5 pb-5 pt-1">
          <a
            href={experience.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
          >
            <span>View Project</span>
            <FaExternalLinkAlt className="w-3 h-3 ml-1.5" />
          </a>
        </div>
      )}
      
      {/* Hover effect indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ExperienceBlock;
