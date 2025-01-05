import React from 'react';
import { EducationItem } from '../types/types';

interface EducationBlockProps {
  education: EducationItem;
}

const EducationBlock: React.FC<EducationBlockProps> = ({ education }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm border-2 border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {education.degree}
        </h3>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {education.dateRange}
        </span>
      </div>
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {education.institution}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 italic">
          GPA: {education.gpa}
        </p>
      </div>
      {education.description && education.description.length > 0 && (
        <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300">
          {education.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationBlock;
