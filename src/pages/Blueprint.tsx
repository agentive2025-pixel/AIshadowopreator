import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileText, CheckCircle, Sparkles, Target, Zap } from 'lucide-react';

export default function Blueprint() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const features = [
    { icon: Target, text: 'Proven AI strategies that actually work' },
    { icon: Zap, text: 'Generate quality leads on autopilot' },
    { icon: Sparkles, text: 'Step-by-step implementation guide' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-6"
          >
            <FileText className="w-20 h-20 text-primary mx-auto" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            animate={{
              backgroundImage: [
                'linear-gradient(to right, #8B5CF6, #EC4899)',
                'linear-gradient(to right, #EC4899, #8B5CF6)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Free AI Leads Blueprint
          </motion.h1>
          <p className="text-xl md:text-2xl text-lightGray max-w-3xl mx-auto">
            Discover how to generate high-quality leads using AI automation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  What You'll Get
                </h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-lightGray text-lg">{feature.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-xl border border-primary/20">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Perfect For
                  </h3>
                  <ul className="space-y-2 text-lightGray">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      Business owners looking to scale
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      Entrepreneurs starting their journey
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      Anyone wanting automated lead generation
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card rounded-2xl p-8 h-fit"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Get Your Free Blueprint
                  </h2>
                  <p className="text-lightGray mb-8">
                    Enter your email to receive the complete AI Leads Blueprint instantly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-lightGray mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-lightGray focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white rounded-lg font-semibold text-lg shadow-glow-purple hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      Download Blueprint
                    </motion.button>

                    <p className="text-sm text-lightGray/60 text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Check Your Email!
                  </h3>
                  <p className="text-lightGray text-lg mb-6">
                    Your AI Leads Blueprint is on its way to:
                  </p>
                  <p className="text-primary font-semibold text-xl mb-8">
                    {email}
                  </p>
                  <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                    <p className="text-lightGray text-sm">
                      Don't see it? Check your spam folder or contact us on WhatsApp.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass-card rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Implementing?
            </h3>
            <p className="text-lightGray mb-6">
              Our team can build and manage your entire AI lead generation system for you.
            </p>
            <motion.a
              href="/revenue-share"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border-2 border-primary text-white rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Learn About Revenue Share
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
