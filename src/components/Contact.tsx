import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const contactItems = [
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      content: 'JL. Dermaga Tegal Amba No. 93, Klender, Duren Sawit, Jakarta Timur, DKI Jakarta',
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      content: '0852-7020-1945',
      extra: 'Sales Director',
    },
    {
      icon: <Mail size={20} />,
      title: 'Email',
      content: 'bersyukuranugerahsenantiasa@gmail.com',
      href: 'mailto:bersyukuranugerahsenantiasa@gmail.com',
    },
    {
      icon: <Instagram size={20} />,
      title: 'Instagram',
      content: '@anugerahsenantiasabersyukur',
      href: 'https://www.instagram.com/anugerahsenantiasabersyukur/',
    },
  ];

  return (
    <section id="contact" className="py-28 lg:py-36 bg-asb-surface dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-asb-gold text-xs font-semibold uppercase tracking-[0.2em]">Get in Touch</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-asb-green-dark dark:text-white mt-3 leading-tight">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-asb-gold/10 dark:bg-asb-gold/5 flex items-center justify-center text-asb-gold shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-asb-black/40 dark:text-gray-500 uppercase tracking-wider mb-1">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm text-asb-green-dark dark:text-gray-300 hover:text-asb-gold dark:hover:text-asb-gold transition-colors break-all"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-asb-black/70 dark:text-gray-300 leading-relaxed">{item.content}</p>
                  )}
                  {item.extra && (
                    <span className="text-xs text-asb-black/40 dark:text-gray-500">{item.extra}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="https://wa.me/6285270201945"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-asb-green-dark dark:bg-asb-gold text-white dark:text-asb-black font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Send Us a Message
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 h-[350px] lg:h-[450px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
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
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
