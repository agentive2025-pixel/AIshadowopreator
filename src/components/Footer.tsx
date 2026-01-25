import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Youtube, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Process: ['Discovery', 'Build', 'Launch', 'Scale'],
    Services: ['Shadow Operating', 'Content Strategy', 'Monetization', 'Analytics'],
    Benefits: ['Effortless', 'Proven', 'Shared Success', 'Results'],
    Company: ['About', 'Careers', 'Blog', 'Contact'],
  };

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/201020146311?text=Hi%20REVENUE%20Share%20from%20aioperator.com', label: 'WhatsApp', external: true },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <h3 className="text-3xl font-bold text-white">AI Operator</h3>
            </motion.div>
            <p className="text-lightGray mb-6 leading-relaxed">
              Helping beginners turn their skills into steady income with AI automation. Simple, supportive, and proven to work.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={(social as any).external ? '_blank' : undefined}
                  rel={(social as any).external ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-lightGray hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-lightGray hover:text-white transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lightGray text-sm">
              © {new Date().getFullYear()} AI Operator. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-lightGray text-sm">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:hello@aiopreator.com"
                className="hover:text-primary transition-colors"
              >
                hello@aiopreator.com
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-lightGray hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-lightGray hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
}
