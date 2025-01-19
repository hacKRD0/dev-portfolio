import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Honeypot field
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const charLimit = 500; // Character limit for the message

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'message' && value.length > charLimit) return; // Prevent typing beyond limit
    setFormData({ ...formData, [name]: value });

    // Reset errors when user edits
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot field (spam protection)
    if (formData.honeypot) {
      setFormError('Spam detected. Submission blocked.');
      return;
    }

    // Proceed to send form data to Formspree
    try {
      const response = await fetch('https://formspree.io/f/mwppadzj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.status === 429) {
        throw new Error(
          'Form submission limit exceeded. Please try again later or contact me directly via email.'
        );
      }

      if (!response.ok) {
        throw new Error('Failed to send the message. Please try again later.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', honeypot: '' }); // Reset form
    } catch (error: any) {
      console.error('Submission error:', error);
      setFormError(error.message || 'An unexpected error occurred.');
    }
  };

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

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md p-6 relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-left text-md font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border rounded-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-left text-md font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border rounded-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-4 relative">
            <label
              htmlFor="message"
              className="block text-left text-md font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-2 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border rounded-sm focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-end mb-2">
              {formData.message.length}/{charLimit}
            </p>
          </div>

          {/* Honeypot Field */}
          <div className="hidden">
            <label htmlFor="honeypot">Leave this field blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              tabIndex={-1} // Prevent keyboard focus
              autoComplete="off"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-block px-6 py-3 rounded-sm font-semibold font-kalam transition-all transform delay-100 bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 hover:-translate-y-1 hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-600 hover:shadow-gray-300"
          >
            Submit
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="mt-4 text-green-600 dark:text-green-400 font-semibold">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {formError && (
          <div className="mt-4 text-red-600 dark:text-red-400 font-semibold">
            {formError}
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              You can also contact me directly at{' '}
              <a
                href="mailto:keshava.rajavaram@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                keshava.rajavaram@gmail.com
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
