"use client";
import { motion } from "framer-motion";
const StatCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-4 bg-linear-to-b from-blue-600 to-violet-600 text-white"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10K+", label: "Active Learners" },
            { number: "500+", label: "Expert Courses" },
            { number: "95%", label: "Satisfaction Rate" },
            { number: "50+", label: "Industry Partners" },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2"
              >
                {stat.number}
              </motion.p>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatCards;
