'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="gradient-hero text-white pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            AI-Powered Innovation for Federal Agencies
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Custom software development, audio technology, and secure SaaS solutions built for government excellence, defense innovation, and digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            Request Capability Statement <FaArrowRight />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold py-4 px-8 rounded-lg transition-all duration-300">
            Schedule Consultation
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold py-4 px-8 rounded-lg transition-all duration-300">
            Partner With Us
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '100%', label: 'Security Focused' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-center border border-white border-opacity-20"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
