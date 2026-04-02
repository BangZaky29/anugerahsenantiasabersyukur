import { motion } from 'framer-motion';
import logo from '@/src/assets/logo-3.png';

export function LoadingScreen() {
  const companyName = "ANUGERAH SENANTIASA BERSYUKUR";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-asb-white dark:bg-gray-950"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-32 h-32 sm:w-40 sm:h-40"
        >
          <img
            src={logo}
            alt="PT ASB Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Company Name — letter by letter */}
        <div className="flex flex-wrap justify-center gap-[2px] px-4 max-w-md">
          {companyName.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3 + i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xs sm:text-sm font-heading font-semibold tracking-[0.2em] text-asb-green-dark dark:text-asb-gold"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        {/* Progress bar */}
        <motion.div className="w-32 h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-to-r from-asb-gold to-asb-green-light rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
