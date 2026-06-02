import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VirtualInstruments.ai | Government Software & AI Solutions',
  description: 'Enterprise-grade AI, software development, and audio technology solutions for government agencies, defense contractors, and federal organizations.',
  keywords: ['government software', 'AI solutions', 'federal contractors', 'audio technology', 'enterprise software'],
  openGraph: {
    title: 'VirtualInstruments.ai | Government Software & AI Solutions',
    description: 'Enterprise-grade AI, software development, and audio technology solutions for government agencies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
