import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { competencies } from '../data/competenciesData';
import CompetencyDetail from '../components/CompetencyDetail';

const CompetencyPage: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  // Find the competency by title (URL parameter is URL-encoded and has hyphens instead of spaces)
  const competency = competencies.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, '-') === title
  );

  // If competency not found, redirect to 404 or home
  if (!competency) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Competencies
        </button>
        
        <CompetencyDetail competency={competency} />
      </div>
    </div>
  );
};

export default CompetencyPage;
