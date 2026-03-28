import { motion } from 'motion/react';
import { Truck, Microscope, Zap, Monitor, Factory, Droplet } from 'lucide-react';

export function Services() {
  const services = [
    { icon: <Truck size={40} />, title: 'Mining Equipment Supplier' },
    { icon: <Microscope size={40} />, title: 'Healthcare & Laboratory Equipment Supplier' },
    { icon: <Zap size={40} />, title: 'Electrical & Mechanical Equipment Supplier' },
    { icon: <Monitor size={40} />, title: 'Office & Household Equipment Supplier' },
    { icon: <Factory size={40} />, title: 'Industrial & Manufacturing Machinery Supplier' },
    { icon: <Droplet size={40} />, title: 'Highest Quality Machine Lubricants Supplier' },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-asb-green-dark dark:text-white mb-4 transition-colors duration-300">Business Fields & Services</h2>
          <div className="w-24 h-1 bg-asb-gold dark:bg-gradient-to-r dark:from-asb-gold dark:via-asb-green-light dark:to-asb-green-dark mx-auto dark:rounded-full transition-all duration-300"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-asb-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl hover:border-asb-gold dark:hover:border-asb-gold hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-asb-green-dark dark:text-asb-green-light mb-6 group-hover:scale-110 group-hover:text-asb-gold dark:group-hover:text-asb-gold transition-all shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-asb-green-dark dark:text-white leading-snug transition-colors duration-300">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
