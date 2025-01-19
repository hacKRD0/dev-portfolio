import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Example icons from react-icons

interface FooterProps {
  // Add any props if needed (e.g., custom text, social links, etc.)
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between md:flex-row">
        {/* Left section - Copyright */}
        <div className="text-gray-700 dark:text-gray-300 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Keshava Rajavaram.
        </div>

        {/* Right section - Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/keshava-rd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/hacKRD0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
