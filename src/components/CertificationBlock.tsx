import React from 'react';
import { CertificationItem } from '../types/types';

interface CertificationBlockProps {
  certification: CertificationItem;
}

const CertificationBlock: React.FC<CertificationBlockProps> = ({
  certification,
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm border-2 border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {certification.title}
        </h3>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {certification.dateIssued}
        </span>
      </div>
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {certification.issuer}
        </p>
        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-block"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationBlock;
