import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Monetize Your Audience Quietly and Efficiently While We Handle Everything Behind the Scenes';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-dark" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.4, 1.1, 1],
          x: [0, 80, -20, 0],
          y: [0, 50, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.5, 1.2, 1],
          x: [0, -80, 30, 0],
          y: [0, -50, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-15"
        animate={{
          scale: [1, 1.6, 0.9, 1],
          x: [-100, 100, -50, -100],
          y: [-50, 50, -100, -50],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-lightGray mb-12 max-w-3xl mx-auto"
          >
            We build and manage complete digital product ecosystems for creators—so you can focus on your content while we handle the business
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-glow-purple hover:shadow-glow-purple transition-all duration-300 flex items-center gap-2 group"
            >
              Start Chat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
            >
              <Play className="w-5 h-5" />
              View Services
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '200+', label: 'Creators' },
              { value: '$38M+', label: 'Generated' },
              { value: '15+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(139, 92, 246, 0.3)",
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }
                }}
                className="glass-card rounded-xl p-6 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lightGray">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
