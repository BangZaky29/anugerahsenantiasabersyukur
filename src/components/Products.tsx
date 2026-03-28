import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ShieldCheck, Box } from 'lucide-react';

interface Brand {
  name: string;
  logo?: string;
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
    title: 'Tools Products',
    description: 'Precision engineering and heavy-duty durability for industrial applications.',
    brands: [
      { name: 'TOPTUL', products: ['Wrench Set', 'Socket Set', 'Torque Tools'], description: 'Chrome Vanadium professional tools.' },
      { name: 'ELORA', products: ['Spanners', 'Pliers', 'Workshops'], description: 'High-end German manufacturing quality.' },
      { name: 'TEKIRO', products: ['Hand Tools', 'Automotive Tools'], description: 'Leading industrial tool brand.' },
      { name: 'MAKITA', products: ['Cordless Drill', 'Grinder', 'Circular Saw'], description: 'Global leader in power tools.' },
      { name: 'BOSCH', products: ['Power Tools', 'Measuring Tools'], description: 'Reliable German engineering.' },
      { name: 'HYTORC', products: ['Hydraulic Torque Wrench', 'Bolt Tensioners'], description: 'The worlds primary bolting solution.' },
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
  {
    title: 'Machine Products',
    description: 'Advanced CNC and manufacturing machinery for precision production.',
    brands: [
      { name: 'DN SOLUTIONS', products: ['CNC Milling', 'Lathe Machines'], description: 'Modern manufacturing solutions.' },
      { name: 'MAKINO', products: ['Horizontal Milling', 'EDM Machines'], description: 'Extreme precision engineering.' },
      { name: 'HNK', products: ['Vertical Lathes', 'Boring Machines'], description: 'Specialized heavy-duty machines.' },
      { name: 'KERTZ', products: ['Precision Cutting', 'Milling'], description: 'High-end industrial machinery.' },
      { name: 'TONE FAN', products: ['Radial Drilling', 'Industrial Drills'], description: 'Manufacturing drilling specialists.' },
    ],
  },
];

const BrandCard = ({ brand }: { brand: Brand }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="group relative cursor-pointer bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-500 overflow-hidden"
      >
        {/* Placeholder for Logo - In a real app, replace with <img src={brand.logo} /> */}
        <div className="flex flex-col items-center justify-center h-24 sm:h-32 transition-all duration-500 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:opacity-100">
          <div className="w-12 h-12 mb-3 rounded-full bg-asb-gold/10 flex items-center justify-center text-asb-gold opacity-40 group-hover:opacity-100 transition-opacity">
            <Award size={24} />
          </div>
          <span className="text-xl font-bold text-gray-400 group-hover:text-asb-green-dark dark:group-hover:text-asb-gold transition-colors tracking-tight">
            {brand.name}
          </span>
        </div>

        {/* Brand Popover Info */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 bg-asb-green-dark/95 dark:bg-asb-green-dark/95 p-6 flex flex-col justify-center text-white z-20"
            >
              <h4 className="font-bold text-asb-gold mb-2 text-lg uppercase tracking-wider">{brand.name}</h4>
              <p className="text-xs text-gray-200 mb-4 line-clamp-2">{brand.description}</p>
              
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Featured Products:</p>
                {brand.products.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-1 h-1 bg-asb-gold rounded-full" />
                    <span className="font-medium">{p}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-bold">
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-asb-gold" /> GENUINE</span>
                <span className="flex items-center gap-1 active:text-asb-gold transition-colors">EXPLORE <ExternalLink size={10} /></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export function Products() {
  return (
    <section id="products" className="py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background logo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-asb-gold/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-asb-green-light/5 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asb-gold/10 border border-asb-gold/20 text-asb-gold text-[10px] font-bold uppercase tracking-widest mb-4">
            <Box size={14} /> Global Industrial Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-asb-green-dark dark:text-white mb-6 tracking-tight">
            Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-asb-gold to-asb-green-light">Product Range</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            ASB provides premium solutions for mining, healthcare, and manufacturing through strategic partnerships with the worlds most trusted brands.
          </p>
        </motion.div>

        <div className="space-y-24">
          {productsData.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-black text-asb-green-dark dark:text-white mb-2 uppercase tracking-tighter">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800 mx-8 hidden lg:block" />
                <span className="text-xs font-bold text-asb-gold tracking-widest whitespace-nowrap">
                  {category.brands.length} PREMIIUM BRANDS
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.brands.map((brand, bIdx) => (
                  <BrandCard key={bIdx} brand={brand} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
