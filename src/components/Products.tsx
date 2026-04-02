import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronDown } from 'lucide-react';

interface Brand {
  name: string;
  products: string[];
  description: string;
}

interface Category {
  title: string;
  description: string;
  brands: Brand[];
}

const productsData: Category[] = [
  {
    title: 'Machine Products',
    description: 'Advanced CNC and manufacturing machinery for precision production.',
    brands: [
      { name: 'DN SOLUTIONS', products: ['CNC Milling', 'Lathe Machines'], description: 'Modern manufacturing solutions.' },
      { name: 'MAKINO', products: ['Horizontal Milling', 'EDM Machines'], description: 'Extreme precision engineering.' },
      { name: 'HNK', products: ['Vertical Lathes', 'Boring Machines'], description: 'Specialized heavy-duty machines.' },
      { name: 'KERTZ', products: ['Precision Cutting', 'Milling'], description: 'High-end industrial machinery.' },
      { name: 'TONE FAN', products: ['Radial Drilling', 'Industrial Drills'], description: 'Manufacturing drilling specialists.' },
      { name: 'MAZAK', products: ['Multi-tasking CNC', '5-Axis Machining', 'Turning Centers'], description: 'Global leader in advanced CNC machine tools.' },
      { name: 'BROTHER', products: ['SPEEDIO Tapping Centers', 'High-Speed CNC'], description: 'Compact, high-productivity CNC machining.' },
      { name: 'WELE', products: ['Bridge/Double-Column Machining', 'Boring Machines'], description: 'Large-scale, heavy-duty CNC machinery.' },
      { name: 'SODICK', products: ['Wire & Sinker EDM', 'High-Speed Milling', 'Metal 3D Printing'], description: 'Pioneer in precision Electrical Discharge Machining.' },
      { name: 'HYPERTHERM', products: ['Plasma Cutting Systems', 'CNC Motion Control'], description: 'World leader in industrial cutting solutions.' },
    ],
  },
  {
    title: 'Tools Products',
    description: 'Precision engineering and heavy-duty durability for industrial applications.',
    brands: [
      { name: 'TOPTUL', products: ['Wrench Set', 'Socket Set', 'Torque Tools'], description: 'Chrome Vanadium professional tools.' },
      { name: 'ELORA', products: ['Spanners', 'Pliers', 'Workshops'], description: 'High-end German manufacturing quality.' },
      { name: 'TEKIRO', products: ['Hand Tools', 'Automotive Tools'], description: 'Leading industrial tool brand.' },
      { name: 'MAKITA', products: ['Cordless Drill', 'Grinder', 'Circular Saw'], description: 'Global leader in power tools.' },
      { name: 'BOSCH', products: ['Power Tools', 'Measuring Tools'], description: 'Reliable German engineering.' },
      { name: 'HYTORC', products: ['Hydraulic Torque Wrench', 'Bolt Tensioners'], description: 'The world\'s primary bolting solution.' },
    ],
  },
  {
    title: 'Product Support',
    description: 'Heavy machinery and core equipment for large-scale operations.',
    brands: [
      { name: 'CATERPILLAR', products: ['Excavators', 'Dump Trucks', 'Bulldozers'], description: 'Construction and mining giants.' },
      { name: 'KOMATSU', products: ['Excavators', 'Wheel Loaders'], description: 'High-performance heavy equipment.' },
      { name: 'CUMMINS', products: ['Diesel Engines', 'Power Generators'], description: 'Advanced power solutions.' },
      { name: 'LINCOLN', products: ['Auto Lubrication', 'Welding Gear'], description: 'Industrial maintenance experts.' },
    ],
  },
];

function BrandCard({ brand }: { brand: Brand }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="group cursor-pointer bg-asb-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-asb-gold/30 dark:hover:border-asb-gold/20 transition-all duration-500 overflow-hidden"
    >
      {/* Brand Header */}
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-asb-gold/10 flex items-center justify-center">
            <ShieldCheck size={14} className="text-asb-gold" />
          </div>
          <span className="font-heading text-sm font-bold text-asb-black/80 dark:text-white tracking-tight">
            {brand.name}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-asb-black/30 dark:text-gray-600"
        >
          <ChevronDown size={16} />
        </motion.div>
      </div>

      {/* Expandable Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5 border-t border-gray-50 dark:border-gray-700/50 pt-4">
              <p className="text-xs text-asb-black/50 dark:text-gray-500 mb-3 leading-relaxed">{brand.description}</p>

              <div className="space-y-1.5">
                <p className="text-[10px] font-semibold text-asb-black/30 dark:text-gray-600 uppercase tracking-widest">Products</p>
                {brand.products.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-asb-black/60 dark:text-gray-400">
                    <div className="w-1 h-1 bg-asb-gold rounded-full shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Products() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="py-28 lg:py-36 bg-asb-white dark:bg-gray-950 section-divider transition-colors duration-500 relative overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-asb-gold/3 blur-[150px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-asb-green-light/3 blur-[150px] rounded-full -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-asb-gold text-xs font-semibold uppercase tracking-[0.2em]">Our Partners</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-asb-green-dark dark:text-white mt-3 leading-tight">
            Integrated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-asb-gold to-asb-green-light">Product Range</span>
          </h2>
          <p className="text-sm text-asb-black/50 dark:text-gray-500 max-w-lg mt-4 leading-relaxed">
            ASB provides premium solutions through strategic partnerships with the world's most trusted brands.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {productsData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-asb-green-dark dark:bg-asb-gold text-white dark:text-asb-black shadow-lg'
                  : 'bg-asb-surface dark:bg-gray-800 text-asb-black/50 dark:text-gray-400 hover:text-asb-black/80 dark:hover:text-gray-200'
              }`}
            >
              {category.title}
              {activeTab === idx && (
                <span className="ml-2 text-xs opacity-60">
                  {category.brands.length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              <p className="text-sm text-asb-black/50 dark:text-gray-500">
                {productsData[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {productsData[activeTab].brands.map((brand, bIdx) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: bIdx * 0.05 }}
                >
                  <BrandCard brand={brand} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
