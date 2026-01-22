import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 11, 30, 0)', 'rgba(10, 11, 30, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg border-b border-white/10' : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white flex items-center"
          >
            AI <span className="relative inline-flex items-center justify-center w-7 h-7 mx-0.5 rounded-full border border-[#FF6B6B] before:content-[''] before:absolute before:w-px before:h-3 before:bg-[#FF6B6B] before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1">O</span>perator
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-lightGray hover:text-white transition-colors font-medium"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/YOUR_PHONE_NUMBER?text=Hello%2C%20I%27m%20interested%20in%20learning%20more"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold shadow-glow-purple hover:shadow-glow-purple transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-darkBg/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lightGray hover:text-white transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER?text=Hello%2C%20I%27m%20interested%20in%20learning%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold text-center"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
