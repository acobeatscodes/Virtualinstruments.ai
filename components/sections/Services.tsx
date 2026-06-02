'use client';

import { motion } from 'framer-motion';
import { FaCode, FaMicrophone, FaLock, FaDatabase, FaBriefcase, FaChartLine } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaCode,
      title: 'AI-Powered Software Development',
      description: 'Custom applications leveraging machine learning, NLP, and modern AI frameworks for intelligent solutions.',
    },
    {
      icon: FaMicrophone,
      title: 'Audio & Speech Technology',
      description: 'Speech-to-text systems, audio processing, and voice-enabled solutions for modern applications.',
    },
    {
      icon: FaLock,
      title: 'Secure SaaS Platform Development',
      description: 'Cloud-ready, scalable platforms with enterprise security, compliance, and multi-tenant architecture.',
    },
    {
      icon: FaDatabase,
      title: 'Data Management & Automation',
      description: 'Workflow automation, data pipelines, and intelligent systems to streamline government operations.',
    },
    {
      icon: FaBriefcase,
      title: 'Government Subcontracting Support',
      description: 'Full support for federal contracts, compliance requirements, and government procurement processes.',
    },
    {
      icon: FaChartLine,
      title: 'Digital Content Infrastructure',
      description: 'Scalable infrastructure for media, education content, and digital asset management systems.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900 dark:text-white">Core Services</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Comprehensive solutions designed for federal agencies, defense contractors, and educational institutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card-hover bg-white dark:bg-secondary-700 p-8 rounded-lg shadow-md"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl text-primary-600 mb-4"
                >
                  <Icon />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">{service.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
