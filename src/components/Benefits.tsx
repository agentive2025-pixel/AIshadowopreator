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
      title: 'Beginner-Friendly',
      description: 'No tech skills or business experience needed—we guide you',
      details: [
        'Step-by-step tutorials',
        'Simple tools & systems',
        'Friendly support team',
        'Learn as you earn',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Fast Results',
      description: 'Get your first client within 2-4 weeks with our proven system',
      details: [
        'Quick setup process',
        'Tested strategies',
        'Clear action steps',
        'Real income fast',
      ],
      gradient: 'from-primary to-pink-600',
    },
    {
      icon: Handshake,
      title: 'Revenue-Share Model',
      description: 'Pay only 20-40% of sales—$0 upfront, $0 monthly',
      details: [
        'No upfront costs',
        'No monthly fees',
        'Pay from profits only',
        'We succeed when you do',
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
            Why beginners love working with us
          </h2>
          <p className="text-xl text-lightGray max-w-2xl mx-auto">
            We make starting your online business simple, supportive, and stress-free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -15,
                scale: 1.02,
                rotateZ: 2,
                boxShadow: "0 30px 80px rgba(139, 92, 246, 0.5)",
              }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"
                />

                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }
                  }}
                  className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br ${benefit.gradient} rounded-full blur-3xl opacity-10`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      scale: { type: "spring", stiffness: 300 },
                      rotate: { type: "spring", stiffness: 300 },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }
                    }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-5 mb-6 shadow-lg relative`}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient}`}
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <benefit.icon className="w-full h-full text-white relative z-10" />
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
            Start Earning in Weeks, Not Months
          </h3>
          <p className="text-lightGray text-lg mb-8">
            Join 150+ beginners who've built sustainable income streams with our simple, proven system. Your success is our priority.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white rounded-lg font-semibold shadow-glow-purple hover:shadow-glow-purple transition-all duration-300"
          >
            View Our Plans
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
