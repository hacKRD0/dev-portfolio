import React from 'react';
import { FaLaptopCode, FaCloud, FaDatabase } from 'react-icons/fa';

const CompetenciesSection: React.FC = () => {
  const competencies = [
    {
      icon: <FaLaptopCode className="w-10 h-10 text-pink-500" />,
      title: 'Full-Stack Development',
      description:
        'Experienced in designing and building full-stack web applications using modern technologies.',
      skills: [
        'React',
        'Node.js',
        'TypeScript',
        'JavaScript',
        'TailwindCSS',
        'Express.js',
        'Flask',
        'SpringBoot',
      ],
    },
    {
      icon: <FaDatabase className="w-10 h-10 text-blue-500" />,
      title: 'AI Engineering',
      description:
        'Enthusiastic about AI and its potential to transform industries and create smart solutions.',
      skills: [
        'Python',
        'OpenAI API',
        'Langchain',
        'HuggingFace',
        'Transformers',
      ],
    },
    {
      icon: <FaCloud className="w-10 h-10 text-orange-500" />,
      title: 'Cloud Technologies',
      description:
        'Skilled in cloud platforms with expertise in deploying scalable applications and managing DevOps pipelines.',
      skills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'GitHub Actions'],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      {/* <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
        My Expertise
      </h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {competencies.map((competency, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md"
          >
            {/* Icon */}
            {competency.icon}

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-100">
              {competency.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-md text-gray-600 dark:text-gray-300">
              {competency.description}
            </p>

            {/* Skills in Sentence Format */}
            <p className="mt-4 text-md text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Skills:</span>{' '}
              {competency.skills.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetenciesSection;
