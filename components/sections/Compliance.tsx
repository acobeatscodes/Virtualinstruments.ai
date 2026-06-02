'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';

export default function Compliance() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const complianceItems = [
    {
      title: 'SAM.gov Registration',
      content: 'Active registration with System for Award Management (SAM.gov) for federal contracting eligibility.',
      status: 'Active',
    },
    {
      title: 'UEI & CAGE Code',
      content: 'UEI: [Unique Entity Identifier]\nCAGE Code: [CAGE Code]\nIdentifiers for government contracting systems.',
      status: 'Registered',
    },
    {
      title: 'Small Business & Subcontractor',
      content: 'Certified small business with proven experience as prime contractor and subcontractor on federal projects.',
      status: 'Certified',
    },
    {
      title: 'CMMC Readiness',
      content: 'Compliance with Cybersecurity Maturity Model Certification (CMMC) requirements for defense contractor support. On-path for Level 1-2 certification.',
      status: 'In Progress',
    },
    {
      title: 'FedRAMP-Aware Infrastructure',
      content: 'Cloud infrastructure designed with FedRAMP compliance principles, ready for Authority to Operate (ATO) processes.',
      status: 'Ready',
    },
    {
      title: 'Cybersecurity Best Practices',
      content: 'NIST SP 800-53 aligned security controls, regular security audits, penetration testing, and continuous monitoring.',
      status: 'Implemented',
    },
  ];

  const naicsCodes = [
    { code: '541511', description: 'Custom Computer Programming Services' },
    { code: '541512', description: 'Computer Systems Design Services' },
    { code: '541519', description: 'Other Computer Related Services' },
    { code: '518210', description: 'Data Processing, Hosting, & Related Services' },
  ];

  return (
    <section id="compliance" className="py-20 md:py-28 bg-secondary-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900 dark:text-white">Government & Compliance</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Federal compliance, security certifications, and government contracting readiness.
          </p>
        </motion.div>

        {/* Compliance Sections */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-secondary-900 dark:text-white">Compliance & Certifications</h3>
          <div className="space-y-4">
            {complianceItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="w-full bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-between items-center group"
                >
                  <div className="flex items-center gap-4 text-left">
                    <FaCheckCircle className="text-primary-600 text-2xl flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-secondary-900 dark:text-white">{item.title}</h4>
                      <span className="inline-block mt-1 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 text-sm rounded-full font-semibold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-secondary-600 dark:text-secondary-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-secondary-100 dark:bg-secondary-600 p-6 rounded-b-lg text-secondary-700 dark:text-secondary-200 border-t border-secondary-200 dark:border-secondary-700"
                    >
                      <p className="whitespace-pre-line">{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NAICS Codes */}
        <div className="bg-white dark:bg-secondary-700 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">NAICS Codes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {naicsCodes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-l-4 border-primary-600 pl-4 py-2"
              >
                <div className="font-bold text-primary-600 text-lg">{item.code}</div>
                <div className="text-secondary-700 dark:text-secondary-300">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capability Statement Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Download Capability Statement</h3>
          <p className="mb-6 text-primary-100">Access our detailed capability statement for government procurement processes.</p>
          <button className="bg-white text-primary-700 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition-all duration-300">
            Download PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
}
