// src/pages/Resume.tsx

import React from 'react';
import EducationBlock from '../components/EducationBlock';
import ExperienceBlock from '../components/ExperienceBlock';
import CertificationBlock from '../components/CertificationBlock';
import resumeData from '../assets/resumeData.json';
import resumePDF from '../assets/Keshava_Rajavaram_Resume.pdf';
import { FaDownload } from 'react-icons/fa';

const { education, experience, certifications } = resumeData;

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 py-10">
        {/* PAGE TITLE */}
        <h1 className="text-3xl font-bold mb-8">My Resume</h1>
        {/* EDUCATION SECTION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <EducationBlock key={edu.id} education={edu} />
            ))}
          </div>
        </section>
        {/* EXPERIENCE SECTION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Over the years I've had the opportunity to work with the following
            organizations:
          </p>
          <div className="flex flex-col">
            {experience.map((exp) => (
              <ExperienceBlock key={exp.id} experience={exp} />
            ))}
          </div>
        </section>
        {/* CERTIFICATIONS SECTION */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <CertificationBlock key={cert.id} certification={cert} />
            ))}
          </div>
        </section>

        {/* DOWNLOAD RESUME */}
        <section className="flex justify-end">
          <a
            href={resumePDF}
            download="Keshava_Rajavaram_Resume.pdf"
            className="
      inline-flex items-center gap-2 px-6 py-3
      bg-gradient-to-r from-blue-600 to-indigo-700
      text-white text-lg font-semibold rounded-lg
      shadow-md transition-all
      transform hover:scale-105 hover:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    "
          >
            <FaDownload className="w-5 h-5" /> {/* Icon for download */}
            Download Resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default Resume;
