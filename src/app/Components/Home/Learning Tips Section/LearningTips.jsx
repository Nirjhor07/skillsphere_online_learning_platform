"use client";

import { motion } from "framer-motion";
import StudyTechniques from "./StudyTechniques";
import TimeManagement from "./TimeManagement";

const LearningTips = () => {
  return (
    <div className="bg-linear-to-b from-violet-50 via-blue-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learning Tips & Techniques
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master effective study strategies and time management techniques to
            maximize your learning potential
          </p>
        </div>

        {/* Study Techniques Section */}
        <StudyTechniques />

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="h-1 bg-linear-to-r from-violet-600 to-blue-600 rounded-full my-16 origin-left"
        />

        {/* Time Management Tips Section */}
        <TimeManagement />
      </div>
    </div>
  );
};

export default LearningTips;
