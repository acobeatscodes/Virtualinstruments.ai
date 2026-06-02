'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  message: string;
  interestedIn: string[];
}

export default function CapabilityForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Send to email service (FormSubmit, Formspree, etc.)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted:', data);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    'AI Software Development',
    'Audio Technology',
    'SaaS Platform Development',
    'Data Management',
    'Compliance Support',
    'Subcontracting Support',
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary-50 dark:bg-secondary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900 dark:text-white">Request Capability Assessment</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Connect with our team to discuss your government contracting needs and explore partnership opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-secondary-700 p-8 md:p-12 rounded-lg shadow-xl"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
              <div>
                <p className="font-bold text-green-800 dark:text-green-200">Success!</p>
                <p className="text-green-700 dark:text-green-300 text-sm">We've received your request. Our team will contact you shortly.</p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-secondary-900 dark:text-white">Full Name *</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FaExclamationCircle /> {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-secondary-900 dark:text-white">Email *</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FaExclamationCircle /> {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-secondary-900 dark:text-white">Company *</label>
                <input
                  type="text"
                  {...register('company', { required: 'Company is required' })}
                  className="w-full"
                  placeholder="Your organization"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FaExclamationCircle /> {errors.company.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-secondary-900 dark:text-white">Phone</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-secondary-900 dark:text-white">Industry *</label>
              <select
                {...register('industry', { required: 'Industry is required' })}
                className="w-full"
              >
                <option value="">Select an industry</option>
                <option value="government">Government Agency</option>
                <option value="defense">Defense Contractor</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="media">Media & Entertainment</option>
                <option value="other">Other</option>
              </select>
              {errors.industry && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationCircle /> {errors.industry.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold mb-4 text-secondary-900 dark:text-white">Interested In *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label key={service} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={service}
                      {...register('interestedIn')}
                      className="w-4 h-4"
                    />
                    <span className="text-secondary-700 dark:text-secondary-300">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-secondary-900 dark:text-white">Additional Information</label>
              <textarea
                {...register('message')}
                className="w-full h-32"
                placeholder="Tell us about your project, timeline, or specific requirements..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting...' : 'Submit Request'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
