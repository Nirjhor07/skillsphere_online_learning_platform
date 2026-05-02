"use client";

import Image from "next/image";
import { FaStar, FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const InstructorCard = ({ instructor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <figure className="relative w-full h-64 overflow-hidden">
        <Image
          src={instructor.image}
          alt={instructor.name}
          width={300}
          height={250}
          className="w-full object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        {/* Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
          className="card-title text-lg font-bold line-clamp-1"
        >
          {instructor.name}
        </motion.h2>

        {/* Specialty */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 + index * 0.1, duration: 0.4 }}
          className="text-sm text-gray-600 line-clamp-1"
        >
          {instructor.specialty}
        </motion.p>

        {/* Rating and Students */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
          className="flex gap-4 text-sm mt-2"
        >
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{instructor.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUser className="text-blue-500" />
            <span className="font-semibold">
              {instructor.students}+ Students
            </span>
          </div>
        </motion.div>

        {/* Button */}
        <Link href={"/instructor"}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-sm mt-3 w-full"
          >
            View Profile
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
