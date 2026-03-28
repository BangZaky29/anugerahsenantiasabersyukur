import logo from '@/src/assets/logo-3.png';

export function Footer() {
  return (
    <footer className="relative bg-asb-white dark:bg-gray-900 py-12 overflow-hidden border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-asb-gold dark:bg-gradient-to-r dark:from-asb-gold dark:via-asb-green-light dark:to-asb-green-dark transition-all duration-300"></div>

      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#E6C156 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8 border-b border-gray-200 dark:border-gray-800 pb-8 transition-colors duration-300">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="PT ASB Logo"
                className="w-24 sm:w-32 h-24 sm:h-32 object-contain shadow-sm dark:shadow-asb-gold/20"
              />
              <span className="font-bold text-asb-green-dark dark:text-white text-xl tracking-wide transition-colors duration-300">PT ANUGERAH SENANTIASA BERSYUKUR</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md text-center md:text-left leading-relaxed transition-colors duration-300">
              Integrated Industrial Solutions & Equipment Provider. Committed to growing together with our customers since 2026.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 mt-4 md:mt-0">
            <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-asb-gold dark:hover:text-asb-gold transition-colors text-sm font-medium">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-asb-gold dark:hover:text-asb-gold transition-colors text-sm font-medium">About Us</a>
            <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-asb-gold dark:hover:text-asb-gold transition-colors text-sm font-medium">Services</a>
            <a href="#products" className="text-gray-600 dark:text-gray-400 hover:text-asb-gold dark:hover:text-asb-gold transition-colors text-sm font-medium">Products</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-asb-gold dark:hover:text-asb-gold transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 dark:text-gray-500 text-xs md:text-sm text-center md:text-left transition-colors duration-300">
            &copy; 2026 PT ANUGERAH SENANTIASA BERSYUKUR. All Rights Reserved.
          </div>
          <div className="text-gray-500 dark:text-gray-500 text-xs md:text-sm transition-colors duration-300">
            Designed for Industrial Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
