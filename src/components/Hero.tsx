import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import heroImage from '@/src/assets/kontraktor-1.jpeg';

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-asb-green-dark/90 via-asb-green-dark/70 to-asb-green-dark/40 dark:from-gray-950/95 dark:via-gray-950/80 dark:to-gray-950/50" />
        {/* Bottom fade to content */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-asb-white dark:from-gray-950 to-transparent" />
      </motion.div>

      {/* Content — Left-aligned, editorial */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm"
          >
            Integrated Industrial Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Equipment Provider
            <span className="block text-asb-gold mt-1">Since 2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-lg"
          >
            ASB is here to make it easier for you to find the best industrial products, with a commitment to growing together with our customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-asb-gold text-asb-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-asb-gold-light transition-all duration-300 shadow-lg shadow-asb-gold/20"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
