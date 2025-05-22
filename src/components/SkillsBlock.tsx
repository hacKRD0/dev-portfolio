import React from 'react';
import { SkillSet } from '../types/types';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

interface SkillsBlockProps {
  skills: SkillSet;
}

const SkillsBlock: React.FC<SkillsBlockProps> = ({ skills }) => {
  // Skill category component to reduce repetition
  const SkillCategory = ({ 
    title, 
    items, 
    icon 
  }: { 
    title: string; 
    items: string[]; 
    icon: React.ReactNode 
  }) => (
    items?.length > 0 && (
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 last:mb-0">
        <div className="flex items-center sm:w-48 flex-shrink-0">
          <div className="flex items-center text-blue-600 dark:text-blue-400 mr-2">
            {icon}
          </div>
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
            {title}
          </h3>
        </div>
        <div className="flex-1 flex flex-wrap gap-2">
          {items.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 
                         hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300
                         transition-colors duration-200 border border-gray-200 dark:border-gray-600 whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )
  );

  // Icons for each category
  const icons = {
    languages: <FaCode className="w-5 h-5" />,
    frameworks: <FaServer className="w-5 h-5" />,
    databases: <FaDatabase className="w-5 h-5" />,
    cloud: <FaCloud className="w-5 h-5" />,
    tools: <FaTools className="w-5 h-5" />,
  };

  return (
    <div className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 p-6">
      <div className="space-y-6">
        <SkillCategory 
          title="Programming Languages" 
          items={skills.programmingLanguages} 
          icon={icons.languages} 
        />
        
        <SkillCategory 
          title="Frameworks & Libraries" 
          items={skills.frameworks} 
          icon={icons.frameworks} 
        />
        
        <SkillCategory 
          title="Databases" 
          items={skills.databases} 
          icon={icons.databases} 
        />
        
        <SkillCategory 
          title="Cloud & DevOps" 
          items={skills.cloudPlatforms} 
          icon={icons.cloud} 
        />
        
        <SkillCategory 
          title="Tools & Technologies" 
          items={skills.tools} 
          icon={icons.tools} 
        />
        
        {skills.integrations && skills.integrations.length > 0 && (
          <SkillCategory 
            title="Integrations" 
            items={skills.integrations} 
            icon={icons.tools} 
          />
        )}
      </div>
      
      {/* Hover effect indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default SkillsBlock;
