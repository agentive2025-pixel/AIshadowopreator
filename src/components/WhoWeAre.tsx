import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-semibold text-sm">
              Trusted by 200+ Creators
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Who We Are
          </h2>

          <p className="text-xl text-lightGray max-w-3xl mx-auto">
            We help creators monetize their audience quietly and efficiently — while we handle everything behind the scenes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          {[
            {
              icon: Users,
              value: '200+',
              label: 'Clients',
              description: 'Creators trust us with their business',
              color: 'text-primary',
            },
            {
              icon: TrendingUp,
              value: '$38M+',
              label: 'Generated',
              description: 'Revenue created for our clients',
              color: 'text-secondary',
            },
            {
              icon: Shield,
              value: '15+',
              label: 'Team Members',
              description: 'Experts working for your success',
              color: 'text-primary',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <stat.icon className={`w-12 h-12 ${stat.color} mb-6`} />

                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-5xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>

                <div className="text-2xl font-semibold text-white mb-3">
                  {stat.label}
                </div>

                <div className="text-lightGray">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass-card rounded-3xl p-12 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Built for Creators, Run by Operators
              </h3>
              <p className="text-lightGray text-lg leading-relaxed">
                We're a team of business operators, marketers, and developers who specialize in turning creator influence into sustainable revenue streams. While you focus on creating content, we build and manage the entire business infrastructure.
              </p>
            </div>

            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass-card rounded-2xl p-8 space-y-4"
              >
                {[
                  { label: 'Success Rate', value: '98%' },
                  { label: 'Avg. Growth', value: '340%' },
                  { label: 'Client Retention', value: '94%' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-lightGray">{item.label}</span>
                    <span className="text-2xl font-bold text-primary">{item.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
