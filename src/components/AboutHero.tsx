import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AboutHeroProps } from '../types/types';

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  paragraph,
  imageUrl,
  linkedInUrl = 'https://linkedin.com/in/your-linkedin-profile',
  githubUrl = 'https://github.com/your-github-profile',
}) => {
  return (
    <section
      className="
      container mx-auto px-4 py-10
      flex flex-col-reverse md:flex-row items-center gap-8
    "
    >
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {title}
          </h2>
        )}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {paragraph}
        </p>

        {/* Social Buttons (Unified Light-Mode Style) */}
        <div className="flex flex-wrap gap-4">
          {/* View LinkedIn Button */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center rounded-md
              border border-black dark:border-white
              bg-white text-black
              dark:bg-gray-800 dark:text-white
              px-4 py-2
              transition-colors duration-300
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
            "
          >
            <FaLinkedin className="text-xl mr-2" />
            View LinkedIn
          </a>

          {/* View GitHub Button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center rounded-md
              border border-black dark:border-white
              bg-white text-black
              dark:bg-gray-800 dark:text-white
              px-4 py-2
              transition-colors duration-300
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
            "
          >
            <FaGithub className="text-xl mr-2" />
            View GitHub
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-end">
        <img
          src={imageUrl}
          alt="About me"
          className="rounded-lg shadow-md w-full max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
};

export default AboutHero;
