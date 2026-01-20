import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Handshake } from 'lucide-react';

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: 'Effortless Monetization',
      description: 'We handle product creation, pricing, payments, and marketing',
      details: [
        'Zero operational overhead',
        'Automated systems',
        'Professional execution',
        'Continuous optimization',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Proven Growth Strategies',
      description: 'Fully optimized launch plans that maximize sales',
      details: [
        'Data-driven decisions',
        'Tested frameworks',
        'Market-validated approach',
        'Rapid iteration',
      ],
      gradient: 'from-primary to-pink-600',
    },
    {
      icon: Handshake,
      title: 'Shared Success',
      description: 'We only succeed when you do—percentage-based profit sharing',
      details: [
        'Aligned incentives',
        'No upfront costs',
        'Performance-based',
        'Long-term partnership',
      ],
      gradient: 'from-secondary to-blue-600',
    },
  ];

  return (
    <section ref={ref} className="py-32 relative bg-deepBlack/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Maximize efficiency and impact
          </h2>
          <p className="text-xl text-lightGray max-w-2xl mx-auto">
            Focus on what you do best while we handle the rest
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-5 mb-6 shadow-lg`}
                  >
                    <benefit.icon className="w-full h-full text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-lightGray mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="space-y-3">
                    {benefit.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.gradient}`} />
                        <span className="text-lightGray text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass-card rounded-3xl p-12 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Your Success Is Our Business Model
          </h3>
          <p className="text-lightGray text-lg mb-8">
            We take a percentage of revenue generated, ensuring our goals are perfectly aligned with yours. No revenue? No fee.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white rounded-lg font-semibold shadow-glow-purple hover:shadow-glow-purple transition-all duration-300"
          >
            See Pricing Structure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
