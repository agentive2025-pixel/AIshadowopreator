import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Creator',
      content: 'AI Operator transformed my content into a $500K/year business. They handled everything while I focused on creating. Best decision I ever made.',
      rating: 5,
      revenue: '+$500K',
    },
    {
      name: 'Marcus Chen',
      role: 'Tech Influencer',
      content: 'From idea to launch in 5 weeks. The team built my entire digital product ecosystem and it just works. Revenue has been growing every month.',
      rating: 5,
      revenue: '+$280K',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lifestyle Blogger',
      content: 'I was skeptical about outsourcing my business operations, but AI Operator proved me wrong. They understand creators and execute flawlessly.',
      rating: 5,
      revenue: '+$350K',
    },
    {
      name: 'David Park',
      role: 'Business Coach',
      content: 'The ROI is insane. They built funnels, products, and systems that generate passive income. I focus on coaching, they handle the business.',
      rating: 5,
      revenue: '+$720K',
    },
    {
      name: 'Jessica Thompson',
      role: 'Fashion Creator',
      content: 'Finally, a team that gets creators. No hand-holding needed, they just execute. My community loves the products they developed.',
      rating: 5,
      revenue: '+$425K',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Creator Success Stories
          </h2>
          <p className="text-xl text-lightGray max-w-2xl mx-auto">
            Real results from creators who trusted us with their business
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="glass-card rounded-3xl p-12 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
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
                className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <Star className="w-6 h-6 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                <blockquote className="text-2xl text-white font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-lightGray">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>

                  <div className="glass-card px-6 py-3 rounded-full">
                    <div className="text-2xl font-bold text-primary">
                      {testimonials[currentIndex].revenue}
                    </div>
                    <div className="text-xs text-lightGray">Revenue Generated</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20"
        >
          {[
            { value: '98%', label: 'Success Rate' },
            { value: '4.9/5', label: 'Client Rating' },
            { value: '$38M+', label: 'Revenue Generated' },
            { value: '200+', label: 'Happy Creators' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              className="text-center relative group"
            >
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-lightGray">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
