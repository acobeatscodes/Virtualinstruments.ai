import Link from 'next/link';
import { FaArrowRight, FaCheck, FaShieldAlt, FaBrain, FaMicrophone, FaDatabase, FaLock, FaCube, FaCheckCircle, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="container-wide">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg"></div>
              <span className="text-xl font-bold gradient-text hidden sm:inline">VirtualInstruments.ai</span>
              <span className="text-xl font-bold gradient-text sm:hidden">VI.ai</span>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#solutions" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded">Solutions</a>
              <a href="#industries" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded">Industries</a>
              <a href="#compliance" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded">Compliance</a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded">Contact</a>
            </div>
            <button className="btn-primary text-sm hidden md:block">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 dark:from-slate-900 to-white dark:to-slate-950 pt-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Government Solutions Platform</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Enterprise AI & Software for <span className="gradient-text">Government</span>
                </h1>
              </div>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                Secure, compliant software solutions and advanced AI technology designed specifically for federal agencies, defense contractors, and mission-critical operations.
              </p>

              <ul className="space-y-3 max-w-lg">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <FaCheck className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">FedRAMP and CMMC Compliant</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <FaCheck className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">Advanced AI & Machine Learning</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <FaCheck className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">Custom Audio Technology Integration</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-primary flex items-center gap-2">
                  Start Your Project <FaArrowRight />
                </button>
                <button className="btn-outline">View Solutions</button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="card card-hover p-6 border border-slate-200 dark:border-slate-800">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Projects Delivered</div>
              </div>
              <div className="card card-hover p-6 border border-slate-200 dark:border-slate-800">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Security Focused</div>
              </div>
              <div className="card card-hover p-6 border border-slate-200 dark:border-slate-800">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Support</div>
              </div>
              <div className="card card-hover p-6 border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <p className="text-sm italic text-slate-700 dark:text-slate-300 mb-3">
                  "Exceeded expectations with their expertise and dedication to security compliance."
                </p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Federal Agency CIO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding bg-white dark:bg-slate-950">
        <div className="container-wide">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Solutions Built for Government</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive software and AI solutions designed to meet the unique challenges of federal operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FaBrain, title: 'AI & Machine Learning', desc: 'Custom AI solutions including NLP, predictive analytics, and intelligent automation tailored for government workflows.' },
              { icon: FaMicrophone, title: 'Audio Technology', desc: 'Advanced speech-to-text, voice analytics, and audio processing for communications and transcription.' },
              { icon: FaShieldAlt, title: 'Secure SaaS Platforms', desc: 'Cloud-native, multi-tenant platforms with enterprise security and compliance built-in.' },
              { icon: FaDatabase, title: 'Data & Integration', desc: 'Seamless data management, ETL pipelines, and system integration for complex environments.' },
              { icon: FaLock, title: 'Cybersecurity', desc: 'End-to-end security architecture, penetration testing, and continuous compliance monitoring.' },
              { icon: FaCube, title: 'Custom Development', desc: 'Bespoke software solutions built to your exact specifications and requirements.' },
            ].map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={idx} className="card card-hover p-6 border border-slate-200 dark:border-slate-800 group">
                  <div className="mb-4">
                    <Icon className="text-4xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{solution.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{solution.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container-wide">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Industries We Serve</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Proven expertise across multiple sectors with specialized solutions for each industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Federal Agencies', desc: 'Mission-critical systems and digital transformation for government operations.' },
              { title: 'Defense & Contractors', desc: 'Secure, compliant solutions for defense innovation and classified operations.' },
              { title: 'Education & Research', desc: 'Learning platforms and research tools for academic institutions.' },
              { title: 'Healthcare', desc: 'HIPAA-compliant systems for health information management.' },
              { title: 'Media & Broadcasting', desc: 'Audio technology and content management for media organizations.' },
              { title: 'Small Business Partners', desc: 'Subcontracting opportunities and partnership support.' },
            ].map((industry, idx) => (
              <div key={idx} className="card card-hover p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{industry.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{industry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="section-padding bg-white dark:bg-slate-950">
        <div className="container-wide">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Compliance & Security</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade compliance certifications and security standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'FedRAMP Ready', features: ['NIST SP 800-53 Controls', 'Continuous Monitoring', 'Security Assessment Ready'] },
              { title: 'CMMC Compliant', features: ['Level 2 Certified', 'Incident Response', 'Security Awareness'] },
              { title: 'SAM.gov Registered', features: ['UEI Registered', 'CAGE Code', 'Active Certifications'] },
              { title: 'Security & Compliance', features: ['ISO 27001', 'SOC 2 Type II', 'Regular Audits'] },
            ].map((item, idx) => (
              <div key={idx} className="card border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <div className="space-y-3">
                  {item.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <FaCheck className="text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">NAICS Codes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { code: '541511', desc: 'Custom Computer Programming Services' },
                { code: '541512', desc: 'Computer Systems Design Services' },
                { code: '541519', desc: 'Other Computer Related Services' },
                { code: '518210', desc: 'Data Processing & Hosting Services' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">{item.code}</div>
                  <div className="text-slate-600 dark:text-slate-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="card border border-slate-200 dark:border-slate-800 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">Name</label>
                  <input type="text" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">Company</label>
                  <input type="text" placeholder="Your organization" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">Phone</label>
                  <input type="tel" placeholder="(555) 123-4567" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">Industry</label>
                <select className="w-full">
                  <option>Select your industry</option>
                  <option>Federal Government</option>
                  <option>Defense Contractor</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Media & Entertainment</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">Message</label>
                <textarea placeholder="Tell us about your project..." rows={5} className="w-full"></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white border-t border-slate-800">
        <div className="container-wide section-padding">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg"></div>
                <span className="font-bold text-lg">VirtualInstruments.ai</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enterprise AI and software solutions for government operations.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#solutions" className="hover:text-blue-400 transition">AI & ML</a></li>
                <li><a href="#solutions" className="hover:text-blue-400 transition">Software</a></li>
                <li><a href="#solutions" className="hover:text-blue-400 transition">Audio Tech</a></li>
                <li><a href="#solutions" className="hover:text-blue-400 transition">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#compliance" className="hover:text-blue-400 transition">Compliance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-sm">
                <a href="mailto:gov@virtualinstruments.ai" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition">
                  <FaEnvelope /> gov@virtualinstruments.ai
                </a>
                <a href="tel:+1-347-982-4354" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition">
                  <FaPhone /> +1 (347) 982-4354
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} VirtualInstruments.ai. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition"><FaLinkedin size={18} /></a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition"><FaTwitter size={18} /></a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition"><FaGithub size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
