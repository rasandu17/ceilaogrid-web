import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AR land analysis work?",
      answer: "Our AR technology uses your device's camera to scan and measure your garden space. Simply point your camera at your garden area, and the app will create a detailed 3D map with measurements and suggestions for optimal plant placement.",
      icon: "🌐"
    },
    {
      question: "What kind of gardening recommendations does Ceilao.Grid provide?",
      answer: "Based on factors like soil type, sunlight exposure, local climate, and your gardening goals, we provide suitable plant suggestions, optimal planting times, and care instructions tailored to your specific garden conditions.",
      icon: "🤖"
    },
    {
      question: "Is the marketplace feature available worldwide?",
      answer: "The marketplace is currently available in select regions. We're continuously expanding our coverage to connect more gardeners with local buyers and create sustainable local food networks.",
      icon: "🌍"
    },
    {
      question: "Do I need special equipment to use Ceilao.Grid?",
      answer: "No special equipment needed! Just a smartphone with a camera for the AR features. Our app works with most modern Android and iOS devices.",
      icon: "📱"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about Ceilao.Grid</p>
          <div className="tech-line"></div>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="faq-question">
                <div className="question-content">
                  <span className="faq-icon">{faq.icon}</span>
                  <h3>{faq.question}</h3>
                </div>
                <motion.button
                  className="toggle-btn"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                >
                  <FiPlus />
                </motion.button>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
