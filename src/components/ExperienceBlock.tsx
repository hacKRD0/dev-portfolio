// src/components/ExperienceBlock.tsx

import React from 'react';
import { ExperienceItem } from '../types/types';

interface ExperienceBlockProps {
  experience: ExperienceItem;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ experience }) => {
  return (
    <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm border-2 border-gray-300 dark:border-gray-700">
      {/* Title & Date in one row */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {experience.company} &mdash; {experience.designation}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {experience.dateRange}
        </p>
      </div>
      {experience.description && experience.description.length > 0 && (
        <ul className="list-disc list-inside mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {experience.projectLinks && experience.projectLinks.length > 0 && (
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            Projects:
          </h4>
          <ul className="list-disc list-inside text-sm text-blue-600 dark:text-blue-400">
            {experience.projectLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceBlock;
