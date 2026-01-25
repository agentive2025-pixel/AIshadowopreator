import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, DollarSign, Users, TrendingUp, MessageCircle } from 'lucide-react';

export default function RevenueShare() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    leadsPerMonth: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const benefits = [
    { icon: DollarSign, text: 'No upfront costs or hidden fees' },
    { icon: Users, text: 'We build your complete system' },
    { icon: TrendingUp, text: 'Pay only from your profits' },
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
            No Upfront Fees | 50% Revenue Share
          </motion.h1>
          <p className="text-xl md:text-2xl text-lightGray max-w-3xl mx-auto">
            We invest in building your success. You only pay when you profit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Revenue Share Works
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lightGray text-lg">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-3">
                  How It Works
                </h3>
                <p className="text-lightGray leading-relaxed">
                  We cover all setup costs, development, tools, and ongoing management.
                  You keep 50% of all revenue generated. We only succeed when you succeed.
                </p>
              </div>

              <motion.a
                href="https://wa.me/201020146311?text=Hi%20REVENUE%20Share%20from%20aioperator.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Start Your Journey
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lightGray mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-lightGray focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lightGray mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-lightGray focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="leads" className="block text-lightGray mb-2 font-medium">
                      Leads Per Month
                    </label>
                    <input
                      type="text"
                      id="leads"
                      required
                      value={formData.leadsPerMonth}
                      onChange={(e) => setFormData({ ...formData, leadsPerMonth: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-lightGray focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., 100-500"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white rounded-lg font-semibold text-lg shadow-glow-purple hover:shadow-glow-purple transition-all duration-300"
                  >
                    Submit & Book Call
                  </motion.button>
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
                <h3 className="text-2xl font-bold text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-lightGray mb-8">
                  We've received your information. Book a 15-minute call below to discuss your revenue share opportunity.
                </p>
              </motion.div>
            )}

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Schedule Your 15-Min Revenue Call
              </h3>
              <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <p className="text-lightGray mb-4">Calendly Embed</p>
                  <p className="text-sm text-lightGray/60">
                    Replace this with your Calendly embed code
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
