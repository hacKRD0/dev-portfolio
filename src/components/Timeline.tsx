import React from 'react';
import { ExperienceItem } from '../types/types';
import { FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TimelineProps {
  experience: ExperienceItem[];
}

const Timeline: React.FC<TimelineProps> = ({ experience }) => {
  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 dark:from-blue-900 dark:via-blue-500 dark:to-blue-900 transform -translate-x-1/2" />
      
      {/* Timeline items */}
      <motion.div 
        className="relative space-y-12 md:space-y-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {experience.map((item, index) => (
          <motion.div 
            key={item.id || index} 
            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            variants={itemVariants}
          >
            {/* Date for mobile */}
            <div className="md:hidden mb-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow-md z-10" />
                <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                  {item.dateRange}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 md:px-6">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden h-full"
                whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.designation}
                      </h3>
                      <div className="flex items-center">
                        <FaBriefcase className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {item.company}
                        </span>
                        {item.projectLink && (
                          <a
                            href={item.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                            title="View Project"
                            aria-label={`View ${item.company} project`}
                          >
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {item.dateRange}
                    </span>
                  </div>

                  {item.shortDescription && (
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  )}

                  {('techStack' in item) && Array.isArray(item.techStack) && item.techStack.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {(item.techStack as string[]).map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/20 dark:hover:border-blue-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>

            {/* Center line dot for desktop */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow-md z-10 items-center justify-center">
              <span className="text-xs font-semibold text-white">
                {index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
