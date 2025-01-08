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
      <div className="min-h-screen bg-gray-900 text-gray-100 dark:bg-gray-50 dark:text-gray-800 flex items-center justify-center">
        <p>Coming Soon.</p>
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
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            &larr; Back to Projects
          </Link>
        </div>
        {/* Back to Projects (aligned left) */}

        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

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
            {project.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="mb-6 text-gray-700 dark:text-gray-300 text-left"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mb-6 max-w-3xl text-left">
            <h2 className="text-lg font-semibold mb-2">Tech Stack Used:</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {project.techStack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
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
