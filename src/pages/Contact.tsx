import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-10 text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold font-kalam mb-4">Get in Touch!</h1>

        {/* Paragraph */}
        <p className="max-w-xl mx-auto font-kalam text-gray-700 dark:text-gray-300 mb-8">
          I’m always open to new opportunities and collaborations. If you have a
          project or idea you'd like to discuss, or simply want to say hi, feel
          free to reach out!
        </p>

        {/* Themed Button with Elevation on Hover */}
        <a
          href="mailto:keshava.rajavaram@gmail.com"
          className="
            inline-block
            px-6 py-3
            rounded-sm font-semibold font-kalam
            transition-all transform
            bg-gray-800 text-gray-100  /* Light mode button by default */
            dark:bg-gray-100 dark:text-gray-800  /* Swap colors in dark mode */
            hover:-translate-y-2 hover:-translate-x-2     /* Slight upward movement on hover */
            hover:scale-105 
            hover:shadow-lg           /* Elevated shadow on hover */
            dark:hover:shadow-gray-600
            hover:shadow-gray-300
          "
        >
          Connect with me
        </a>
      </div>
    </div>
  );
};

export default Contact;
