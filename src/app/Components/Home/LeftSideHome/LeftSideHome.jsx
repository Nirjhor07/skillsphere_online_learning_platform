"use client";
import { CiPlay1 } from "react-icons/ci";
import { GoDot } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";
const LeftSideHome = () => {
  return (
    <div className="flex flex-col space-y-2.5 lg:flex-row-reverse gap-20 items-center">
      {/* Banner Image Optional */}

      <div className="space-y-4 text-center lg:text-left">
        <motion.p
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="badge bg-blue-100 p-4 text-blue-700 font-bold border-none"
        >
          <GoDot /> New: Live Courses & Certificates Available
        </motion.p>

        <div className="space-y-4">
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
            Upgrade Your
          </h1>

          <motion.h1
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            className="text-4xl lg:text-7xl font-bold text-blue-600 leading-tight"
          >
            Skills With SkillSphere
          </motion.h1>

          <p className="py-4 text-[#627382] text-base lg:text-lg">
            Learn from expert instructors with premium online courses,
            real-world projects, and career-focused training.
            <br />
            Study anytime, anywhere, and grow your future today.
          </p>

          <div className="gap-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
            <Link href={"/courses"}>
              <button className="btn btn-primary rounded-2xl px-6">
                Explore Courses
              </button>
            </Link>

            <button className="btn btn-outline rounded-2xl px-6">
              <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideHome;
