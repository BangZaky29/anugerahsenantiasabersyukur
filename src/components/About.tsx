import { motion } from 'motion/react';
import { ThumbsUp, Wrench, TrendingUp } from 'lucide-react';

export function About() {
  const points = [
    { icon: <ThumbsUp size={32} />, title: 'Customer Satisfaction', desc: 'Our top priority is providing comfort and satisfaction with every product.' },
    { icon: <Wrench size={32} />, title: 'After-Sales Service', desc: 'Full support after purchase for various industries.' },
    { icon: <TrendingUp size={32} />, title: 'Growing Together', desc: 'Committed to becoming a company that grows alongside our partners.' },
  ];

  return (
    <section id="about" className="py-24 bg-asb-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Logo Background */}
      <div className="absolute -right-20 top-20 opacity-5 pointer-events-none hidden md:block">
        <div className="w-96 h-96 bg-asb-green-dark dark:bg-gradient-to-br dark:from-asb-gold dark:to-asb-green-dark rounded-full flex items-center justify-center text-9xl font-bold text-asb-white dark:text-white transition-colors duration-300">
          ASB
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-asb-green-dark dark:text-white mb-4 transition-colors duration-300">About PT ANUGERAH SENANTIASA BERSYUKUR</h2>
          <div className="w-24 h-1 bg-asb-gold dark:bg-gradient-to-r dark:from-asb-gold dark:via-asb-green-light dark:to-asb-green-dark mx-auto dark:rounded-full transition-all duration-300"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 transition-colors duration-300"
          >
            <p>
              PT Anugerah Senantiasa Bersyukur (ASB) is a company established in 2026. We operate in the following fields: Mining Equipment Supplier, including heavy equipment and other products; Healthcare and Laboratory Equipment Supplier; Electrical and Mechanical Equipment Supplier; Office and Household Equipment Supplier; Industrial and Manufacturing Machinery Supplier; and the highest quality Machine Lubricants Supplier.
            </p>
            <p>
              Our company's purpose is to facilitate customers' search for products that meet their needs. We also offer after-sales service for various industries, including machinery, electrical equipment, and other equipment.
            </p>
            <p>
              Providing customer satisfaction with the products they purchase from us is our priority, as we strive to become a company that can grow together with our customers.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 border-asb-gold shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-xl dark:hover:bg-gray-800/80 transition-all duration-300">
                <div className="text-asb-green-dark dark:text-asb-green-light mt-1 shrink-0 transition-colors duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-asb-green-dark dark:text-white mb-2 transition-colors duration-300">{point.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{point.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
