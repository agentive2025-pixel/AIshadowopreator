import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, MessageSquare, DollarSign, BarChart3 } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Eye,
      title: 'Shadow Operating',
      description: 'Complete behind-the-scenes business management',
      features: [
        'Product development',
        'Operations management',
        'Customer support',
        'Tech infrastructure',
      ],
      gradient: 'from-primary via-purple-600 to-pink-600',
    },
    {
      icon: MessageSquare,
      title: 'Content Strategy',
      description: 'High-converting content tailored to your audience',
      features: [
        'Content planning',
        'Copywriting',
        'Brand positioning',
        'Engagement optimization',
      ],
      gradient: 'from-secondary via-blue-500 to-cyan-500',
    },
    {
      icon: DollarSign,
      title: 'Audience Monetization',
      description: 'Turn followers into paying customers',
      features: [
        'Product creation',
        'Pricing strategy',
        'Sales funnels',
        'Payment systems',
      ],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
    },
    {
      icon: BarChart3,
      title: 'Growth Analytics',
      description: 'Data-driven insights that maximize revenue',
      features: [
        'Performance tracking',
        'Revenue optimization',
        'Market analysis',
        'Growth forecasting',
      ],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
    },
  ];

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Smart services, measurable results
          </h2>
          <p className="text-xl text-lightGray max-w-2xl mx-auto">
            Everything you need to build a thriving creator business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                scale: 1.03,
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 70px rgba(139, 92, 246, 0.4)",
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-20`}
                  animate={{
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      rotate: { duration: 0.6 },
                      scale: { duration: 0.3 },
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }
                    }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 shadow-glow-purple relative`}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient}`}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <service.icon className="w-full h-full text-white relative z-10" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-lightGray mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                        className="flex items-center gap-3 text-lightGray"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-8 text-primary font-semibold flex items-center gap-2 group-hover:text-white transition-colors"
                  >
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lightGray text-lg mb-6">
            Customized packages tailored to your goals
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-glow-purple hover:shadow-glow-purple transition-all duration-300"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
