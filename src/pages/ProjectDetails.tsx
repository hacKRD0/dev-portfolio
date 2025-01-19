// src/pages/ProjectDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../assets/projectDetails.json';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const project = projectsData.find((p) => p.id === projectId);

  useEffect(() => {
    if (project) {
      // Dynamically generate image URLs based on imagesCount
      const imagePath = `/images/${project.id}`;
      const loadedImages = Array.from(
        { length: project.imagesCount },
        (_, index) => `${imagePath}/${index + 1}.png`
      );
      setImages(loadedImages);
    }
  }, [project]);

  useEffect(() => {
    if (images.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [images, isHovered]);

  if (!project) {
    return (
      <div className="relative min-h-screen bg-gray-900 text-gray-100 dark:bg-gray-50 dark:text-gray-800">
        {/* Back to Projects Link */}
        <div className="absolute top-4 left-4">
          <Link
            to="/projects"
            className="text-md text-blue-600 dark:text-blue-400 hover:underline"
          >
            &larr; Back to Projects
          </Link>
        </div>

        {/* Content */}
        <div className="flex items-center justify-center min-h-full px-4 py-10">
          <div className="text-center">
            <p>Coming Soon.</p>
          </div>
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    if (images.length < 2) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (images.length < 2) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="w-full mb-4 self-start justify-start">
          <Link
            to="/projects"
            className="text-md text-blue-600 dark:text-blue-400 hover:underline"
          >
            &larr; Back to Projects
          </Link>
        </div>
        {/* Back to Projects (aligned left) */}

        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

          {/* Tech stack */}
          {/* Tech Stack */}
          <div className="mb-6 max-w-3xl text-center">
            <h2 className="text-lg font-semibold mb-4">Tech Stack Used:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="text-md font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Carousel (if images exist) */}
          {images && images.length > 0 && (
            <div className="flex items-center justify-center w-full mb-8 gap-4">
              {/* Prev Button with reversed scheme */}
              <button
                onClick={handlePrev}
                className="
                bg-gray-800 text-gray-100
                dark:bg-white dark:text-gray-800
                rounded-full p-3 shadow
                hover:bg-gray-700 dark:hover:bg-gray-100
                transition-colors
              "
                aria-label="Previous Image"
              >
                <FaArrowLeftLong />
              </button>

              {/* Image Container */}
              <div className="w-full max-w-[800px] mx-auto aspect-[16/9] relative overflow-hidden rounded-md shadow-md bg-gray-200 dark:bg-gray-700">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt={`${project.title} screenshot ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  />
                </AnimatePresence>
              </div>

              {/* Next Button with reversed scheme */}
              <button
                onClick={handleNext}
                className="
                bg-gray-800 text-gray-100
                dark:bg-white dark:text-gray-800
                rounded-full p-3 shadow
                hover:bg-gray-700 dark:hover:bg-gray-100
                transition-colors
              "
                aria-label="Next Image"
              >
                <FaArrowRightLong />
              </button>
            </div>
          )}

          {/* Paragraphs / Achievements / Learnings */}
          <div className="mb-6 max-w-3xl">
            <h2 className="text-lg font-semibold mb-4">Project Details</h2>
            <div className="text-left border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-100 dark:bg-gray-800">
              {/* Short Summary */}
              {!isExpanded && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                  {project.summary.map((point, idx) => (
                    <li key={idx} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Full Description */}
              {isExpanded && (
                <div className="text-gray-700 dark:text-gray-300 text-left">
                  {project.paragraphs.map((para, idx) => (
                    <p key={idx} className="mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Read More / Read Less Button */}
              <div className="text-center mt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-block px-6 py-2 text-md font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-colors"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>

          {/* Links (GitHub, Live Site) */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub Repo
            </a>
            {project.liveSiteUrl && (
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
