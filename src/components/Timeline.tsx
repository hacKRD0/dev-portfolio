import React from 'react';
import { ExperienceItem } from '../types/types.ts';

interface TimelineProps {
  experience: ExperienceItem[]; // an array of timeline entries
}

const Timeline: React.FC<TimelineProps> = ({ experience }) => {
  return (
    <div className="relative mt-8 ml-4">
      {/* Vertical line along the left side */}
      <div className="absolute left-4 top-0 w-px h-full bg-gray-200 dark:bg-gray-600" />

      {/* Map each entry */}
      {experience.map((item, index) => (
        <div key={index} className="relative flex items-start mb-12">
          {/* Circle indicator */}
          <div className="flex items-center justify-center w-8 h-8 mr-6 bg-blue-500 text-white rounded-full flex-shrink-0 z-10">
            {/* You can replace text with an icon or just keep it blank */}
            {index + 1}
          </div>

          {/* Entry details */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {item.designation}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {item.company}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 italic">
              {item.dateRange}
            </span>

            {/* 2-line description */}
            {item.description.length > 0 && (
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {item.description.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
