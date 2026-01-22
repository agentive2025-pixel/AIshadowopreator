import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What exactly is the revenue share?",
      answer: "We only make money when you make money. Our typical revenue share is 20-40% of sales from the products and systems we build together. Your existing income streams stay 100% yours."
    },
    {
      question: "Do I pay anything besides revenue share?",
      answer: "$0 upfront, $0 monthly fees. We cover all setup costs, tools, and development expenses. You only pay from the profits we help create together."
    },
    {
      question: "How much of my time does this require?",
      answer: "Minimal. We handle 95% of the work. You'll spend about 2-3 hours per month on quick reviews and approvals. We designed this so you can focus on creating content."
    },
    {
      question: "What types of products do you build?",
      answer: "We create digital products that fit your audience—courses, templates, tools, memberships, or automated services. Everything is customized to what your audience actually needs and will buy."
    },
    {
      question: "What if I'm just starting out?",
      answer: "Perfect! We love working with beginners. As long as you have a skill or knowledge to share, we can help you build an audience and monetize from day one. No existing following required."
    },
    {
      question: "How long until I see results?",
      answer: "Most clients see their first sales within 14 days to 1 month. We focus on quick wins first, then scale up. Every business is different, but we're committed to showing progress fast."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We're not an agency—we're partners. No upfront fees, no monthly costs. We build, manage, and optimize everything while you focus on content. We succeed only when you succeed."
    }
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />

      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-lightGray max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mt-1"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-primary" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 text-lightGray leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lightGray text-lg mb-6">
            Still have questions? We'd love to chat!
          </p>
          <motion.a
            href="https://wa.me/YOUR_PHONE_NUMBER?text=Hello%2C%20I%27m%20interested%20in%20learning%20more"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-glow-purple hover:shadow-glow-purple transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
