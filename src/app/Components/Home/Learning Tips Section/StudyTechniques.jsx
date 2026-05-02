"use client";
import {
  containerVariants,
  itemVariants,
  studyTechniques,
  TipCard,
} from "@/lib/motionFunctions";

import { motion } from "framer-motion";
const StudyTechniques = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-20"
    >
      <motion.h3
        variants={itemVariants}
        className="text-3xl font-bold text-violet-700 mb-10 flex items-center gap-3"
      >
        Study Techniques
      </motion.h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {studyTechniques.map((tip, index) => (
          <TipCard key={index} tip={tip} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default StudyTechniques;
