'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaSchool, FaHospital, FaFilm, FaBriefcase, FaUsers } from 'react-icons/fa';

export default function IndustriesServed() {
  const industries = [
    {
      icon: FaShieldAlt,
      title: 'Government Agencies',
      description: 'Federal, state, and local government digital transformation and mission-critical systems.',
    },
    {
      icon: FaBriefcase,
      title: 'Defense Contractors',
      description: 'Secure, compliant solutions for defense innovation and classified operations support.',
    },
    {
      icon: FaSchool,
      title: 'Education Institutions',
      description: 'Learning management systems, audio technology integration, and educational platforms.',
    },
    {
      icon: FaFilm,
      title: 'Media & Entertainment',
      description: 'Audio technology, content infrastructure, and digital media management solutions.',
    },
    {
      icon: FaHospital,
      title: 'Healthcare Technology',
      description: 'HIPAA-compliant systems, data management, and secure health information platforms.',
    },
    {
      icon: FaUsers,
      title: 'Small Business Partners',
      description: 'Subcontracting partnerships and collaborative government opportunities.',
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-28 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900 dark:text-white">Industries Served</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Proven expertise across multiple sectors with specialized solutions for each industry's unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card-hover bg-gradient-to-br from-primary-50 to-primary-100 dark:from-secondary-800 dark:to-secondary-700 p-8 rounded-lg"
              >
                <div className="text-5xl text-primary-600 mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">{industry.title}</h3>
                <p className="text-secondary-700 dark:text-secondary-300">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
