'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'VirtualInstruments.ai delivered a cutting-edge AI solution that transformed our data workflows. Their team understood our compliance requirements perfectly.',
      author: 'Director of Technology',
      company: 'Federal Agency Partner',
      rating: 5,
    },
    {
      quote: 'Exceptional quality, fast deployment, and genuine partnership. They treated our project like their own mission.',
      author: 'Project Manager',
      company: 'Defense Contractor',
      rating: 5,
    },
    {
      quote: 'The audio technology integration was seamless. Their innovation in speech-to-text systems exceeded our expectations.',
      author: 'Educational Director',
      company: 'University Institution',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900 dark:text-white">Past Projects & Testimonials</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Proven track record of delivering excellence for government and enterprise clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-hover bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-800 dark:to-secondary-700 p-8 rounded-lg border border-primary-200 dark:border-secondary-600"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-secondary-700 dark:text-secondary-200 mb-6 italic leading-relaxed">\"{ testimonial.quote }\"</p>
              <div>
                <p className="font-bold text-secondary-900 dark:text-white">{testimonial.author}</p>
                <p className="text-primary-600 dark:text-primary-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
