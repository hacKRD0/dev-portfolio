import React from 'react';
import { EducationItem } from '../types/types';
import { FaUniversity } from 'react-icons/fa';

interface EducationBlockProps {
  education: EducationItem;
}

const EducationBlock: React.FC<EducationBlockProps> = ({ education }) => {
  return (
    <div className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Degree and Date */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 p-5 pb-3">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            {education.degree}
          </h3>
          <div className="flex items-center mt-1">
            <FaUniversity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
            <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 line-clamp-1">
              {education.institution}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:items-end gap-2">
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-full whitespace-nowrap">
            {education.dateRange}
          </span>
          <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
              GPA: <span className="font-bold">{education.gpa}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      {education.description && education.description.length > 0 && (
        <div className="px-5 pb-5 pt-2">
          <ul className="space-y-2">
            {education.description.map((item, index) => (
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
      
      {/* Hover effect indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default EducationBlock;
