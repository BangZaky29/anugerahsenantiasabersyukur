import { motion } from 'framer-motion';
import logo from '@/src/assets/logo-3.png';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-asb-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="flex flex-col items-center gap-12">
        {/* Logo Container */}
        <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
          {/* Animated Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-2 border-dashed border-asb-gold/40 dark:border-asb-gold/20 rounded-full opacity-70"
          />
          
          {/* Second Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-4 border border-asb-gold/20 dark:border-asb-gold/10 rounded-full opacity-50"
          />
          
          {/* Logo with Breathing Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.95, 1.05, 0.95],
              opacity: 1 
            }}
            transition={{ 
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              opacity: {
                duration: 0.5
              }
            }}
            className="relative z-10 flex items-center justify-center w-full h-full p-8 sm:p-10"
          >
            <img 
              src={logo} 
              alt="PT ASB Logo" 
              className="w-full h-full object-contain filter drop-shadow-2xl" 
            />
          </motion.div>
        </div>

        {/* Loading Text/Indicator */}
        <div className="flex flex-col items-center gap-3">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-1 bg-asb-gold dark:bg-gradient-to-r dark:from-asb-gold dark:to-asb-green-light rounded-full"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-asb-green-dark dark:text-asb-gold text-xs font-bold tracking-[0.3em] uppercase"
          >
            Initializing...
          </motion.span>
        </div>
      </div>

      {/* Background Subtle Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-asb-gold blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-asb-green-light blur-[120px] rounded-full" />
      </div>
    </motion.div>
  );
}
