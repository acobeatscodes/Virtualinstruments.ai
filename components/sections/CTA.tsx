'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 right-20 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how VirtualInstruments.ai can accelerate your digital transformation and support your mission with innovative AI solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Schedule Consultation <FaArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold py-4 px-8 rounded-lg transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
