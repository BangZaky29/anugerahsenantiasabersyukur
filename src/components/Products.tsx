import { motion } from 'motion/react';

export function Products() {
  const categories = [
    {
      title: 'Tools Products',
      brands: ['TOPTUL', 'ELORA', 'TEKIRO', 'MAKITA', 'BOSCH', 'HYTORC']
    },
    {
      title: 'Product Support',
      brands: ['CATERPILLAR', 'KOMATSU', 'CUMMINS', 'LINCOLN']
    },
    {
      title: 'Machine Products',
      brands: ['DN SOLUTIONS', 'HNK', 'TONE FAN', 'KERTZ', 'MAKINO']
    }
  ];

  return (
    <section id="products" className="py-24 bg-asb-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-asb-green-dark dark:text-white mb-4 transition-colors duration-300">Our Products</h2>
          <div className="w-24 h-1 bg-asb-gold dark:bg-gradient-to-r dark:from-asb-gold dark:via-asb-green-light dark:to-asb-green-dark mx-auto dark:rounded-full transition-all duration-300"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">Partnering with leading global brands to provide the best quality for your industrial needs.</p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-asb-green-dark dark:text-white mb-8 text-center md:text-left border-b border-gray-200 dark:border-gray-800 pb-2 transition-colors duration-300">{category.title}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                {category.brands.map((brand, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-lg shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 tracking-wider hover:border-asb-gold dark:hover:border-asb-gold hover:text-asb-green-dark dark:hover:text-white hover:shadow-asb-gold/10 hover:shadow-lg transition-all min-w-[140px] text-center"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
