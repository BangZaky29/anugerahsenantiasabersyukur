import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import logo from '@/src/assets/logo-3.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-asb-green-dark dark:bg-gray-950 py-12 overflow-hidden transition-colors duration-500">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row — Logo + Links + Back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="PT ASB Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-heading font-bold text-white text-sm tracking-wide">PT ASB</span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/50 hover:text-asb-gold text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-asb-gold hover:border-asb-gold/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Bottom Row — Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">
            &copy; 2026 PT Anugerah Senantiasa Bersyukur. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Designed for Industrial Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
