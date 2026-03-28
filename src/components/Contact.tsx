import { motion } from 'motion/react';
import { MapPin, Phone, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-asb-green-dark dark:text-white mb-4 transition-colors duration-300">Contact Us</h2>
          <div className="w-24 h-1 bg-asb-gold dark:bg-gradient-to-r dark:from-asb-gold dark:via-asb-green-light dark:to-asb-green-dark mx-auto dark:rounded-full transition-all duration-300"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-asb-white dark:bg-gray-900 p-3 rounded-full text-asb-gold shrink-0 border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-inner transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-asb-green-dark dark:text-white mb-1 transition-colors duration-300">Location</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  JL. DERMAGA TEGAL AMBA NO. 93 RT. 014 RW. 011, KLENDER,<br/>
                  DUREN SAWIT, KOTA ADM. JAKARTA TIMUR, DKI JAKARTA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-asb-white dark:bg-gray-900 p-3 rounded-full text-asb-gold shrink-0 border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-inner transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-asb-green-dark dark:text-white mb-1 transition-colors duration-300">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">0852-7020-1945 (Sales Director)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-asb-white dark:bg-gray-900 p-3 rounded-full text-asb-gold shrink-0 border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-inner transition-colors duration-300">
                <Instagram size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-asb-green-dark dark:text-white mb-1 transition-colors duration-300">Instagram</h4>
                <a href="https://www.instagram.com/anugerahsenantiasabersyukur/" target="_blank" rel="noreferrer" className="text-asb-green-dark dark:text-asb-green-light hover:text-asb-gold dark:hover:text-asb-gold transition-colors">
                  @anugerahsenantiasabersyukur
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.287477665485!2d106.89868731476916!3d-6.225785995493264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f35c5c5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sJl.%20Dermaga%20Raya%2C%20Klender%2C%20Kec.%20Duren%20Sawit%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PT ASB"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
