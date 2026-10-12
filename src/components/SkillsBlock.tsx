import React from 'react';
import { SkillSet } from '../types/types';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaBrain } from 'react-icons/fa';
import { LuPlug } from 'react-icons/lu';
import TechPill from './TechPill';

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
        <div className="flex items-center sm:w-56 flex-shrink-0">
          <div className="flex items-center text-blue-600 dark:text-blue-400 mr-2">
            {icon}
          </div>
          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
        </div>
        <div className="flex-1 flex flex-wrap gap-2">
          {items.map((skill) => (
            <TechPill
              key={skill}
              tech={skill}
              size="md"
              className="whitespace-nowrap hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            />
          ))}
        </div>
      </div>
    )
  );

  // Icons for each category
  const icons = {
    ai: <FaBrain className="w-5 h-5" />,
    languages: <FaCode className="w-5 h-5" />,
    frameworks: <FaServer className="w-5 h-5" />,
    databases: <FaDatabase className="w-5 h-5" />,
    cloud: <FaCloud className="w-5 h-5" />,
    tools: <FaTools className="w-5 h-5" />,
    integrations: <LuPlug className="w-5 h-5" />,
  };

  return (
    <div className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 p-6">
      <div className="space-y-6">
        {skills.aiEngineering && skills.aiEngineering.length > 0 && (
          <SkillCategory
            title="AI Engineering"
            items={skills.aiEngineering}
            icon={icons.ai}
          />
        )}

        <SkillCategory 
          title="Languages" 
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
            icon={icons.integrations} 
          />
        )}
      </div>
      
      {/* Hover effect indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default SkillsBlock;
