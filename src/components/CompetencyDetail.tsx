import React from 'react';
import { Competency } from '../data/competenciesData';

interface CompetencyDetailProps {
  competency: Competency;
}

const CompetencyDetail: React.FC<CompetencyDetailProps> = ({ competency }) => {
  const IconComponent = competency.icon;
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className={`p-4 ${competency.iconColor} bg-opacity-10 rounded-full`}>
            <IconComponent className="w-16 h-16" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {competency.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {competency.description}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Key Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {competency.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-8 mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
          Experience & Achievements
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {competency.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetencyDetail;
