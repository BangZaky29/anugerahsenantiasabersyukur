import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, AlertCircle, LayoutGrid } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

interface Photo {
  id: number;
  filename: string;
  filepath: string;
  url: string;
  mimetype: string;
  size: number;
  category_id: number | null;
  brand_id: number | null;
  category_name: string | null;
  brand_name: string | null;
  brand_external_link?: string | null;
  uploaded_at: string;
}

interface Category {
  id: number;
  name: string;
}

// ─── PHOTO LOGO (SCATTERED) ──────────────────────────────────────────────────
function PhotoLogo({ photo, index }: { photo: Photo; index: number }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Strip unique timestamp suffix from filename for display
  const displayName = photo.filename
    .replace(/\.[^/.]+$/, '')          // remove extension
    .replace(/-\d{13}-\d{4}$/, '')     // remove timestamp suffix
    .replace(/[-_]/g, ' ')             // dashes → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Title Case

  // Create an artificial "scatter" effect by shifting odd/even items up or down
  const translateYObj = {
    0: 'translate-y-0',
    1: '-translate-y-4 lg:-translate-y-8',
    2: 'translate-y-3 lg:translate-y-6',
    3: '-translate-y-2 lg:-translate-y-4',
    4: 'translate-y-4 lg:translate-y-8',
  };
  const scatterClass = translateYObj[(index % 5) as keyof typeof translateYObj];

  if (imgError) return null; // Don't show broken logos in scatter layout

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 120,
        damping: 12
      }}
      className={`group relative flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${scatterClass}`}
      title={displayName}
    >
      <a 
        href={photo.brand_external_link || '#'} 
        target={photo.brand_external_link ? "_blank" : "_self"}
        rel="noreferrer"
        className="relative block dark:bg-white/95 dark:px-4 dark:py-3 dark:rounded-2xl dark:shadow-xl dark:border dark:border-white/20 transition-all duration-300 group-hover:shadow-2xl"
      >
        <img
          src={`${API_URL}/${photo.filepath}`}
          alt={displayName}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`max-h-10 sm:max-h-14 md:max-h-16 lg:max-h-20 w-auto object-contain transition-all duration-700 ${
            imgLoaded ? 'opacity-100 filter-none' : 'opacity-0 blur-md'
          } brightness-100 group-hover:brightness-110 drop-shadow-sm group-hover:drop-shadow-lg`}
        />
      </a>
    </motion.div>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
export function BrandGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null); // null = All
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories for tabs
  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setCategories(data.data.map((c: { id: number; name: string }) => ({ id: c.id, name: c.name })));
      })
      .catch(() => {/* silently ignore — use hardcoded fallback */});
  }, []);

  // Fetch photos
  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = activeCategory
      ? `${API_URL}/api/photos?category_id=${activeCategory}`
      : `${API_URL}/api/photos`;

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (data.success) {
          setPhotos(data.data);
        } else {
          throw new Error(data.message || 'Failed to load photos');
        }
      })
      .catch((err) => {
        setError(err.message || 'Gagal memuat data dari server');
      })
      .finally(() => setLoading(false));
  }, [activeCategory]);

  // ── FILTER TABS ─────────────────────────────────────────────────────
  const tabs = [
    { id: null, label: 'Semua' },
    ...categories.map((c) => ({ id: c.id, label: c.name })),
  ];

  return (
    <section
      id="brand-gallery"
      className="py-28 lg:py-36 bg-asb-white dark:bg-gray-950 section-divider transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-asb-gold/5 blur-[180px] rounded-full -mr-80 -mt-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-asb-green-light/5 blur-[160px] rounded-full -ml-60 -mb-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── SECTION HEADER ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-asb-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Brand Partners
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-asb-green-dark dark:text-white mt-3 leading-tight">
            Our Partners{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-asb-gold to-asb-green-light">
              Showcase
            </span>
          </h2>
          <p className="text-sm text-asb-black/50 dark:text-gray-500 mt-4 leading-relaxed">
            Koleksi lengkap brand unggulan yang kami agen-kan.
            Mesin CNC presisi dan peralatan industri berstandar global.
          </p>
        </motion.div>

        {/* ── FILTER TABS ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-20"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id ?? 'all'}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-asb-green-dark dark:bg-asb-gold text-white dark:text-asb-black shadow-xl scale-105'
                  : 'bg-white dark:bg-gray-800 text-asb-black/50 dark:text-gray-400 hover:text-asb-black/80 dark:hover:text-gray-200 border border-gray-200 dark:border-gray-700/50 hover:border-asb-gold/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ── ERROR STATE ────────────────────────────────────────────── */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center gap-4"
          >
            <div className="w-16 h-16 rounded-3xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
              <AlertCircle size={28} className="text-red-400" />
            </div>
            <div>
              <p className="text-asb-black/70 dark:text-gray-300 font-medium">Gagal memuat galeri</p>
            </div>
            <button
              onClick={() => setActiveCategory(activeCategory)}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-asb-gold hover:text-asb-gold-light transition-colors"
            >
              <RefreshCw size={14} /> Coba lagi
            </button>
          </motion.div>
        )}

        {/* ── ALIGNMENT & SCATTER LOGOS ─────────────────────────────── */}
        {!error && (
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center pt-10"
                >
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-3 h-3 bg-asb-gold rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              ) : photos.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 rounded-[2rem] bg-asb-surface dark:bg-gray-800 flex items-center justify-center shadow-inner mb-6">
                    <LayoutGrid size={32} strokeWidth={1} className="text-asb-black/20 dark:text-gray-600" />
                  </div>
                  <p className="text-asb-black/40 dark:text-gray-600 text-sm font-medium">
                    Belum ada logo terdaftar
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeCategory ?? 'all'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  // Tightly packed flexbox layout to mimic the scattered collage poster
                  className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16 lg:gap-x-16 lg:gap-y-20 max-w-6xl mx-auto px-4"
                >
                  {photos.map((photo, idx) => (
                    <PhotoLogo key={photo.id} photo={photo} index={idx} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
