import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import logo from '@/src/assets/logo-3.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHasScrolled(latest > 50);

    if (latest > previous && latest > 200) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#brand-gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // When sidebar is open, always show solid background
  const showSolid = hasScrolled || isOpen;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isHidden && !isOpen ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-asb-white dark:bg-gray-900 shadow-sm border-b border-gray-200/30 dark:border-gray-700/30'
          : showSolid
            ? 'glass dark:glass-dark shadow-sm border-b border-gray-200/30 dark:border-gray-700/30'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 group">
              <img
                src={logo}
                alt="PT ASB Logo"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className={`font-heading font-bold text-sm lg:text-base hidden sm:block transition-all duration-300 ${
                showSolid
                  ? 'text-asb-green-dark dark:text-white'
                  : 'text-white'
              }`}>
                PT ASB
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  showSolid
                    ? 'text-asb-black/70 dark:text-gray-300 hover:text-asb-green-dark dark:hover:text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-asb-gold rounded-full transition-all duration-300 group-hover:w-6" />
              </a>
            ))}

            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  showSolid
                    ? 'text-asb-black/60 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <a
                href="https://wa.me/6285270201945"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-asb-green-dark dark:bg-asb-gold text-white dark:text-asb-black text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300 shadow-sm"
              >
                <Phone size={14} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                showSolid
                  ? 'text-asb-black/60 dark:text-gray-300'
                  : 'text-white/70'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                showSolid
                  ? 'text-asb-green-dark dark:text-gray-300'
                  : 'text-white'
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — Slide overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-asb-white dark:bg-gray-900 shadow-2xl z-50 md:hidden"
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)} className="text-asb-black/60 dark:text-gray-400">
                  <X size={22} />
                </button>
              </div>
              <div className="px-6 py-4 space-y-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block px-4 py-3 text-asb-black/80 dark:text-gray-300 font-medium text-sm hover:text-asb-green-dark dark:hover:text-asb-gold rounded-lg hover:bg-asb-surface dark:hover:bg-gray-800 transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href="https://wa.me/6285270201945"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-asb-green-dark dark:text-asb-green-light font-medium text-sm"
                  >
                    <Phone size={16} />
                    0852-7020-1945
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
