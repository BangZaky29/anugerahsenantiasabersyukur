import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import logo from '@/src/assets/logo-3.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-asb-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md z-50 border-b border-transparent dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 sm:h-28">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center gap-4">
              <img
                src={logo}
                alt="PT ASB Logo"
                className="w-20 sm:w-24 h-20 sm:h-24 object-contain transition-all hover:scale-110"
              />
              <span className="font-bold text-asb-green-dark dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-asb-gold dark:via-asb-green-light dark:to-asb-green-dark text-xl hidden sm:block transition-all">PT ANUGERAH SENANTIASA BERSYUKUR</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-asb-green-dark dark:text-gray-300 hover:text-asb-gold dark:hover:text-asb-gold font-medium transition-colors">
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-asb-green-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href="https://wa.me/6285270201945" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-500 dark:bg-gradient-to-r dark:from-asb-green-light dark:to-asb-green-dark text-white px-4 py-2 rounded-full hover:bg-green-600 dark:hover:opacity-90 transition-all shadow-sm">
              <Phone size={18} />
              <span className="font-medium">0852-7020-1945</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-asb-green-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-asb-green-dark dark:text-gray-300 hover:text-asb-gold">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-asb-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg absolute w-full transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-asb-green-dark dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-asb-gold rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/6285270201945" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-3 text-green-600 dark:text-asb-green-light font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">
              <Phone size={18} />
              0852-7020-1945
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
