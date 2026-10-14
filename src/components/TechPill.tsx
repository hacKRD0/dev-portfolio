import React from 'react';
import { getStackIcon } from '../utils/getStackIcons';

interface TechPillProps {
  tech: string;
  size?: 'sm' | 'md';
  className?: string;
}

const TechPill: React.FC<TechPillProps> = ({ tech, size = 'sm', className = '' }) => {
  const Icon = getStackIcon(tech);
  const sizing =
    size === 'md'
      ? 'px-3 py-1.5 text-sm gap-2'
      : 'px-2.5 py-1 text-xs gap-1.5';
  const iconClass = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';

  return (
    <span
      title={tech}
      className={`inline-flex items-center rounded-full border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 font-medium text-gray-700 dark:text-gray-300 ${sizing} ${className}`}
    >
      {Icon ? <Icon className={`${iconClass} shrink-0`} aria-hidden /> : null}
      <span>{tech}</span>
    </span>
  );
};

export default TechPill;
