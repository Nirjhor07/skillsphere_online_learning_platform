"use client";

import Image from "next/image";
import { FaClock, FaStar, FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const PopularCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <figure className="relative">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />

        {/* Popular Badge */}
        {course.popular && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="badge badge-warning absolute top-2 left-2"
          >
            Popular
          </motion.div>
        )}
      </figure>

      {/* Body */}
      <div className="card-body">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="card-title text-lg font-bold line-clamp-2"
        >
          {course.title}
        </motion.h2>

        {/* Instructor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-gray-500"
        >
          <FaUser /> {course.instructor}
        </motion.p>

        {/* Info Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex justify-between text-sm mt-2 text-gray-600"
        >
          <span className="flex items-center gap-1">
            <FaClock /> {course.duration}
          </span>

          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {course.rating}
          </span>
        </motion.div>

        {/* Level + Category */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="flex gap-2 mt-3"
        >
          <div className="badge badge-info">{course.level}</div>
          <div className="badge badge-outline">{course.category}</div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-sm text-gray-500 mt-2 line-clamp-2"
        >
          {course.description}
        </motion.p>

        {/* Button */}
        <Link href={`/coursedetails/${course.id}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card-actions justify-end mt-3"
          >
            <button className="btn btn-primary btn-sm">View Course</button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PopularCard;
