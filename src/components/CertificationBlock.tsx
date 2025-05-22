import React from 'react';
import { CertificationItem } from '../types/types';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

interface CertificationBlockProps {
  certification: CertificationItem;
}

const CertificationBlock: React.FC<CertificationBlockProps> = ({
  certification,
}) => {
  return (
    <div className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-5">
        {/* Title and Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            {certification.title}
          </h3>
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-full whitespace-nowrap h-fit">
            {certification.dateIssued}
          </span>
        </div>

        {/* Issuer and Link */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center">
            <FaAward className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {certification.issuer}
            </p>
          </div>
          
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200 mt-1 sm:mt-0"
            >
              <span>View Certificate</span>
              <FaExternalLinkAlt className="w-3 h-3 ml-1.5" />
            </a>
          )}
        </div>
      </div>
      
      {/* Hover effect indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default CertificationBlock;
