import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', platform: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

      <motion.div
        animate={{
          scale: [1, 1.4, 1.1, 1],
          rotate: [0, 180, 360],
          x: [0, 50, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1.2, 1],
          rotate: [360, 180, 0],
          x: [0, -50, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.6, 0.9, 1],
          rotate: [0, 360],
          x: [0, 100, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to start your income journey?
          </h2>
          <p className="text-xl text-lightGray max-w-2xl mx-auto">
            Book a free consultation and we'll show you exactly how to turn your skills into steady income—even if you're just starting out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
            whileHover={{
              boxShadow: "0 30px 90px rgba(139, 92, 246, 0.4)",
            }}
          >
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                rotate: [360, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative z-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-lightGray focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-lightGray focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="platform" className="block text-white font-semibold mb-2">
                    Main Platform
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="bg-darkBg">Select a platform</option>
                    <option value="youtube" className="bg-darkBg">YouTube</option>
                    <option value="instagram" className="bg-darkBg">Instagram</option>
                    <option value="tiktok" className="bg-darkBg">TikTok</option>
                    <option value="twitter" className="bg-darkBg">Twitter/X</option>
                    <option value="linkedin" className="bg-darkBg">LinkedIn</option>
                    <option value="other" className="bg-darkBg">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    What skills do you want to monetize?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-lightGray focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your skills and what kind of income you'd like to create..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white rounded-lg font-semibold text-lg shadow-glow-purple hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Thanks for reaching out!
                </h3>
                <p className="text-lightGray text-lg">
                  We'll get back to you within 24 hours with a personalized plan for your success.
                </p>
              </motion.div>
            )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-lightGray">
              Prefer email?{' '}
              <a href="mailto:hello@aiopreator.com" className="text-primary hover:text-white transition-colors font-semibold">
                hello@aiopreator.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
