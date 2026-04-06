import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon, ChevronDown, LayoutGrid } from 'lucide-react';
import logo from '@/src/assets/logo-3.png';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Brand {
  id: number;
  name: string;
  external_link: string | null;
  type: string | null;
  photos: { filepath: string }[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Mega menu states
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  
  const [brands, setBrands] = useState<Brand[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const filters = ['Semua', 'Mechanical', 'Electrical', 'Mesin', 'Tools'];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHasScrolled(latest > 50);

    if (latest > previous && latest > 200 && !isProductHovered && !isOpen) {
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

  useEffect(() => {
    fetch(`${API_URL}/api/brands`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBrands(data.data);
        }
      })
      .catch(err => console.error("Error fetching brands for navbar:", err));
  }, []);

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Product', href: '#brand-gallery', isDropdown: true },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#brand-gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // When dropdown is open or sidebar is open, keep solid background
  const showSolid = hasScrolled || isOpen || isProductHovered;

  const filteredBrands = brands.filter(b => {
    if (activeFilter === 'Semua') return true;
    return b.type?.toLowerCase() === activeFilter.toLowerCase();
  });

  // Photo Component for rendering the logo in a grid
  const BrandLogoItem = ({ brand }: { brand: Brand }) => {
    const photo = brand.photos && brand.photos.length > 0 ? brand.photos[0] : null;
    const displayName = brand.name;
    
    return (
      <a 
        href={brand.external_link || '#'} 
        target={brand.external_link ? "_blank" : "_self"} 
        rel="noreferrer"
        className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700/50 block"
      >
        <div className="h-10 sm:h-12 w-full flex items-center justify-center mb-2">
          {photo ? (
            <img 
              src={`${API_URL}/${photo.filepath}`} 
              alt={displayName} 
              className="max-h-full max-w-full object-contain filter brightness-100 dark:brightness-200 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
            />
          ) : (
            <LayoutGrid className="text-gray-300 dark:text-gray-600 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
        <span className="text-[10px] sm:text-xs font-semibold text-center text-asb-black/60 dark:text-gray-400 group-hover:text-asb-green-dark dark:group-hover:text-white transition-colors truncate w-full px-1">
          {displayName}
        </span>
      </a>
    );
  };

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
            {links.map((link) => {
              if (link.isDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative py-4"
                    onMouseEnter={() => setIsProductHovered(true)}
                    onMouseLeave={() => setIsProductHovered(false)}
                  >
                     <a
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group flex items-center gap-1 ${
                        showSolid
                          ? 'text-asb-black/70 dark:text-gray-300 hover:text-asb-green-dark dark:hover:text-white'
                          : 'text-white/80 hover:text-white'
                      } ${isProductHovered ? (showSolid ? 'text-asb-green-dark dark:text-white' : 'text-white') : ''}`}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isProductHovered ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-asb-gold rounded-full transition-all duration-300 ${isProductHovered ? 'w-6' : 'w-0 group-hover:w-6'}`} />
                    </a>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isProductHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-[40%] pt-2 w-[480px] lg:w-[600px] xl:w-[700px] cursor-default"
                        >
                          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform-gpu">
                            <div className="p-6">
                              <div className="flex gap-4">
                                {/* Left Side: Filters */}
                                <div className="w-1/3 xl:w-1/4 border-r border-gray-100 dark:border-gray-800 pr-4 space-y-1">
                                  <h3 className="text-xs font-bold uppercase tracking-wider text-asb-black/40 dark:text-gray-500 mb-3 px-3">
                                    Kategori
                                  </h3>
                                  {filters.map(filter => (
                                    <button
                                      key={filter}
                                      onClick={() => setActiveFilter(filter)}
                                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        activeFilter === filter 
                                        ? 'bg-asb-green-dark dark:bg-asb-gold text-white dark:text-asb-black shadow-md shadow-asb-green-dark/20' 
                                        : 'text-asb-black/70 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-asb-green-dark dark:hover:text-gray-200'
                                      }`}
                                    >
                                      {filter}
                                    </button>
                                  ))}
                                </div>
                                
                                {/* Right Side: Logo Grid */}
                                <div className="w-2/3 xl:w-3/4 pl-2 lg:h-[300px] overflow-y-auto custom-scrollbar">
                                  {filteredBrands.length === 0 ? (
                                     <div className="flex flex-col items-center justify-center h-full text-center p-6 opacity-60">
                                       <LayoutGrid className="w-10 h-10 mb-3 text-gray-300 dark:text-gray-600" />
                                       <span className="text-sm dark:text-gray-400">Tidak ada brand untuk kategori ini</span>
                                     </div>
                                  ) : (
                                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 pb-2">
                                      {filteredBrands.map(brand => (
                                        <BrandLogoItem key={brand.id} brand={brand} />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/80 p-4 border-t border-gray-100 dark:border-gray-800">
                               <a href="#brand-gallery" className="text-xs font-bold uppercase tracking-widest text-asb-gold hover:text-asb-gold-light transition-colors flex items-center justify-center gap-2 group">
                                 Lihat Semua Galeri
                                 <motion.span className="group-hover:translate-x-1 inline-block transition-transform">→</motion.span>
                               </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
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
              );
            })}

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
              className="fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-asb-white dark:bg-gray-900 shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-800">
                <span className="font-heading font-bold text-asb-green-dark dark:text-white">Menu Navigation</span>
                <button onClick={() => setIsOpen(false)} className="text-asb-black/60 dark:text-gray-400 p-2 bg-gray-50 dark:bg-gray-800 rounded-full hover:text-red-500 transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 custom-scrollbar">
                {links.map((link, i) => {
                  if (link.isDropdown) {
                    return (
                      <div key="mobile-product" className="block w-full">
                         <button 
                           onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                           className={`flex w-full items-center justify-between px-4 py-3 font-semibold text-sm rounded-lg transition-all ${
                             isMobileProductOpen 
                             ? 'bg-asb-green-dark/5 dark:bg-asb-gold/10 text-asb-green-dark dark:text-asb-gold' 
                             : 'text-asb-black/80 dark:text-gray-300 hover:bg-asb-surface dark:hover:bg-gray-800'
                           }`}
                         >
                           {link.name}
                           <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileProductOpen ? 'rotate-180' : ''}`} />
                         </button>
                         <AnimatePresence>
                           {isMobileProductOpen && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               className="overflow-hidden bg-white dark:bg-gray-800/40 rounded-xl my-2 border border-gray-100 dark:border-gray-800"
                             >
                                <div className="p-3">
                                  {/* Filter Chips Mobile */}
                                  <div className="flex overflow-x-auto gap-2 pb-3 mb-2 custom-scrollbar hide-scrollbar">
                                    {filters.map(filter => (
                                      <button
                                        key={`m-${filter}`}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                                          activeFilter === filter 
                                          ? 'bg-asb-green-dark text-white dark:bg-asb-gold dark:text-asb-black shadow-md'
                                          : 'bg-gray-50 dark:bg-gray-700 text-asb-black/60 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                        }`}
                                      >
                                        {filter}
                                      </button>
                                    ))}
                                  </div>
                                  
                                  {/* Grid Mobile */}
                                  <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                                    {filteredBrands.map(brand => (
                                      <div key={brand.id} className="bg-gray-50 dark:bg-gray-800/80 rounded-xl p-1">
                                        <BrandLogoItem brand={brand} />
                                      </div>
                                    ))}
                                    {filteredBrands.length === 0 && (
                                       <div className="col-span-2 text-center py-6 text-xs text-gray-400">
                                          Tidak ada produk
                                       </div>
                                    )}
                                  </div>
                                </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block px-4 py-3 text-asb-black/80 dark:text-gray-300 font-semibold text-sm hover:text-asb-green-dark dark:hover:text-asb-gold rounded-lg hover:bg-asb-surface dark:hover:bg-gray-800 transition-all"
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>
              
              <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shrink-0">
                <a
                  href="https://wa.me/6285270201945"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-asb-green-dark dark:bg-asb-gold text-white dark:text-asb-black rounded-xl font-bold text-sm shadow-lg shadow-asb-green-dark/20 hover:shadow-xl transition-all"
                >
                  <Phone size={16} />
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Required CSS for custom scrollbar within dropdown menus */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.4);
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(75, 85, 99, 0.6);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.8);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </motion.nav>
  );
}
