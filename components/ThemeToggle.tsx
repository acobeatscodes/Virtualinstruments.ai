'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors duration-300"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
}
