// src/pages/Resume.tsx

import React from 'react';
import EducationBlock from '../components/EducationBlock';
import ExperienceBlock from '../components/ExperienceBlock';
import CertificationBlock from '../components/CertificationBlock';
import SkillsBlock from '../components/SkillsBlock';
import resumeData from '../assets/resumeData.json';
import resumePDF from '../assets/Keshava_Rajavaram_Resume.pdf';
import { FiDownload } from 'react-icons/fi'; // Using FiDownload instead of FaDownload

const { education, experience, certifications } = resumeData;

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* PAGE HEADER */}
        <div className="flex flex-row justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Resume</h1>
          <a
            href={resumePDF}
            download="Keshava_Rajavaram_Resume.pdf"
            className="
              inline-flex items-center justify-center
              px-4 py-2 rounded-md
              bg-blue-600 text-white
              hover:bg-blue-700
              dark:bg-blue-700 dark:hover:bg-blue-600
              transition-colors duration-200
              text-sm font-medium
              shadow-sm hover:shadow-md
              whitespace-nowrap
              h-10
            "
            aria-label="Download Resume"
          >
            <FiDownload className="sm:mr-2" />
            <span className="hidden sm:inline">Download PDF</span>
          </a>
        </div>

        {/* SKILLS SECTION */}
        <section className="mb-16">
          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative inline-flex items-center bg-white dark:bg-gray-900 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                Skills & Technologies
              </h2>
            </div>
          </div>
          <SkillsBlock skills={resumeData.skills} />
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-16">
          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative inline-flex items-center bg-white dark:bg-gray-900 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                Experience
              </h2>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Over the years I've had the opportunity to work with the following organizations:
          </p>
          <div className="space-y-6">
            {experience.map((exp) => (
              <ExperienceBlock key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-16">
          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative inline-flex items-center bg-white dark:bg-gray-900 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                Education
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <EducationBlock key={edu.id} education={edu} />
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="mb-16">
          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative inline-flex items-center bg-white dark:bg-gray-900 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                Certifications
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <CertificationBlock key={cert.id} certification={cert} />
            ))}
          </div>
        </section>

        {/* Download button has been moved to the header */}
      </div>
    </div>
  );
};

export default Resume;
