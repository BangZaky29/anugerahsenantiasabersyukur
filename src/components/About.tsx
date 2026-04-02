import { motion, useInView } from 'motion/react';
import { ThumbsUp, Wrench, TrendingUp } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  const points = [
    { icon: <ThumbsUp size={24} />, title: 'Customer Satisfaction', desc: 'Our top priority is providing comfort and satisfaction with every product.' },
    { icon: <Wrench size={24} />, title: 'After-Sales Service', desc: 'Full support after purchase for various industries.' },
    { icon: <TrendingUp size={24} />, title: 'Growing Together', desc: 'Committed to becoming a company that grows alongside our partners.' },
  ];

  const stats = [
    { value: 6, suffix: '+', label: 'Industries' },
    { value: 15, suffix: '+', label: 'Premium Brands' },
    { value: 100, suffix: '%', label: 'Customer Focus' },
  ];

  return (
    <section id="about" className="py-28 lg:py-36 bg-asb-white dark:bg-gray-950 relative overflow-hidden section-divider transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-asb-gold text-xs font-semibold uppercase tracking-[0.2em]">About Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-asb-green-dark dark:text-white mt-3 leading-tight">
            PT Anugerah<br className="hidden sm:block" /> Senantiasa Bersyukur
          </h2>
        </motion.div>

        {/* Main Content — Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="text-base text-asb-black/70 dark:text-gray-400 leading-relaxed space-y-5">
              <p>
                PT Anugerah Senantiasa Bersyukur (ASB) is a company established in 2026. We operate across multiple sectors including Mining Equipment, Healthcare & Laboratory, Electrical & Mechanical, and Industrial Manufacturing Machinery.
              </p>
              <p>
                Our company's purpose is to facilitate customers' search for products that meet their needs, with full after-sales support across various industries.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100 dark:border-gray-800">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-asb-green-dark dark:text-asb-gold">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-asb-black/50 dark:text-gray-500 font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Value Cards (Bento-ish) */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-asb-surface dark:bg-gray-900 border border-transparent hover:border-asb-gold/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-asb-gold/10 dark:bg-asb-gold/5 flex items-center justify-center text-asb-gold shrink-0 group-hover:bg-asb-gold/20 transition-colors duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-asb-green-dark dark:text-white mb-1">{point.title}</h3>
                  <p className="text-sm text-asb-black/60 dark:text-gray-400 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
