// src/pages/Resume.tsx

import React from 'react';
import EducationBlock from '../components/EducationBlock';
import ExperienceBlock from '../components/ExperienceBlock';
import CertificationBlock from '../components/CertificationBlock';
import resumeData from '../data/ResumeData';

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
            href="/resume.pdf"
            download="My_Resume.pdf"
            className="
              inline-block px-6 py-3
              bg-blue-600 hover:bg-blue-700
              text-white rounded-md
              shadow-md transition-colors
            "
          >
            Download Resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default Resume;
