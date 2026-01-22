import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Wrench, Rocket } from 'lucide-react';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover Your Path',
      description: 'We help you identify the best way to monetize your skills—no guessing',
      code: `// Find your niche
const yourPath = {
  skills: ['your talents'],
  market: 'ready buyers',
  income: '$500-2000/mo'
};`,
      color: 'from-primary to-purple-600',
    },
    {
      icon: Wrench,
      number: '02',
      title: 'Set Up Your System',
      description: 'We build and configure all the automation tools you need—done for you',
      code: `// Setup automation
const tools = {
  scheduling: 'auto',
  invoicing: 'auto',
  followUps: 'auto'
};`,
      color: 'from-secondary to-blue-600',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Start Earning',
      description: 'Get your first clients with our proven strategies and ongoing support',
      code: `// Launch & grow
const results = {
  week1: 'first client',
  month1: '$500-1000',
  month3: '$1500+ steady'
};`,
      color: 'from-primary to-pink-600',
    },
  ];

  return (
    <section ref={ref} className="py-32 relative bg-deepBlack/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Path to Income in 3 Simple Steps
          </h2>
          <p className="text-xl text-lightGray max-w-2xl mx-auto">
            A clear roadmap from complete beginner to earning your first income
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 30px 80px rgba(139, 92, 246, 0.4)",
              }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.12 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${step.color} rounded-full blur-3xl`}
                  animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  style={{ opacity: 0.15 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: 360,
                      }}
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
                          delay: index * 0.4,
                        }
                      }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${step.color} relative`}
                    >
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color}`}
                        animate={{
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <step.icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                    <motion.span
                      className="text-5xl font-bold text-white/10"
                      animate={{
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {step.number}
                    </motion.span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lightGray mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="bg-black/50 rounded-lg p-4 border border-white/5">
                    <pre className="text-sm text-secondary overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"
                    />
                  </div>
                )}
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
          <p className="text-lightGray text-lg">
            Most beginners see their first income within{' '}
            <span className="text-primary font-bold">2-4 weeks</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
