"use client";
import StatCards from "@/app/Components/Shared/StatCards";
import { containerVariants, itemVariants } from "@/lib/motionFunctions";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa6";

const AboutPageContent = () => {
  const features = [
    {
      icon: <FaGraduationCap size={40} />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Innovative Courses",
      description: "Cutting-edge curriculum designed for modern learners",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Community Driven",
      description: "Connect with learners from around the world",
    },
    {
      icon: <FaTrophy size={40} />,
      title: "Certifications",
      description: "Earn recognized certificates upon course completion",
    },
  ];

  return (
    <div className="bg-linear-to-b from-violet-50 via-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-linear-to-b from-violet-600 to-blue-600 text-white py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About SkillSphere
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-violet-100 max-w-2xl mx-auto"
          >
            Empowering learners worldwide with high-quality education and
            professional growth opportunities
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-violet-600"
          >
            <h2 className="text-3xl font-bold text-violet-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At SkillSphere, our mission is to democratize education and make
              quality learning accessible to everyone, regardless of their
              background or location.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that education is the key to personal and professional
              growth, and we are committed to providing the tools and resources
              needed for success.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We envision a world where continuous learning is the norm, and
              every individual has access to world-class education that bridges
              the gap between skills and opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to be the leading online learning platform that
              transforms lives through education and innovation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-linear-to-b from-violet-100 to-blue-100">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Why Choose SkillSphere?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(109, 40, 217, 0.15)",
                }}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <div className="text-violet-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatCards></StatCards>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 text-center"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of learners transforming their careers with
            SkillSphere
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-b from-violet-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-lg transition-all"
          >
            Explore Courses
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPageContent;
