import React from 'react';
import { ProjectCardProps } from '../types/types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  description,
  stackIcons,
  sourceCodeUrl,
  liveSiteUrl,
}) => {
  return (
    <div
      className="
        h-full
        min-h-[250px]
        flex flex-col
        items-start
        border border-gray-300 dark:border-gray-700
        rounded-lg shadow-sm
        bg-white dark:bg-gray-800
        p-4
      "
    >
      {/* -- Top portion: icon, title, and description -- */}
      <div className="w-full mb-2">
        {/* Icon at top */}
        <div className="text-3xl text-gray-700 dark:text-gray-100 mb-2">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 font-serif">
          {title}
        </h3>

        {/* Description */}
        <p className="text-md text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
          {description}
        </p>
      </div>

      {/* -- Bottom portion (pinned): stack icons above links -- */}
      <div className="mt-auto w-full flex flex-col gap-3">
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-3">
          {stackIcons.map((stackIcon, index) => (
            <span
              key={index}
              className="text-2xl text-gray-700 dark:text-gray-200"
            >
              {stackIcon}
            </span>
          ))}
        </div>

        {/* Links (Source & Live Demo) */}
        <div className="flex gap-4">
          <a
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Source Code
          </a>

          {liveSiteUrl && (
            <a
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-medium text-green-600 dark:text-green-400 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
