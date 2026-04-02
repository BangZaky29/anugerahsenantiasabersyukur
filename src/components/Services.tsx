import { motion } from 'motion/react';
import { Truck, Microscope, Zap, Monitor, Factory, Droplet } from 'lucide-react';

export function Services() {
  const services = [
    { icon: <Truck size={28} />, title: 'Mining Equipment', desc: 'Heavy-duty equipment and spare parts for mining operations' },
    { icon: <Microscope size={28} />, title: 'Healthcare & Lab', desc: 'Medical and laboratory precision equipment' },
    { icon: <Zap size={28} />, title: 'Electrical & Mechanical', desc: 'Complete electrical and mechanical solutions' },
    { icon: <Monitor size={28} />, title: 'Office & Household', desc: 'Office and household equipment supplier' },
    { icon: <Factory size={28} />, title: 'Industrial Machinery', desc: 'Manufacturing and industrial machinery' },
    { icon: <Droplet size={28} />, title: 'Machine Lubricants', desc: 'Highest quality machine lubricants' },
  ];

  return (
    <section id="services" className="py-28 lg:py-36 bg-asb-surface dark:bg-gray-900 section-divider transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16"
        >
          <div>
            <span className="text-asb-gold text-xs font-semibold uppercase tracking-[0.2em]">What We Do</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-asb-green-dark dark:text-white mt-3 leading-tight">
              Business Fields<br className="hidden sm:block" /> & Services
            </h2>
          </div>
          <p className="text-sm text-asb-black/50 dark:text-gray-500 max-w-sm leading-relaxed">
            We provide integrated solutions across six core industrial sectors.
          </p>
        </motion.div>

        {/* Service Cards — 2-row staggered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-asb-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-asb-gold/40 dark:hover:border-asb-gold/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-asb-green-dark/60 dark:text-asb-green-light/60 group-hover:text-asb-gold transition-colors duration-300 mb-5">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-asb-green-dark dark:text-white mb-2 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-asb-black/50 dark:text-gray-500 leading-relaxed">
                {service.desc}
              </p>

              {/* Subtle accent line at bottom */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-asb-gold/0 via-asb-gold/0 to-asb-gold/0 group-hover:from-asb-gold/0 group-hover:via-asb-gold group-hover:to-asb-gold/0 transition-all duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
