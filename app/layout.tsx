import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Government Contracting | VirtualInstruments.ai',
  description: 'AI-powered software development, audio innovation, and secure SaaS solutions for federal agencies, defense contractors, and education programs.',
  keywords: ['government contracting', 'AI software', 'federal agencies', 'audio technology', 'SaaS'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-secondary-900 text-secondary-900 dark:text-secondary-50 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
