'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#contact' },
        { label: 'Services', href: '#services' },
        { label: 'Industries', href: '#industries' },
        { label: 'Support', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Capability Statement', href: '#contact' },
        { label: 'Compliance', href: '#compliance' },
        { label: 'Documentation', href: '#services' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: 'mailto:gov@virtualinstruments.ai?subject=Privacy%20Policy%20Request' },
        { label: 'Terms of Service', href: 'mailto:gov@virtualinstruments.ai?subject=Terms%20Request' },
        { label: 'Security', href: '#compliance' },
        { label: 'Sitemap', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              VirtualInstruments.ai
            </Link>
            <p className="text-secondary-400 mt-4 text-sm leading-relaxed">
              AI-powered innovation for government agencies, defense contractors, and educational institutions.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: FaGithub, href: 'https://github.com/acobeatscodes/Virtualinstruments.ai', label: 'GitHub repository' },
                { icon: FaEnvelope, href: 'mailto:gov@virtualinstruments.ai', label: 'Email VirtualInstruments.ai' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.2 }}
                    className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (sectionIdx + 1) * 0.1 }}
            >
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-secondary-800 rounded-lg p-6 mb-8"
        >
          <h4 className="font-bold text-white mb-4">Get In Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-secondary-400 flex items-center gap-2 mb-1">
                <FaEnvelope size={16} /> Email
              </p>
              <a href="mailto:gov@virtualinstruments.ai" className="text-primary-400 hover:text-primary-300 font-semibold">
                gov@virtualinstruments.ai
              </a>
            </div>
            <div>
              <p className="text-secondary-400 flex items-center gap-2 mb-1">
                <FaPhone size={16} /> Phone
              </p>
              <a href="tel:+1-347-982-4354" className="text-primary-400 hover:text-primary-300 font-semibold">
                +1 (347) 982-4354
              </a>
            </div>
            <div>
              <p className="text-secondary-400 mb-1">Business Hours</p>
              <p className="text-primary-400 font-semibold">Mon - Fri: 9AM - 6PM EST</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-400">
            <p>&copy; {currentYear} VirtualInstruments.ai. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Trusted partner for federal innovation and digital transformation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
