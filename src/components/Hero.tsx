import { motion } from 'motion/react';
import heroImage from '@/src/assets/kontraktor-1.jpeg';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-asb-green-dark/70 dark:bg-gradient-to-br dark:from-gray-900/95 dark:via-asb-green-dark/80 dark:to-gray-900/95 transition-colors duration-300"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-asb-white dark:text-white mb-6 leading-tight transition-colors duration-300"
        >
          Integrated Industrial Solutions & Equipment Provider Since 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-10 max-w-3xl mx-auto transition-colors duration-300"
        >
          ASB is here to make it easier for you to find the best products that suit your needs, with a commitment to growing together with our customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#products"
            className="inline-block bg-asb-gold dark:bg-gradient-to-r dark:from-asb-gold dark:via-asb-green-light dark:to-asb-green-dark text-asb-black dark:text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-400 dark:hover:scale-105 transition-all shadow-lg dark:border dark:border-white/10"
          >
            Explore Our Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
