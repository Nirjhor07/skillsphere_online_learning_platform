"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaBook,
  FaBrain,
  FaClock,
  FaDownLeftAndUpRightToCenter,
  FaHeartPulse,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa6";

// tip cards elements for both studytechniques and time management its basically a card componenet
export const TipCard = ({ tip, index }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(109, 40, 217, 0.2)",
    }}
    className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gradient"
  >
    <div className={`bg-linear-to-r ${tip.color} p-4 rounded-lg w-fit mb-4`}>
      <div className="text-white">{tip.icon}</div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>
    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
  </motion.div>
);

// study techniques elemets
export const studyTechniques = [
  {
    icon: <FaBrain size={40} />,
    title: "Active Recall",
    description:
      "Test yourself frequently on the material you've learned to strengthen memory retention.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaBook size={40} />,
    title: "Spaced Repetition",
    description:
      "Review material at increasing intervals to boost long-term memory and comprehension.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaCheckCircle size={40} />,
    title: "Interleaving",
    description:
      "Mix different topics during study sessions for better learning and problem-solving skills.",
    color: "from-violet-500 to-blue-500",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Study Groups",
    description:
      "Collaborate with peers to share perspectives, discuss concepts, and learn together.",
    color: "from-green-500 to-emerald-500",
  },
];

// items variant for motion style
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

//container variant
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

//time management elements
export const timeManagementTips = [
  {
    icon: <FaClock size={40} />,
    title: "Pomodoro Technique",
    description:
      "Study for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer break.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaDownLeftAndUpRightToCenter size={40} />,
    title: "Set Clear Goals",
    description:
      "Define specific, measurable, and achievable goals for each study session.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Prioritize Tasks",
    description:
      "Focus on high-impact tasks first when your energy and focus are at their peak.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <FaHeartPulse size={40} />,
    title: "Balance & Rest",
    description:
      "Don't forget to rest, exercise, and maintain a healthy lifestyle for optimal learning.",
    color: "from-pink-500 to-rose-500",
  },
];
