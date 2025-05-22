import React from 'react';
import { useNavigate } from 'react-router-dom';
import { competencies } from '../data/competenciesData';

const CompetenciesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (competencyTitle: string) => {
    navigate(`/competencies/${encodeURIComponent(competencyTitle.toLowerCase().replace(/\s+/g, '-'))}`);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {competencies.map((competency, index) => {
          const IconComponent = competency.icon;
          return (
            <div
              key={index}
              onClick={() => handleCardClick(competency.title)}
              className="flex flex-col items-center text-center border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                <IconComponent className={`w-10 h-10 ${competency.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-100">
                {competency.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-md text-gray-600 dark:text-gray-300 flex-grow">
                {competency.description}
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap justify-center gap-2 w-full">
                {competency.skills.slice(0, 4).map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
                {competency.skills.length > 4 && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
                    +{competency.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompetenciesSection;
